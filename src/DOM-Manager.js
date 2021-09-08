import Carrot from './up-arrow.png';

const DOM_Factory = () => {
    const sidebar = document.getElementById('sidebar');
    const projectsLabelDiv = document.getElementById('projectsLabelDiv');
    const menu = document.getElementById('menu');
    const taskContainer = document.getElementById('listContainer');
    
    const carrot = document.createElement('img');
    carrot.id = "carrot";
    carrot.src = Carrot;

    projectsLabelDiv.insertBefore(carrot, projectsLabelDiv.firstChild);

    const showMenu = (event) => {
        if(sidebar.classList.contains('active')){
            sidebar.classList.remove('active');
            taskContainer.classList.remove('active');
        }else {
            sidebar.classList.add('active');
            taskContainer.classList.add('active');
        }
    }

    const expandProjectsMenu = (event) => {
        if(carrot.classList.contains('active')){
            carrot.classList.remove('active');
        }else {
            carrot.classList.add('active');
        }
    }

    return {
        sidebar,
        projectsLabelDiv,
        carrot,
        menu,
        taskContainer,
        showMenu,
        expandProjectsMenu,
    }
}

const DOM_Task_Factory = () => {
    const newElement = tag => {
        let element;
        element = document.createElement(tag);
        return element;
    }

    const  itemDiv = newElement('div');
    itemDiv.classList.add('itemDiv');

    const taskCompact = newElement('div');
    taskCompact.classList.add('taskCompact');

    const checkbox = newElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');

    const taskName = newElement('h4');
    taskName.classList.add('taskName');

    const date = newElement('h4');
    date.classList.add('date');

    const taskExtended = newElement('div');
    taskExtended.classList.add('taskExtended');

    const projectLabelDiv = newElement('div');
    projectLabelDiv.classList.add('projectLabelDiv');

    const projectLabel = newElement('h5');
    projectLabel.classList.add('projecetLabel');

    const projectName = newElement('h5');
    projectName.classList.add('projectName');

    const noteDiv = newElement('div');
    noteDiv.classList.add('noteDiv');

    const noteLabel = newElement('h5');
    noteLabel.classList.add('noteLabel');

    const notes = newElement('p');
    notes.classList.add('notes');

    const buttonDiv = newElement('div');
    buttonDiv.classList.add('buttonDiv');

    const editBtn = newElement('button');
    editBtn.classList.add('editEntry');

    const deleteBtn = newElement('button');
    deleteBtn.classList.add('deleteEntry');

    return {
        itemDiv,
        taskCompact,
        checkbox,
        taskName,
        date,
        taskExtended,
        projectLabelDiv,
        projectLabel,
        projectName,
        noteDiv,
        noteLabel,
        notes,
        buttonDiv,
        editBtn,
        deleteBtn,
    }
}

export {DOM_Factory, DOM_Task_Factory};