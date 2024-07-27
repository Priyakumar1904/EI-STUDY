"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleManager = void 0;
const TaskFactory_1 = require("./TaskFactory");
const utils_1 = require("./utils");
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
        if (!description.trim() || !startTime.trim() || !endTime.trim() || !priority.trim()) {
            return 'Error: All fields must be filled.';
        }
        if (!(0, utils_1.isValidTimeFormat)(startTime) || !(0, utils_1.isValidTimeFormat)(endTime)) {
            return 'Error: Invalid time format. Please use HH:MM in 24-hour format.';
        }
        const startMinutes = (0, utils_1.timeToMinutes)(startTime);
        const endMinutes = (0, utils_1.timeToMinutes)(endTime);
        if (startMinutes === null || endMinutes === null) {
            return 'Error: Invalid time format.';
        }
        if (startMinutes >= endMinutes) {
            return 'Error: End time must be after start time.';
        }
        const validPriorities = ['high', 'medium', 'low'];
        if (!validPriorities.includes(priority.toLowerCase())) {
            return 'Error: Invalid priority level. Allowed values are "high", "medium", or "low".';
        }
        const newTask = TaskFactory_1.TaskFactory.createTask(description, startTime, endTime, priority);
        if (this.tasks.some(task => (0, utils_1.isOverlapping)(task.startTime, task.endTime, startTime, endTime))) {
            const conflictMessage = `Task conflicts with existing task(s)`;
            this.notifyObservers(conflictMessage);
            return `Error: ${conflictMessage}`;
        }
        this.tasks.push(newTask);
        this.notifyObservers(`New task added: ${description}`);
        return 'Task added successfully. No conflicts.';
    }
    removeTask(description) {
        const index = this.tasks.findIndex(task => task.description.toLowerCase() === description.toLowerCase());
        if (index === -1) {
            return 'Error: Task not found.';
        }
        this.tasks.splice(index, 1);
        this.notifyObservers(`Task removed: ${description}`);
        return 'Task removed successfully.';
    }
    editTask(oldDescription, newDescription, newStartTime, newEndTime, newPriority) {
        const task = this.tasks.find(task => task.description.toLowerCase() === oldDescription.toLowerCase());
        if (!task) {
            return 'Error: Task not found.';
        }
        if (!(0, utils_1.isValidTimeFormat)(newStartTime) || !(0, utils_1.isValidTimeFormat)(newEndTime)) {
            return 'Error: Invalid time format. Please use HH:MM in 24-hour format.';
        }
        const startMinutes = (0, utils_1.timeToMinutes)(newStartTime);
        const endMinutes = (0, utils_1.timeToMinutes)(newEndTime);
        if (startMinutes === null || endMinutes === null) {
            return 'Error: Invalid time format.';
        }
        if (startMinutes >= endMinutes) {
            return 'Error: End time must be after start time.';
        }
        const validPriorities = ['high', 'medium', 'low'];
        if (!validPriorities.includes(newPriority.toLowerCase())) {
            return 'Error: Invalid priority level. Allowed values are "high", "medium", or "low".';
        }
        if (this.tasks.some(t => t.description.toLowerCase() !== oldDescription.toLowerCase() && (0, utils_1.isOverlapping)(t.startTime, t.endTime, newStartTime, newEndTime))) {
            const conflictMessage = `Task conflicts with existing task(s)`;
            this.notifyObservers(conflictMessage);
            return `Error: ${conflictMessage}`;
        }
        task.description = newDescription;
        task.startTime = newStartTime;
        task.endTime = newEndTime;
        task.priority = newPriority;
        this.notifyObservers(`Task edited: ${oldDescription}`);
        return 'Task updated successfully.';
    }
    markTaskCompleted(description) {
        const task = this.tasks.find(task => task.description.toLowerCase() === description.toLowerCase());
        if (!task) {
            return 'Error: Task not found.';
        }
        task.markCompleted();
        this.notifyObservers(`Task marked as completed: ${description}`);
        return 'Task marked as completed.';
    }
    viewTasks() {
        if (this.tasks.length === 0) {
            return 'No tasks scheduled for the day.';
        }
        this.tasks.sort((a, b) => { var _a, _b; return ((_a = (0, utils_1.timeToMinutes)(a.startTime)) !== null && _a !== void 0 ? _a : 0) - ((_b = (0, utils_1.timeToMinutes)(b.startTime)) !== null && _b !== void 0 ? _b : 0); });
        return this.tasks.map(task => {
            const status = task.completed ? '[Completed]' : '[Not Completed]';
            return `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${status}`;
        }).join('\n');
    }
    viewTasksByPriority(priority) {
        const validPriorities = ['high', 'medium', 'low'];
        if (!validPriorities.includes(priority.toLowerCase())) {
            return 'Error: Invalid priority level. Allowed values are "high", "medium", or "low".';
        }
        const filteredTasks = this.tasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());
        if (filteredTasks.length === 0) {
            return `No tasks found with priority: ${priority}`;
        }
        filteredTasks.sort((a, b) => { var _a, _b; return ((_a = (0, utils_1.timeToMinutes)(a.startTime)) !== null && _a !== void 0 ? _a : 0) - ((_b = (0, utils_1.timeToMinutes)(b.startTime)) !== null && _b !== void 0 ? _b : 0); });
        return filteredTasks.map(task => {
            const status = task.completed ? '[Completed]' : '[Not Completed]';
            return `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${status}`;
        }).join('\n');
    }
    viewTasksByCompletion(completionStatus) {
        const statusLower = completionStatus.toLowerCase();
        if (statusLower !== 'completed' && statusLower !== 'incomplete') {
            return 'Error: Invalid completion status. Please use "completed" or "incomplete".';
        }
        const completed = statusLower === 'completed';
        const filteredTasks = this.tasks.filter(task => task.completed === completed);
        if (filteredTasks.length === 0) {
            return completed ? 'No completed tasks found.' : 'No incomplete tasks found.';
        }
        filteredTasks.sort((a, b) => { var _a, _b; return ((_a = (0, utils_1.timeToMinutes)(a.startTime)) !== null && _a !== void 0 ? _a : 0) - ((_b = (0, utils_1.timeToMinutes)(b.startTime)) !== null && _b !== void 0 ? _b : 0); });
        return filteredTasks.map(task => {
            const status = task.completed ? '[Completed]' : '[Not Completed]';
            return `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${status}`;
        }).join('\n');
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}
exports.ScheduleManager = ScheduleManager;
