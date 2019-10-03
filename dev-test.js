const Block = require("./block");

const genesis = Block.genesis();
const block = Block.mineBlock(genesis, "foo");

console.log("dev-test genesis: ", genesis.toString());
console.log("dev-test block: ", block.toString());
