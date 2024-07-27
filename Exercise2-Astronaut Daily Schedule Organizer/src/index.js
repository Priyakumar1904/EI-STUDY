"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScheduleManager_1 = require("./ScheduleManager");
class ConsoleObserver {
    update(message) {
        console.log(message);
    }
}
const scheduleManager = ScheduleManager_1.ScheduleManager.getInstance();
const consoleObserver = new ConsoleObserver();
scheduleManager.addObserver(consoleObserver);
// Example usage:
console.log(scheduleManager.addTask("Morning Exercise", "07:00", "08:00", "High"));
console.log(scheduleManager.addTask("Team Meeting", "09:00", "10:00", "Medium"));
console.log(scheduleManager.viewTasks());
console.log(scheduleManager.removeTask("Morning Exercise"));
console.log(scheduleManager.addTask("Lunch Break", "12:00", "13:00", "Low"));
console.log(scheduleManager.viewTasks());
