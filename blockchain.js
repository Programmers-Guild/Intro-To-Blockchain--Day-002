const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(block);

    return block;
  }

  isValidChain(chain) {
    // 3 conditions for a chain to be valid:
    // first block should be a genisis block, the prevHash of the current block is the hash of the previous block,
    // the hash of

    // check to see if first block is genesis block
    if (JSON.stringify(chain[0]) == JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const prevBlock = chain[i - 1];
      const block = chain[i];
      if (block.prevHash != prevBlock.hash || block.hash != Block.hashBlock)
        return false;
    }

    return true;
  }

  replaceChain(newChain) {
    // we only want to replace the if 2 conditions: newChain needs to be valid, and newChain needs to be strictly longer than this.chain

    if (!this.isValidChain(newChain)) {
      console.log("The new chain is not valid");
      return;
    } else if (newChain.length <= this.chain.length) {
      console.log("The new chain is not longer than the existing chain");
      return;
    }

    this.chain = newChain;
    return;
  }
}

module.exports = Blockchain;
