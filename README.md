# Astronaut Daily Schedule Organizer

## Overview
The Astronaut Daily Schedule Organizer is a command-line application that helps manage daily tasks for astronauts. It supports adding, editing, removing, marking tasks as completed, and viewing tasks based on various criteria such as priority and completion status. The application follows SOLID principles and design patterns such as Singleton, Factory, and Observer.

## Features
- Add new tasks with description, start time, end time, and priority.
- Remove existing tasks.
- Edit existing tasks.
- Mark tasks as completed.
- View all tasks sorted by start time.
- View tasks filtered by priority.
- View tasks filtered by completion status.
- Real-time notifications for task conflicts.
- Logging for application usage and errors.

## Design Patterns
- **Singleton**: Ensures a single instance of `ScheduleManager` to manage all tasks.
- **Factory**: Used to create `Task` objects through `TaskFactory`.
- **Observer**: Notifies observers of task conflicts and other updates.
- 
## Output
===================================== 

 Astronaut Daily Schedule Organizer 

===================================== 

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: wakeup
Enter start time (HH:MM): 6:00
Enter end time (HH:MM): 7:00
Enter priority: high
New task added: wakeup
Task added successfully. No conflicts.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: freshup
Enter start time (HH:MM): 7:00
Enter end time (HH:MM): 7:30
Enter priority: medium
New task added: freshup
Task added successfully. No conflicts.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: lunch
Enter start time (HH:MM): 13:00
Enter end time (HH:MM): 13:30
Enter priority: low
New task added: lunch
Task added successfully. No conflicts.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: breakfast
Enter start time (HH:MM): 8:00
Enter end time (HH:MM): 9:00
Enter priority: low
New task added: breakfast
Task added successfully. No conflicts.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 5
6:00 - 7:00: wakeup [high] [Not Completed]
7:00 - 7:30: freshup [medium] [Not Completed]
8:00 - 9:00: breakfast [low] [Not Completed]
13:00 - 13:30: lunch [low] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 2
Enter the description of the task to remove: freshup
Task removed: freshup
Task removed successfully.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 5
6:00 - 7:00: wakeup [high] [Not Completed]
8:00 - 9:00: breakfast [low] [Not Completed]
13:00 - 13:30: lunch [low] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 3
Enter the description of the task to edit: breakfast
Enter new description: brunch
Enter new start time (HH:MM): 11:00
Enter new end time (HH:MM): 12:00
Enter new priority: medium
Task edited: breakfast
Task updated successfully.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 5
6:00 - 7:00: wakeup [high] [Not Completed]
11:00 - 12:00: brunch [medium] [Not Completed]
13:00 - 13:30: lunch [low] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 6
Enter the priority level to view tasks: low
13:00 - 13:30: lunch [low] [Not Completed]

===================================== 

 Astronaut Daily Schedule Organizer 

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 6
Enter the priority level to view tasks: high
6:00 - 7:00: wakeup [high] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 6
Enter the priority level to view tasks: medium
11:00 - 12:00: brunch [medium] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 4
Enter the description of the task to mark as completed: wakeup
Task marked as completed: wakeup
Task marked as completed.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 5
6:00 - 7:00: wakeup [high] [Completed]
11:00 - 12:00: brunch [medium] [Not Completed]
13:00 - 13:30: lunch [low] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 7
Enter completion status to view tasks (completed/incomplete): completed
6:00 - 7:00: wakeup [high] [Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 7
Enter completion status to view tasks (completed/incomplete): incomplete
11:00 - 12:00: brunch [medium] [Not Completed]
13:00 - 13:30: lunch [low] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: read books
Enter start time (HH:MM): 11:15
Enter end time (HH:MM): 11:30
Enter priority: high
Task conflicts with existing task(s)
Error: Task conflicts with existing task(s)

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description:
Enter start time (HH:MM): 8:00
Enter end time (HH:MM): 9:00
Enter priority: high
Error: All fields must be filled.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: send birthday message
Enter start time (HH:MM): 26:00
Enter end time (HH:MM): 27:00
Enter priority: low
Error: Invalid time format. Please use HH:MM in 24-hour format.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: send birthday message
Enter start time (HH:MM): 12:00
Enter end time (HH:MM): 10:00
Enter priority: low
Error: End time must be after start time.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: send birthday message
Enter start time (HH:MM): 12:00
Enter end time (HH:MM): 13:00
Enter priority: hi
Error: Invalid priority level. Allowed values are "high", "medium", or "low".

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 1
Enter description: send birthday message
Enter start time (HH:MM): 12:00
Enter end time (HH:MM): 13:00
Enter priority: high
New task added: send birthday message
Task added successfully. No conflicts.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 5
6:00 - 7:00: wakeup [high] [Completed]
11:00 - 12:00: brunch [medium] [Not Completed]
12:00 - 13:00: send birthday message [high] [Not Completed]
13:00 - 13:30: lunch [low] [Not Completed]

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 2
Enter the description of the task to remove: test
Error: Task not found.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 3
Enter the description of the task to edit: test
Enter new description: test
Enter new start time (HH:MM): 10:00
Enter new end time (HH:MM): 11:00
Enter new priority: high
Error: Task not found.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 4
Enter the description of the task to mark as completed: test
Error: Task not found.

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 6
Enter the priority level to view tasks: k
Error: Invalid priority level. Allowed values are "high", "medium", or "low".

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 7
Enter completion status to view tasks (completed/incomplete): c
Error: Invalid completion status. Please use "completed" or "incomplete".

=====================================

 Astronaut Daily Schedule Organizer

=====================================

Menu:
1. Add a new task
2. Remove an existing task
3. Edit an existing task
4. Mark a task as completed
5. View all tasks
6. View tasks by priority
7. View tasks by completion status
8. Exit
Choose an option: 8
PS E:\Astronaut Daily Schedule Organizer>
