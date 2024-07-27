// Task.ts
export class Task {
    description: string;
    startTime: string;
    endTime: string;
    priority: string;
    completed: boolean;  // Add completion status
  
    constructor(description: string, startTime: string, endTime: string, priority: string) {
      this.description = description;
      this.startTime = startTime;
      this.endTime = endTime;
      this.priority = priority;
      this.completed = false;  // Initialize as not completed
    }
  
    markCompleted(): void {
      this.completed = true;
    }
  }
  