"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishedState = void 0;
class PublishedState {
    edit(document) {
        console.log("Document is published. You cannot edit it.");
    }
    review(document) {
        console.log("Document is already published. No review needed.");
    }
    publish(document) {
        console.log("Document is already published.");
    }
}
exports.PublishedState = PublishedState;
