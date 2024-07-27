"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// Task.ts
class Task {
    constructor(description, startTime, endTime, priority) {
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority;
        this.completed = false; // Initialize as not completed
    }
    markCompleted() {
        this.completed = true;
    }
}
exports.Task = Task;
