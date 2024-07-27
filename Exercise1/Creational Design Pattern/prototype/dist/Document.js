"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
class Document {
    constructor(content) {
        this.content = content;
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    clone() {
        return new Document(this.content);
    }
}
exports.Document = Document;
