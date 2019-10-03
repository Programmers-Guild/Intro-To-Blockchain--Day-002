const Block = require("./block");
const data = "foo";
let genesis, block;

describe("Block", () => {
  beforeEach(() => {
    genesis = Block.genesis();
    block = Block.mineBlock(genesis, data);
  });

  it("has block's prevHash as genesis block's hash", () => {
    expect(block.prevHash).toEqual(genesis.hash);
  });
});
