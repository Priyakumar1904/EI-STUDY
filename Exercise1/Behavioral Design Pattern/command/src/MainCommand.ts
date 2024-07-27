import { Light } from "./Light";
import { LightOnCommand } from "./LightOnCommand";
import { LightOffCommand } from "./LightOffCommand";
import { RemoteControl } from "./RemoteControl";

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn, lightOff);

remote.pressOnButton();
remote.pressOffButton();
remote.pressUndoButton();
