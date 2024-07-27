"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleManager = void 0;
const TaskFactory_1 = require("./TaskFactory");
class ScheduleManager {
    constructor() {
        this.tasks = [];
        this.observers = [];
    }
    static getInstance() {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }
    addTask(description, startTime, endTime, priority) {
        const newTask = TaskFactory_1.TaskFactory.createTask(description, startTime, endTime, priority);
        if (this.tasks.some(task => this.isOverlap(task, newTask))) {
            this.notifyObservers('Task conflicts with existing task');
            return 'Error: Task conflicts with existing task';
        }
        this.tasks.push(newTask);
        return 'Task added successfully. No conflicts.';
    }
    removeTask(description) {
        const index = this.tasks.findIndex(task => task.description === description);
        if (index === -1) {
            return 'Error: Task not found.';
        }
        this.tasks.splice(index, 1);
        return 'Task removed successfully.';
    }
    viewTasks() {
        if (this.tasks.length === 0) {
            return 'No tasks scheduled for the day.';
        }
        this.tasks.sort((a, b) => a.startTime.localeCompare(b.startTime));
        return this.tasks.map(task => `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}]`).join('\n');
    }
    isOverlap(task1, task2) {
        return task1.startTime < task2.endTime && task2.startTime < task1.endTime;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
exports.ScheduleManager = ScheduleManager;
