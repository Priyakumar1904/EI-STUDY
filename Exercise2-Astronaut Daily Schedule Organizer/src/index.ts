import readline from 'readline';
import { ScheduleManager } from './ScheduleManager';
import { ConsoleObserver } from './consoleObserver';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const manager = ScheduleManager.getInstance();
const observer = new ConsoleObserver();
manager.addObserver(observer);

function showMenu() {
  console.log('\n===================================== ');
  console.log('\n Astronaut Daily Schedule Organizer ');
  console.log('\n===================================== ');
  console.log('\nMenu:');
  console.log('1. Add a new task');
  console.log('2. Remove an existing task');
  console.log('3. Edit an existing task');
  console.log('4. Mark a task as completed');
  console.log('5. View all tasks');
  console.log('6. View tasks by priority');
  console.log('7. View tasks by completion status');
  console.log('8. Exit');
  rl.question('Choose an option: ', handleMenu);
}

function handleMenu(choice: string) {
  switch (choice) {
    case '1':
      rl.question('Enter description: ', description => {
        rl.question('Enter start time (HH:MM): ', startTime => {
          rl.question('Enter end time (HH:MM): ', endTime => {
            rl.question('Enter priority: ', priority => {
              console.log(manager.addTask(description, startTime, endTime, priority));
              showMenu();
            });
          });
        });
      });
      break;
    case '2':
      rl.question('Enter the description of the task to remove: ', description => {
        console.log(manager.removeTask(description));
        showMenu();
      });
      break;
    case '3':
      rl.question('Enter the description of the task to edit: ', oldDescription => {
        rl.question('Enter new description: ', newDescription => {
          rl.question('Enter new start time (HH:MM): ', newStartTime => {
            rl.question('Enter new end time (HH:MM): ', newEndTime => {
              rl.question('Enter new priority: ', newPriority => {
                console.log(manager.editTask(oldDescription, newDescription, newStartTime, newEndTime, newPriority));
                showMenu();
              });
            });
          });
        });
      });
      break;
    case '4':
      rl.question('Enter the description of the task to mark as completed: ', description => {
        console.log(manager.markTaskCompleted(description));
        showMenu();
      });
      break;
    case '5':
      console.log(manager.viewTasks());
      showMenu();
      break;
    case '6':
      rl.question('Enter the priority level to view tasks: ', priority => {
        console.log(manager.viewTasksByPriority(priority));
        showMenu();
      });
      break;
      case '7':
        rl.question('Enter completion status to view tasks (completed/incomplete): ', status => {
          console.log(manager.viewTasksByCompletion(status));
          showMenu();
        });
      break;
    case '8':
      rl.close();
      break;
    default:
      console.log('Invalid option, please try again.');
      showMenu();
  }
}

showMenu();
