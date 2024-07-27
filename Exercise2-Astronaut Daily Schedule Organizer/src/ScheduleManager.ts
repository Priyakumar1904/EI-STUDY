import { Task } from './Task';
import { TaskFactory } from './TaskFactory';
import { Observer } from './Observer';
import { isValidTimeFormat, timeToMinutes, isOverlapping } from './utils';

export class ScheduleManager {
  private static instance: ScheduleManager;
  private tasks: Task[] = [];
  private observers: Observer[] = [];

  private constructor() {}

  static getInstance(): ScheduleManager {
    if (!ScheduleManager.instance) {
      ScheduleManager.instance = new ScheduleManager();
    }
    return ScheduleManager.instance;
  }

  addTask(description: string, startTime: string, endTime: string, priority: string): string {
    if (!description.trim() || !startTime.trim() || !endTime.trim() || !priority.trim()) {
      return 'Error: All fields must be filled.';
    }

    if (!isValidTimeFormat(startTime) || !isValidTimeFormat(endTime)) {
      return 'Error: Invalid time format. Please use HH:MM in 24-hour format.';
    }

    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);

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

    const newTask = TaskFactory.createTask(description, startTime, endTime, priority);

    if (this.tasks.some(task => isOverlapping(task.startTime, task.endTime, startTime, endTime))) {
      const conflictMessage = `Task conflicts with existing task(s)`;
      this.notifyObservers(conflictMessage);
      return `Error: ${conflictMessage}`;
    }

    this.tasks.push(newTask);
    this.notifyObservers(`New task added: ${description}`);
    return 'Task added successfully. No conflicts.';
  }
  
  removeTask(description: string): string {
    const index = this.tasks.findIndex(task => task.description.toLowerCase() === description.toLowerCase());
    if (index === -1) {
      return 'Error: Task not found.';
    }
    this.tasks.splice(index, 1);
    this.notifyObservers(`Task removed: ${description}`);
    return 'Task removed successfully.';
  }

  editTask(oldDescription: string, newDescription: string, newStartTime: string, newEndTime: string, newPriority: string): string {
    const task = this.tasks.find(task => task.description.toLowerCase() === oldDescription.toLowerCase());
    if (!task) {
      return 'Error: Task not found.';
    }

    if (!isValidTimeFormat(newStartTime) || !isValidTimeFormat(newEndTime)) {
      return 'Error: Invalid time format. Please use HH:MM in 24-hour format.';
    }

    const startMinutes = timeToMinutes(newStartTime);
    const endMinutes = timeToMinutes(newEndTime);

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

    if (this.tasks.some(t => t.description.toLowerCase() !== oldDescription.toLowerCase() && isOverlapping(t.startTime, t.endTime, newStartTime, newEndTime))) {
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

  markTaskCompleted(description: string): string {
    const task = this.tasks.find(task => task.description.toLowerCase() === description.toLowerCase());
    if (!task) {
      return 'Error: Task not found.';
    }

    task.markCompleted();
    this.notifyObservers(`Task marked as completed: ${description}`);
    return 'Task marked as completed.';
  }

  viewTasks(): string {
    if (this.tasks.length === 0) {
      return 'No tasks scheduled for the day.';
    }
    this.tasks.sort((a, b) => (timeToMinutes(a.startTime) ?? 0) - (timeToMinutes(b.startTime) ?? 0));
    return this.tasks.map(task => {
      const status = task.completed ? '[Completed]' : '[Not Completed]';
      return `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${status}`;
    }).join('\n');
  }

  viewTasksByPriority(priority: string): string {
    const validPriorities = ['high', 'medium', 'low'];
    if (!validPriorities.includes(priority.toLowerCase())) {
      return 'Error: Invalid priority level. Allowed values are "high", "medium", or "low".';
    }

    const filteredTasks = this.tasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());
    if (filteredTasks.length === 0) {
      return `No tasks found with priority: ${priority}`;
    }
    filteredTasks.sort((a, b) => (timeToMinutes(a.startTime) ?? 0) - (timeToMinutes(b.startTime) ?? 0));
    return filteredTasks.map(task => {
      const status = task.completed ? '[Completed]' : '[Not Completed]';
      return `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${status}`;
    }).join('\n');
  }

  viewTasksByCompletion(completionStatus: string): string {
    const statusLower = completionStatus.toLowerCase();
    if (statusLower !== 'completed' && statusLower !== 'incomplete') {
      return 'Error: Invalid completion status. Please use "completed" or "incomplete".';
    }

    const completed = statusLower === 'completed';
    const filteredTasks = this.tasks.filter(task => task.completed === completed);
    if (filteredTasks.length === 0) {
      return completed ? 'No completed tasks found.' : 'No incomplete tasks found.';
    }
    filteredTasks.sort((a, b) => (timeToMinutes(a.startTime) ?? 0) - (timeToMinutes(b.startTime) ?? 0));
    return filteredTasks.map(task => {
      const status = task.completed ? '[Completed]' : '[Not Completed]';
      return `${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${status}`;
    }).join('\n');
  }


  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  private notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
}
