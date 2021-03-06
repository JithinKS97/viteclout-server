export const abi = [
  {
    constant: false,
    inputs: [
      { name: "receiver", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "sendToken",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "amount", type: "uint256" },
      { name: "receiver", type: "address" },
      { name: "sender", type: "address" },
    ],
    name: "getPrice",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "offchain",
  },
  {
    constant: true,
    inputs: [{ name: "_address", type: "address" }],
    name: "getBalanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "offchain",
  },
  {
    constant: true,
    inputs: [],
    name: "getCirculatingSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "offchain",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export const code =
  "60806040526000600255670de0b6b3a764000060035534801561002157600080fd5b50336000806101000a81548174ffffffffffffffffffffffffffffffffffffffffff021916908374ffffffffffffffffffffffffffffffffffffffffff1602179055506003546103e802600160008060009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002181905550610597806100e16000396000f3fe608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806320a262b414610046575b600080fd5b6100936004803603604081101561005c57600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610095565b005b600160003374ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002154811115151561014e576040517f4b2bae7e0000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f496e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b610159818333610397565b3414151561016657600080fd5b80600160003374ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000216000828254039250508190555080600160008474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168152602001908152602001600021600082825401925050819055506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff163374ffffffffffffffffffffffffffffffffffffffffff161480156102b357506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168274ffffffffffffffffffffffffffffffffffffffffff1614155b156102cd5780600260008282540192505081905550610393565b6000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168274ffffffffffffffffffffffffffffffffffffffffff1614801561037c57506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff163374ffffffffffffffffffffffffffffffffffffffffff1614155b1561039257806002600082825403925050819055505b5b5050565b60008060025414156103bc576103e860038054028115156103b457fe5b049050610564565b600060025490506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168374ffffffffffffffffffffffffffffffffffffffffff1614801561047257506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168474ffffffffffffffffffffffffffffffffffffffffff1614155b1561048157848101905061053c565b6000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168474ffffffffffffffffffffffffffffffffffffffffff1614801561053057506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168374ffffffffffffffffffffffffffffffffffffffffff1614155b1561053b5784810390505b5b6000811415151561054c57600080fd5b6103e86002820a60030281151561055f57fe5b049150505b939250505056fea165627a7a72305820198bb8b67497b73022db70402ca244b4803698dc9efbae0c86d94b436252fd440029";
