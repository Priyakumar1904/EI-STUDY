"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const DraftState_1 = require("./DraftState");
class Document {
    constructor() {
        this.state = new DraftState_1.DraftState(); // Initial state
    }
    setState(state) {
        this.state = state;
    }
    edit() {
        this.state.edit(this);
    }
    review() {
        this.state.review(this);
    }
    publish() {
        this.state.publish(this);
    }
}
exports.Document = Document;
