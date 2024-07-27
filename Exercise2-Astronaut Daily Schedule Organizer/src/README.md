# Schedule Manager Application

## Overview

The Schedule Manager is a command-line application designed to manage tasks efficiently. It allows users to add, remove, edit, and view tasks based on priority and completion status. The application uses 24-hour time format for input and incorporates various design patterns to ensure robustness and maintainability.

## Features

- Add, remove, edit, and view tasks
- Mark tasks as completed
- View tasks by priority level
- View tasks by completion status
- Conflict detection for overlapping tasks
- Logging mechanism to track application usage and errors
- Graceful error handling with user-friendly messages

## Design Patterns Used

### Singleton Pattern

The `ScheduleManager` class follows the Singleton design pattern to ensure that only one instance of the schedule manager exists throughout the application's lifecycle. This is crucial for maintaining a single source of truth for task management.

**Use Case:**

- Ensures that all operations on tasks are performed on the same instance of the `ScheduleManager`, preventing data inconsistencies.

### Factory Pattern

The `TaskFactory` class implements the Factory design pattern to create `Task` objects. This pattern is used to encapsulate the creation logic of tasks and to maintain a clean and simple interface for creating tasks.

**Use Case:**

- Encapsulates the task creation logic, allowing for easy modifications and extensions to the task creation process in the future.

### Observer Pattern

The `Observer` pattern is implemented to notify users of important events, such as conflicts with existing tasks or changes to the task list. The `ScheduleManager` class maintains a list of observers and notifies them of changes.

**Use Case:**

- Alerts users when a new task conflicts with an existing one, ensuring that users are aware of potential scheduling issues.
