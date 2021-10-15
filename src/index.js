import './style.css';
import {Icon} from './menuButton.png';
import {Carrot} from './up-arrow.png';
import {DOM_Factory, DOM_Task_Factory, validateForm, expandTasks} from './DOM-Manager';
import {ToDo_Item} from './ToDo_Object_Factory';

console.log('hello');

const taskFactory = DOM_Task_Factory();
const div = taskFactory.itemDiv;
console.log({div});

const doc = DOM_Factory();

const listenForExpand = expandTasks();



doc.projectsLabelDiv.insertBefore(doc.carrot, doc.projectsLabelDiv.firstChild);

doc.menu.addEventListener('click', doc.showMenu);

const callExpandProjects = (e) => {
    return doc.expandProjectsMenu();
}
doc.carrot.addEventListener('click', callExpandProjects);

doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);


const removeItem = node => {
    console.log(node);
    console.log(node.target.parentNode.parentNode);
    node.target.parentNode.parentNode.remove();
    if(node.target.parentNode.parentNode.id === 'emptyForm') {
        doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);
    }
}

const listenForDelete = () => {
    const deleteBtn = document.getElementsByClassName('deleteEntry');
    for(let i=0; i<deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', removeItem);
    }
}

listenForDelete();
doc.addBtn.addEventListener('click', listenForDelete);


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


let newToDo = ToDo_Item();

window.addEventListener("load", taskFactory.newItemForm().appendFilledItemForm(JSON.parse(window.localStorage.getItem('ToDo_List'))));

let testValidate = validateForm();
testValidate.run();


doc.addBtn.addEventListener('click', function(){
    console.log(testValidate.form)})

let allCarrots = document.querySelectorAll('.taskCarrot');
listenForExpand.listen(allCarrots);

console.log(JSON.parse(window.localStorage.getItem('ToDo_List')));
newToDo.ToDoList = JSON.parse(localStorage.getItem('ToDo_List'));

export {newToDo, taskFactory, doc, listenForExpand, callExpandProjects};