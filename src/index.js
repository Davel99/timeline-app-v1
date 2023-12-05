import './style.css';
import CONTROLLER from './JSModules/CONTROLLER';

new CONTROLLER();

let yearSpan = document.querySelector('#yearSpan');
let year = new Date().getFullYear();
yearSpan.innerHTML = year;