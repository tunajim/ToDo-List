import './style.css';
import {Icon} from './menuButton.png';
import {Carrot} from './up-arrow.png';
import {DOM_Factory, DOM_Task_Factory} from './DOM-Manager';
import {ToDo_Item} from './ToDo_Object_Factory';

console.log('hello');

const taskFactory = DOM_Task_Factory();
const div = taskFactory.itemDiv;
console.log({div});

const doc = DOM_Factory();

doc.menu.addEventListener('click', doc.showMenu);

doc.carrot.addEventListener('click', doc.expandProjectsMenu);

const responsiveSidebar = (() => {
    const minSize = window.matchMedia("(min-width: 500px)");
    const maxSize = window.matchMedia("(max-width: 500px)");
    

    const sidebarMediaQuery = (min, max) => {
        if(max.matches) {
            doc.sidebar.classList.remove('active');
            doc.taskContainer.classList.remove('active');
        }else if(min.matches) {
            doc.sidebar.classList.add('active');
            doc.taskContainer.classList.add('active');
        }
    } 

    return {
        minSize,
        maxSize,
        sidebarMediaQuery,
    };
})();

window.onload = responsiveSidebar.sidebarMediaQuery(responsiveSidebar.minSize, responsiveSidebar.maxSize);

const newItem = ToDo_Item();