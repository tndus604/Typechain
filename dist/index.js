"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlcok = new Block(0, "2020202020202020", "", "Hello", 123456);
let blockchain = [genesisBlcok];
console.log(blockchain);
//# sourceMappingURL=index.js.map