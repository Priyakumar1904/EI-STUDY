import { Observer } from './Observer';

export class ConsoleObserver implements Observer {
  update(message: string): void {
    console.log(message);
  }
}
