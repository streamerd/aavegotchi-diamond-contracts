/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShopFacet, ShopFacetInterface } from "../ShopFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numAavegotchisToPurchase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "BuyPortals",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "PurchaseItemsWithGhst",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "PurchaseItemsWithVouchers",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalPrice",
        type: "uint256",
      },
    ],
    name: "PurchaseTransferItemsWithGhst",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ghst",
        type: "uint256",
      },
    ],
    name: "buyPortals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "purchaseItemsWithGhst",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_quantities",
        type: "uint256[]",
      },
    ],
    name: "purchaseTransferItemsWithGhst",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612166806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063432788ec14610046578063e0a769471461005b578063ebdc3b581461006e575b600080fd5b61005961005436600461189d565b610081565b005b61005961006936600461191b565b610399565b61005961007c36600461189d565b610898565b6001600160a01b0385166100b05760405162461bcd60e51b81526004016100a790611ca3565b60405180910390fd5b8281146100cf5760405162461bcd60e51b81526004016100a790611f6a565b60006100d9610b8b565b9050306000805b8681101561021357600088888381811061010a57634e487b7160e01b600052603260045260246000fd5b905060200201359050600087878481811061013557634e487b7160e01b600052603260045260246000fd5b9050602002013590508060011461015e5760405162461bcd60e51b81526004016100a790611ed6565b600080600601838154811061018357634e487b7160e01b600052603260045260246000fd5b90600052602060002090600b0201905080600a0160059054906101000a900460ff166101c15760405162461bcd60e51b81526004016100a790611fb2565b60078101546101d09083612079565b6101da9086612041565b94506101e7868484610be8565b6101f28c8484610e28565b6101fd308488610eed565b505050808061020b906120db565b9150506100e0565b50601a546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610245908790600401611a39565b60206040518083038186803b15801561025d57600080fd5b505afa158015610271573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102959190611993565b9050818110156102b75760405162461bcd60e51b81526004016100a790611f33565b886001600160a01b0316836001600160a01b0316856001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8b8b8b8b60405161030a9493929190611aec565b60405180910390a4886001600160a01b0316846001600160a01b03167f858b3826e75d12c99fa27247519bdea4601f307a8c210c116543e57492d1d8b38a8a8a8a8860405161035d959493929190611b1e565b60405180910390a361036f848361109c565b61038e84848b8b8b8b8b60405180602001604052806000815250611191565b505050505050505050565b601654640100000000900461ffff1660008181526008602052604090206001810154808410156103db5760405162461bcd60e51b81526004016100a790611be4565b6103e361181a565b6103ee826005612079565b81526103fb826002612079565b61040690600a612079565b81516104129190612041565b6020820152610422826003612079565b61042d90600a612079565b602082015161043c9190612041565b604082018190528511156104625760405162461bcd60e51b81526004016100a790611b6b565b600061046c610b8b565b825190915060009081908811610499576104868589612059565b91506104928583612079565b9050610556565b602084015188116104fc576104af856002612079565b84516104bb908a612098565b6104c59190612059565b91506104d2856002612079565b6104dc9083612079565b84516104e89190612041565b90506104f5600583612041565b9150610556565b610507856003612079565b6020850151610516908a612098565b6105209190612059565b915061052d856003612079565b6105379083612079565b60208501516105469190612041565b9050610553600f83612041565b91505b60028601546000906105759084906301000000900462ffffff16612041565b87549091508111156105995760405162461bcd60e51b81526004016100a790611e79565b60008881526008602052604090819020600201805465ffffff0000001916630100000062ffffff851602179055601654905163ffffffff909116906001600160a01b038c811691908716907fd1c6c1067263f101cf1803f27d562d5514dcbb921a118e1e4f74b73a87f26d239061061590859089908990612023565b60405180910390a360005b8481101561086b578b6000600d0160008463ffffffff168152602001908152602001600020600a0160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550896000600d0160008463ffffffff168152602001908152602001600020600901601e6101000a81548161ffff021916908361ffff160217905550600060100180549050600060110160008463ffffffff1681526020019081526020016000208190555060006010018290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055506000600e0160008d6001600160a01b03166001600160a01b03168152602001908152602001600020805490506000600f0160008e6001600160a01b03166001600160a01b0316815260200190815260200160002060008463ffffffff168152602001908152602001600020819055506000600e0160008d6001600160a01b03166001600160a01b031681526020019081526020016000208290806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908363ffffffff1602179055508163ffffffff168c6001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a481610855816120f6565b9250508080610863906120db565b915050610620565b506016805463ffffffff191663ffffffff831617905561088b858461109c565b5050505050505050505050565b60006108a2610b8b565b90508382146108c35760405162461bcd60e51b81526004016100a790611d91565b6000805b85811015610a045760008787838181106108f157634e487b7160e01b600052603260045260246000fd5b905060200201359050600086868481811061091c57634e487b7160e01b600052603260045260246000fd5b905060200201359050600080600601838154811061094a57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600b0201905080600a0160059054906101000a900460ff166109885760405162461bcd60e51b81526004016100a790611fb2565b600082826009015461099a9190612041565b905081600801548111156109c05760405162461bcd60e51b81526004016100a790611d34565b6009820181905560078201546109d69084612079565b6109e09087612041565b95506109ed8c8585610e28565b5050505080806109fc906120db565b9150506108c7565b50601a546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610a36908690600401611a39565b60206040518083038186803b158015610a4e57600080fd5b505afa158015610a62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a869190611993565b905081811015610aa85760405162461bcd60e51b81526004016100a790611f33565b876001600160a01b0316836001600160a01b03167f7f1fb19599dd14c9ccda091f8e0e739f2d08c4663dde55de72fb22e6b261b9f18989898988604051610af3959493929190611b1e565b60405180910390a3876001600160a01b031660006001600160a01b0316846001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8a8a8a8a604051610b4f9493929190611aec565b60405180910390a4610b61838361109c565b610b818360008a8a8a8a8a60405180602001604052806000815250611191565b5050505050505050565b600033301415610be257600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150610be59050565b50335b90565b6000610bf2611252565b6001600160a01b0385166000908152600982016020908152604080832087845290915290205490915080831115610c3b5760405162461bcd60e51b81526004016100a790611de3565b610c458382612098565b6001600160a01b038616600090815260098401602090815260408083208884529091529020819055905080610e21576001600160a01b0385166000908152600b830160209081526040808320878452909152812054610ca690600190612098565b6001600160a01b0387166000908152600a8501602052604081205491925090610cd190600190612098565b9050808214610dac576001600160a01b0387166000908152600a850160205260408120805483908110610d1457634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508061ffff1685600a0160008a6001600160a01b03166001600160a01b031681526020019081526020016000208481548110610d6c57634e487b7160e01b600052603260045260246000fd5b600091825260209091200155610d83836001612041565b6001600160a01b0389166000908152600b87016020908152604080832094835293905291909120555b6001600160a01b0387166000908152600a850160205260409020805480610de357634e487b7160e01b600052603160045260246000fd5b6000828152602080822083016000199081018390559092019092556001600160a01b0389168252600b86018152604080832089845290915281205550505b5050505050565b6000610e32611252565b6001600160a01b03851660009081526009820160209081526040808320878452909152812080549293508492909190610e6c908490612041565b90915550506001600160a01b0384166000908152600b820160209081526040808320868452909152902054610ee7576001600160a01b0384166000818152600a830160209081526040808320805460018101825581855283852061ffff8a169101559383529254600b85018252838320878452909152919020555b50505050565b6000610ef7611252565b6001600160a01b038086166000908152602f83016020908152604080832088845282528083209387168352929052205490915080610f36575050611097565b6000818152602a83016020526040902060078101541580610f665750600a81015460ff6101009091041615156001145b80610f7a5750600a81015460ff1615156001145b15610f8757505050611097565b6005810154801561107457600282015460018301546003840154604051627eeac760e11b81526001600160a01b039384169362fdd58e93610fcd93911691600401611ad3565b60206040518083038186803b158015610fe557600080fd5b505afa158015610ff9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101d9190611993565b905081600501548110156110745760058201819055600682015460405184917f9a1e053d28c2efc6add1e4a5d1647a99e883b256a54f9ef4a0abf8fcba643a559161106b918591429061200d565b60405180910390a25b806110925760018201546110929084906001600160a01b0316611257565b505050505b505050565b60006110a6611252565b9050600060646110b7846021612079565b6110c19190612059565b9050600060646110d2856011612079565b6110dc9190612059565b9050600060056110ed866002612079565b6110f79190612059565b9050600081836111078689612098565b6111119190612098565b61111b9190612098565b601a8601549091506001600160a01b039081169061113d9082908a908861137c565b601f8601546111599082908a906001600160a01b03168761137c565b60208601546111759082908a906001600160a01b03168661137c565b601d860154610b819082908a906001600160a01b03168561137c565b853b801561038e5760405163bc197c8160e01b81526001600160a01b0388169063bc197c81906111d1908c908c908b908b908b908b908b90600401611a4d565b602060405180830381600087803b1580156111eb57600080fd5b505af11580156111ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611223919061196b565b6001600160e01b03191663bc197c8160e01b1461038e5760405162461bcd60e51b81526004016100a790611e2f565b600090565b6000611261611252565b9050600081602c0160405161127590611a27565b9081526020016040518091039020600085815260200190815260200160002090508060010154600014156112aa575050611378565b6000848152602a830160205260409020600a81015460ff610100909104161515600114806112e15750600a81015460ff1615156001145b156112ee57505050611378565b60018101546001600160a01b0385811691161461131d5760405162461bcd60e51b81526004016100a790611c6c565b600a8101805461ff001916610100179055600481015460405186917fc1ee70d4dadc0ea8041f31f81b07d0ac9374b6bf41956d9cae562e672f3f8a919161136691904390611fff565b60405180910390a2610e218585611454565b5050565b833b8061139b5760405162461bcd60e51b81526004016100a790611b9b565b600080866001600160a01b03166323b872dd60e01b8787876040516024016113c593929190611aaf565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516114039190611a0b565b6000604051808303816000865af19150503d8060008114611440576040519150601f19603f3d011682016040523d82523d6000602084013e611445565b606091505b5091509150611092828261179f565b600061145e611252565b9050600081602c0160405161147290611a27565b9081526020016040518091039020600085815260200190815260200160002090508060010154600014156114a7575050611378565b805480156114e657600083602c016040516114c190611a27565b9081526040805160209281900383019020600085815292529020600284810154910155505b6002820154801561152357600084602c0160405161150390611a27565b908152604080516020928190038301902060008581529252902084549055505b6000868152602a85016020908152604080832060048101548452602b88019092529182902091519091889161155790611a27565b90815260200160405180910390205414156115a457600284015460048201546000908152602b8701602052604090819020905161159390611a27565b908152604051908190036020019020555b6000600185018190558085556002850155604051602e8601906115c690611a27565b908152604080516020928190038301902060008a81529252902080549094509250821561162457600085602e016040516115ff90611a27565b9081526040805160209281900383019020600087815292529020600286810154910155505b60028401549150811561166357600085602e0160405161164390611a27565b908152604080516020928190038301902060008681529252902085549055505b506000868152602a8501602090815260408083206001600160a01b0389168452602d8801835281842060048201548552909252918290209151909188916116a990611a27565b908152602001604051809103902054141561170a5760028401546001600160a01b0387166000908152602d870160209081526040808320600486015484529091529081902090516116f990611a27565b908152604051908190036020019020555b60006001850181905580855560028086018290558201546001600160a01b039081168252602f870160209081526040808420600386015485528252808420928a168452919052808220919091556004820154905188917f276ac39b0f98215592b4487434c1618e3e527c57ca2f471ac93eb4eab16940919161178e91904290611fff565b60405180910390a250505050505050565b81156117e1578051156117dc57808060200190518101906117c09190611944565b6117dc5760405162461bcd60e51b81526004016100a790611c1b565b611378565b805115611802578060405162461bcd60e51b81526004016100a79190611b58565b60405162461bcd60e51b81526004016100a790611ce9565b60405180606001604052806003906020820280368337509192915050565b80356001600160a01b038116811461184f57600080fd5b919050565b60008083601f840112611865578182fd5b50813567ffffffffffffffff81111561187c578182fd5b602083019150836020808302850101111561189657600080fd5b9250929050565b6000806000806000606086880312156118b4578081fd5b6118bd86611838565b9450602086013567ffffffffffffffff808211156118d9578283fd5b6118e589838a01611854565b909650945060408801359150808211156118fd578283fd5b5061190a88828901611854565b969995985093965092949392505050565b6000806040838503121561192d578182fd5b61193683611838565b946020939093013593505050565b600060208284031215611955578081fd5b81518015158114611964578182fd5b9392505050565b60006020828403121561197c578081fd5b81516001600160e01b031981168114611964578182fd5b6000602082840312156119a4578081fd5b5051919050565b81835260006001600160fb1b038311156119c3578081fd5b6020830280836020870137939093016020019283525090919050565b600081518084526119f78160208601602086016120af565b601f01601f19169290920160200192915050565b60008251611a1d8184602087016120af565b9190910192915050565b651b1a5cdd195960d21b815260060190565b6001600160a01b0391909116815260200190565b6001600160a01b0388811682528716602082015260a060408201819052600090611a7a90830187896119ab565b8281036060840152611a8d8186886119ab565b90508281036080840152611aa181856119df565b9a9950505050505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b600060408252611b006040830186886119ab565b8281036020840152611b138185876119ab565b979650505050505050565b600060608252611b326060830187896119ab565b8281036020840152611b458186886119ab565b9150508260408301529695505050505050565b60006020825261196460208301846119df565b60208082526016908201527543616e277420627579206d6f7265207468616e20323560501b604082015260600190565b60208082526029908201527f4c696245524332303a20455243323020746f6b656e206164647265737320686160408201526873206e6f20636f646560b81b606082015260800190565b6020808252601e908201527f4e6f7420656e6f756768204748535420746f2062757920706f7274616c730000604082015260600190565b60208082526031908201527f4c696245524332303a207472616e73666572206f72207472616e7366657246726040820152706f6d2072657475726e65642066616c736560781b606082015260800190565b6020808252601d908201527f4d61726b6574706c6163653a206f776e6572206e6f742073656c6c6572000000604082015260600190565b60208082526026908201527f53686f7046616365743a2043616e2774207472616e7366657220746f2030206160408201526564647265737360d01b606082015260800190565b6020808252602b908201527f4c696245524332303a207472616e73666572206f72207472616e73666572467260408201526a1bdb481c995d995c9d195960aa1b606082015260800190565b60208082526038908201527f53686f7046616365743a20546f74616c206974656d2074797065207175616e7460408201527f6974792065786365656473206d6178207175616e746974790000000000000000606082015260800190565b60208082526032908201527f53686f7046616365743a205f6974656d496473206e6f742073616d65206c656e604082015271677468206173205f7175616e74697469657360701b606082015260800190565b6020808252602c908201527f4c69624974656d733a20446f65736e277420686176652074686174206d616e7960408201526b103a37903a3930b739b332b960a11b606082015260800190565b6020808252602a908201527f5765617261626c65733a205472616e736665722072656a65637465642f6661696040820152696c6564206279205f746f60b01b606082015260800190565b6020808252603c908201527f53686f7046616365743a204578636565646564206d6178206e756d626572206f60408201527f662061617665676f746368697320666f722074686973206861756e7400000000606082015260800190565b60208082526039908201527f53686f7046616365743a2043616e206f6e6c792070757263686173652031206f60408201527f6620616e206974656d20706572207472616e73616374696f6e00000000000000606082015260800190565b6020808252601b908201527f53686f7046616365743a204e6f7420656e6f7567682047485354210000000000604082015260600190565b60208082526028908201527f53686f7046616365743a20696473206e6f742073616d65206c656e6774682061604082015267732076616c75657360c01b606082015260800190565b6020808252602d908201527f53686f7046616365743a2043616e2774207075726368617365206974656d207460408201526c1e5c19481dda5d1a0811d214d5609a1b606082015260800190565b918252602082015260400190565b9283526020830191909152604082015260600190565b63ffffffff9390931683526020830191909152604082015260600190565b600082198211156120545761205461211a565b500190565b60008261207457634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156120935761209361211a565b500290565b6000828210156120aa576120aa61211a565b500390565b60005b838110156120ca5781810151838201526020016120b2565b83811115610ee75750506000910152565b60006000198214156120ef576120ef61211a565b5060010190565b600063ffffffff808316818114156121105761211061211a565b6001019392505050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212204f12ecd10df58a610e352a48c61b0e81f30d783defeca74c9365bd0a5d253b4964736f6c63430008010033";

export class ShopFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopFacet> {
    return super.deploy(overrides || {}) as Promise<ShopFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShopFacet {
    return super.attach(address) as ShopFacet;
  }
  connect(signer: Signer): ShopFacet__factory {
    return super.connect(signer) as ShopFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopFacetInterface {
    return new utils.Interface(_abi) as ShopFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopFacet {
    return new Contract(address, _abi, signerOrProvider) as ShopFacet;
  }
}