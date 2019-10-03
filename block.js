const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, prevHash, data, hash) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.data = data;
    this.hash = hash;
  }

  toString() {
    return `Block -
                  Timestamp: ${this.timestamp}
                  PrevHash : ${this.prevHash.substring(0, 10)}
                  Data     : ${this.data}
                  Hash     : ${this.hash.substring(0, 10)}
        `;
  }

  static genesis() {
    const timestamp = "Genesis Time";
    const prevHash = "----------";
    const data = [];
    const hash = Block.hash(timestamp, prevHash, data);

    return new this(timestamp, prevHash, data, hash);
  }

  static mineBlock(prevBlock, data) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    const hash = Block.hash(timestamp, prevHash, data);

    return new this(timestamp, prevHash, data, hash);
  }

  static hash(timestamp, prevHash, data) {
    return SHA256(`${timestamp}${prevHash}${data}`).toString();
  }

  static hashBlock(block) {
    return Block.hash(block.timestamp, block.prevBlock, block.data);
  }
}

module.exports = Block;
