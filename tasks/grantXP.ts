import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { gasPrice, maticDiamondAddress } from "../scripts/helperFunctions";
import { LedgerSigner } from "@ethersproject/hardware-wallets";
import { Signer } from "@ethersproject/abstract-signer";
import { DAOFacet } from "../typechain";
import { ContractReceipt, ContractTransaction } from "@ethersproject/contracts";
import { SubgraphGotchis } from "../types";

interface TaskArgs {
  filename: string;
  xpAmount: string;
  batchSize: string;
}

interface GotchisOwned {
  id: string;
}

interface Data {
  id: string;
  gotchisOwned: GotchisOwned[];
}

function strDisplay(str: string) {
  return addCommas(str.toString());
}

function addCommas(nStr: string) {
  nStr += "";
  const x = nStr.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

task("grantXP", "Grants XP to Gotchis by addresses")
  .addParam("filename", "File that contains the airdrop")
  .addParam("xpAmount", "Amount of XP that each Aavegotchi should receive")
  .addParam(
    "batchSize",
    "How many Aavegotchis to send at a time. Default is 500"
  )

  .setAction(async (taskArgs: TaskArgs, hre: HardhatRuntimeEnvironment) => {
    const filename: string = taskArgs.filename;
    const xpAmount: number = Number(taskArgs.xpAmount);
    const batchSize: number = Number(taskArgs.batchSize);

    const { addresses, gotchis } = require(`../data/airdrops/${filename}.ts`);

    const diamondAddress = maticDiamondAddress;
    const gameManager = "0xa370f2ADd2A9Fba8759147995d6A0641F8d7C119"; //await (await ethers.getContractAt('DAOFacet', diamondAddress)).gameManager()
    console.log(gameManager);
    let signer: Signer;
    const testing = ["hardhat", "localhost"].includes(hre.network.name);
    if (testing) {
      await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [gameManager],
      });
      signer = await hre.ethers.provider.getSigner(gameManager);
    } else if (hre.network.name === "matic") {
      signer = new LedgerSigner(hre.ethers.provider, "hid", "m/44'/60'/2'/0/0");
    } else {
      throw Error("Incorrect network selected");
    }

    const dao = (
      await hre.ethers.getContractAt("DAOFacet", diamondAddress)
    ).connect(signer) as DAOFacet;
    const data: SubgraphGotchis = gotchis;

    // find duplicates:
    const duplicateAddresses: string[] = [];
    const processedAddresses = new Set();
    for (const address of addresses) {
      if (!processedAddresses.has(address)) {
        processedAddresses.add(true);
      } else {
        duplicateAddresses.push(address);
      }
    }
    if (duplicateAddresses.length > 0) {
      console.log(duplicateAddresses);
      throw Error("Duplicate addresses");
    }

    let totalGotchis = 0;

    // group the data
    const txData = [];
    let txGroup = [];
    let tokenIdsNum = 0;
    for (const address of addresses) {
      const ownerRow = data.data.users.find(
        (obj) => obj.id.toLowerCase() === address.toLowerCase()
      );
      if (ownerRow) {
        if (batchSize < tokenIdsNum + ownerRow.gotchisOwned.length) {
          txData.push(txGroup);
          txGroup = [];
          tokenIdsNum = 0;
        }
        txGroup.push(ownerRow);
        tokenIdsNum += ownerRow.gotchisOwned.length;
        totalGotchis += ownerRow.gotchisOwned.length;
      }
    }
    if (tokenIdsNum > 0) {
      txData.push(txGroup);
      txGroup = [];
      tokenIdsNum = 0;
    }

    console.log(
      `Sending ${xpAmount} XP to ${totalGotchis} Aavegotchis in ${addresses.length} addresses!`
    );

    // send transactions
    let addressIndex = 0;
    for (const [i, txGroup] of txData.entries()) {
      console.log("i:", i);

      const txAddresses: string[] = txGroup.map((obj) => obj.id);
      addressIndex += txAddresses.length;
      const tokenIds: string[] = txGroup.reduce((acc: string[], obj: Data) => {
        return acc.concat(
          obj.gotchisOwned.map((tokenObj: GotchisOwned) => tokenObj.id)
        );
      }, []);

      console.log(`Sending ${xpAmount} XP to ${tokenIds.length} Aavegotchis `);

      const tx: ContractTransaction = await dao.grantExperience(
        tokenIds,
        Array(tokenIds.length).fill(xpAmount),
        { gasPrice: gasPrice }
      );
      console.log("tx:", tx.hash);
      let receipt: ContractReceipt = await tx.wait();
      console.log("Gas used:", strDisplay(receipt.gasUsed.toString()));
      if (!receipt.status) {
        throw Error(`Error:: ${tx.hash}`);
      }
      console.log(
        "Airdropped XP to Aaavegotchis. Last address:",
        txAddresses[txAddresses.length - 1]
      );
      console.log("A total of", tokenIds.length, "Aavegotchis");
      console.log("Current address index:", addressIndex);
      console.log("");
    }
  });