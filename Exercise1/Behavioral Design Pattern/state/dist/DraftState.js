"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftState = void 0;
const ModerationState_1 = require("./ModerationState");
class DraftState {
    edit(document) {
        console.log("Document is already in draft state. You can edit it.");
    }
    review(document) {
        console.log("Moving document to moderation state.");
        document.setState(new ModerationState_1.ModerationState());
    }
    publish(document) {
        console.log("Document cannot be published directly from draft state.");
    }
}
exports.DraftState = DraftState;
