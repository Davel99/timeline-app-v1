import './style.css';
import CONTROLLER from './JSModules/CONTROLLER';
import VIEW from './JSModules/VIEW';

let view = new VIEW();
let controller = new CONTROLLER(view);