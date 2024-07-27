"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationState = void 0;
const PublishedState_1 = require("./PublishedState");
class ModerationState {
    edit(document) {
        console.log("Document is under moderation. You cannot edit it.");
    }
    review(document) {
        console.log("Document is already under moderation.");
    }
    publish(document) {
        console.log("Publishing document.");
        document.setState(new PublishedState_1.PublishedState());
    }
}
exports.ModerationState = ModerationState;
