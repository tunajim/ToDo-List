import Carrot from './up-arrow.png';
import { ToDo_Item } from './ToDo_Object_Factory';
import { newToDo, taskFactory, doc, listenForExpand, callExpandProjects } from '.';


/* get DOM elements */
const DOM_Factory = () => {
    const sidebar = document.getElementById('sidebar');
    const projectsLabelDiv = document.getElementById('projectsLabelDiv');
    const menu = document.getElementById('menu');
    const taskContainer = document.getElementById('listContainer');
    const addBtn = document.getElementById('addBtn');
    
    const carrot = document.createElement('img');
    carrot.id = "carrot";
    carrot.src = Carrot;

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
        (carrot.classList.contains('active')) ? carrot.classList.remove('active') :
            carrot.classList.add('active');
        if(carrot.classList.contains('active')) {
            newToDo.projectList.push(handleCarrotClicks.filterProjects(newToDo.ToDoList));
        }
    }

    return {
        addBtn,
        sidebar,
        projectsLabelDiv,
        carrot,
        menu,
        taskContainer,
        showMenu,
        expandProjectsMenu,
    }
}

/* create and append new DOM elements when user adds or edits task */
const DOM_Task_Factory = () => {
    const newElement = tag => {
        let element;
        element = document.createElement(tag);
        return element;
    }

    const markUrgent = (item, itemDiv) => {
        if(item.urgent == 'true') {
            itemDiv.classList.add('active');
            itemDiv.style.backgroundColor = "salmon";
        }else {
            itemDiv.classList.remove('active');
        }
    }

    const appendFilledTaskExtended = (arr, index, item) => {
        let taskFilledExtended = newElement('div');
        taskFilledExtended.classList.add('taskExtended')

        let projectLabelDiv = newElement('div');
        projectLabelDiv.classList.add('projectLabelDiv');

        let projectLabel = newElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project:"

        let projectName = newElement('h5');
        projectName.classList.add('projectName');
        projectName.textContent = `${arr.project}`;

        let noteDiv = newElement('div');
        noteDiv.classList.add('noteDiv');

        let noteLabel = newElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = 'Notes:'
        
        let notes = newElement('p');
        notes.classList.add('notes');
        notes.textContent = `${arr.notes}`

        let buttonDiv = newElement('div');
        buttonDiv.classList.add('buttonDiv');

        let editButton = newElement('button');
        editButton.classList.add('editEntry');
        editButton.textContent = 'Edit';

        let deleteButton = newElement('button');
        deleteButton.classList.add('deleteEntry');
        deleteButton.textContent = 'Delete';

        projectLabelDiv.appendChild(projectLabel);
        projectLabelDiv.appendChild(projectName);
        taskFilledExtended.appendChild(projectLabelDiv);
        noteDiv.appendChild(noteLabel);
        noteDiv.appendChild(notes);
        taskFilledExtended.appendChild(noteDiv);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        taskFilledExtended.appendChild(buttonDiv);
        item.appendChild(taskFilledExtended);
        }

    const newItemForm = () => {
        const ToDo = ToDo_Item();

        const  itemDiv = newElement('div');
        itemDiv.classList.add('itemDiv');

        const itemForm = newElement('form');
        itemForm.classList.add('itemDiv');
        itemForm.setAttribute('action', '/');
        itemForm.setAttribute('method', 'GET');

        const taskCompact = newElement('div');
        taskCompact.classList.add('taskCompact');

        const checkbox = newElement('input');
        checkbox.classList.add('checkbox');
        checkbox.id = 'urgent';
        checkbox.setAttribute('type', 'checkbox');

        const taskName = newElement('h4');
        taskName.classList.add('taskName');

        const date = newElement('h4');
        date.classList.add('date');

        const container = DOM_Factory();
        

        const taskExtended = newElement('div');
        taskExtended.classList.add('taskExtended');

        const projectLabelDiv = newElement('div');
        projectLabelDiv.classList.add('projectLabelDiv');

        const projectLabel = newElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project: "

        const projectName = newElement('h5');
        projectName.classList.add('projectName');

        const noteDiv = newElement('div');
        noteDiv.classList.add('noteDiv');

        const noteLabel = newElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = "Notes:";

        const notes = newElement('p');
        notes.classList.add('notes');

        const buttonDiv = newElement('div');
        buttonDiv.classList.add('buttonDiv');

        const editBtn = newElement('button');
        editBtn.classList.add('editEntry');
        editBtn.textContent = "Edit";

        const deleteBtn = newElement('button');
        deleteBtn.classList.add('deleteEntry');
        deleteBtn.textContent = "Delete";

        const deleteFormBtn = newElement('button');
        deleteFormBtn.id = "deleteBtn";
        deleteFormBtn.textContent = "Delete";

        const enterBtn = newElement('button');
        enterBtn.classList.add('enterBtn');
        enterBtn.id  = 'enter';
        enterBtn.textContent = "Enter";
        enterBtn.setAttribute('type', 'submit');

        const taskInput = newElement('input');
        taskInput.classList.add = "taskName";
        taskInput.id = 'name';
        taskInput.setAttribute('placeholder', 'Enter Task');
        taskInput.setAttribute('name', 'name');
        taskInput.setAttribute('type', 'text');
        taskInput.required = true;

        const dateInput = newElement('input');
        dateInput.classList.add = "date";
        dateInput.id = "date";
        dateInput.setAttribute('placeholder', 'Enter Date: "yyyy-mm-dd"');
        dateInput.setAttribute('name', 'date');
        dateInput.setAttribute('type', 'date');
        dateInput.required = true;

        const projectInput = newElement('input');
        projectInput.classList.add("projectName");
        projectInput.id = "project";
        projectInput.setAttribute('placeholder', 'Enter Project');
        projectInput.setAttribute('name', 'project');
        projectInput.setAttribute('type', 'text');
        projectInput.required = true;

        const noteInput = newElement('input');
        noteInput.classList.add("notes");
        noteInput.setAttribute('placeholder', 'Enter Notes');
        noteInput.setAttribute('name', 'note');
        noteInput.setAttribute('type', 'text');

        const appendEmptyTaskCompact = () => {
            taskCompact.appendChild(checkbox.cloneNode(true));
            taskCompact.appendChild(taskInput.cloneNode(true));
            taskCompact.appendChild(dateInput.cloneNode(true));
            itemForm.appendChild(taskCompact.cloneNode(true));
            itemForm.id = 'emptyForm';
        }

        const appendFilledTaskCompact = (item, index) => {
            let filledItemDiv = newElement('div');
            filledItemDiv.classList.add('itemDiv');
            filledItemDiv.setAttribute('data-index', `${index}`);

            let  taskCompactFilled = newElement('div');
            taskCompactFilled.classList.add('taskCompact');

            let taskCarrot = newElement('img');
            taskCarrot.classList = 'taskCarrot';
            taskCarrot.src = Carrot;

            let filledTaskName = newElement('h4');
            filledTaskName.classList.add('taskName');
            filledTaskName.textContent = `${item.description}`;

            let filledTaskDate = newElement('h4');
            filledTaskDate.classList.add('date');
            filledTaskDate.textContent = `${item.date}`;

            markUrgent(item, filledItemDiv);

            taskCompactFilled.appendChild(taskCarrot.cloneNode(true));
            taskCompactFilled.appendChild(filledTaskName.cloneNode(true));
            taskCompactFilled.appendChild(filledTaskDate.cloneNode(true));
            filledItemDiv.appendChild(taskCompactFilled.cloneNode(true));

            return filledItemDiv;
        }

        

        const appendEmptyTaskExtended = () => {
            projectLabelDiv.appendChild(projectLabel);
            projectLabelDiv.appendChild(projectInput);
            taskExtended.appendChild(projectLabelDiv);
            noteDiv.appendChild(noteLabel);
            noteDiv.appendChild(noteInput);
            taskExtended.appendChild(noteDiv);
            itemForm.appendChild(taskExtended);
    

        }

        const appendEmptyButtons = () => {
            buttonDiv.appendChild(enterBtn);
            buttonDiv.appendChild(deleteFormBtn);
            itemForm.appendChild(buttonDiv);
        }

        const appendEmptyItemForm = () => {
            appendEmptyTaskCompact();
            appendEmptyTaskExtended();
            appendEmptyButtons();
            container.taskContainer.appendChild(itemForm.cloneNode(true));
            container.addBtn.removeEventListener('click', appendEmptyItemForm);
            const validate = validateForm();
            validate.run();
        }

        const appendFilledItemForm = (newToDo) => {
            for(let i=0; i<newToDo.length; i++) {
                container.taskContainer.appendChild(appendFilledTaskCompact(newToDo[i], i));
            }
        }

        const appendNewItem = (item) => {
            let index = item.ToDoList.length - 1;
            container.taskContainer.appendChild(appendFilledTaskCompact(item.ToDoList[index], index));
        }

        return {
            appendEmptyItemForm,
            appendFilledItemForm,
            appendNewItem, 
            appendFilledTaskCompact,
         }
    }

    
return {
        newItemForm,
        markUrgent,
        appendFilledTaskExtended,
    }
}

const validateForm = () => {
    const name = document.getElementById('name');
    const date = document.getElementById('date');
    const project = document.getElementById('project');
    const form = document.getElementById('emptyForm');
    const deleteFormBtn = document.getElementById('deleteBtn');
    const checkbox = document.getElementById('urgent');
    
    let userEntries;
    
    const run = () => {
        if(form !== null) form.addEventListener('submit', collect);
        if(form !== null) form.addEventListener('submit', addExpandListener);
        if(deleteFormBtn !== null) {
            deleteFormBtn.addEventListener('click', function(e){
                form.remove();
                DOM_Factory().addBtn.addEventListener('click', DOM_Task_Factory().newItemForm().appendEmptyItemForm);
            })
        }
    } 

    function collect(e) {
        const enter = document.getElementById('enter');
        e.preventDefault();
        let isUrgent = check(checkbox, e);
        isUrgent;
        userEntries = newToDo.newItem(`${e.target.name.value}`, `${e.target.date.value}`,
            `${e.target.project.value}`, `${e.target.note.value}`, `${e.target.urgent.value}`);
    
        newToDo.ToDoList.push(userEntries);
        localStorage.setItem('ToDo_List', JSON.stringify(newToDo.ToDoList));
        form.remove();
        taskFactory.newItemForm().appendNewItem(newToDo);
        doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);
    }

    function check(checkbox, e) {
        checkbox.checked === true ? e.target.urgent.value = true :
            e.target.urgent.value = false;
    }

    const addExpandListener = (e) => {
        listenForExpand.addListenerToNewItem(newToDo.ToDoList);
    }

    return {
        run,
        form,
    }
    
};

const editTasks = () => {
    let filtered = document.querySelector('#filterLabel');

    const replaceNode = (e) => {
        let index =  e.target.parentNode.parentNode.parentNode.dataset.index;
        let clickedDiv = document.querySelectorAll(`[data-index = '${index}']`);

        e.target.parentNode.parentNode.parentNode.after(_createEditForm(index));
        e.target.parentNode.parentNode.parentNode.remove();
        editTaskBtns().validateUserEdit(e);
        editTaskBtns().createCancelBtnListener();
    }

    const _createEditForm = (index) => {
        const taskEditingForm = document.createElement('form');
        taskEditingForm.action = "/";
        taskEditingForm.id = "editTaskForm"
        if(checkIfFiltered(filtered, index).urgent !== 'false') taskEditingForm.style.backgroundColor = 'salmon';
        taskEditingForm.classList.add('form', 'itemDiv');
        taskEditingForm.setAttribute('data-index', index);

        taskEditingForm.appendChild(_createTaskCompact(index));
        taskEditingForm.appendChild(_createTaskExtended(index));
        taskEditingForm.appendChild(_createButtonDiv(index));
        return taskEditingForm;
    }

    const _createTaskCompact = (index) => {
        const taskCompactEditor = document.createElement('div');
        taskCompactEditor.classList.add('taskCompact')

        taskCompactEditor.appendChild(_createCheckBoxInput(index));
        taskCompactEditor.appendChild(_createTaskNameInput(index)); 
        taskCompactEditor.appendChild(_createDateInput(index));
        return taskCompactEditor;
    }

    const _createCheckBoxInput = (index) => {
        const editFormCheckBox = document.createElement('input');
        editFormCheckBox.type = 'checkbox'; 
        editFormCheckBox.classList.add('checkbox');
        editFormCheckBox.id = 'editCheckbox';
        
        if(checkIfFiltered(filtered, index).urgent == 'true') {
            editFormCheckBox.checked = true;
        }else {
            editFormCheckBox.checked = false;
        } 
        return editFormCheckBox;
    }

    const _createTaskNameInput = (index) => {
        const taskNameInput = document.createElement('input');
        taskNameInput.classList.add('taskName');
        taskNameInput.id = 'taskNameEditor';
        taskNameInput.placeholder = `${checkIfFiltered(filtered, index).description}`;
        return taskNameInput;
    }

    const _createDateInput = (index) => {
        const dateInput = document.createElement('input');
        dateInput.classList.add('date');
        dateInput.id = 'dateEditor';
        dateInput.type = 'date';
        dateInput.value = `${checkIfFiltered(filtered, index).date}`;
        dateInput.placeholder = `"${checkIfFiltered(filtered, index).date}"`;
        return dateInput;
    }

    const _createTaskExtended = (index) => {
        const taskExtended = document.createElement('div');
        taskExtended.classList.add('taskExtended');

        taskExtended.appendChild(_createProjectDiv(index));
        taskExtended.appendChild(_createNoteDiv(index));

        return taskExtended;
    }

    const _createProjectDiv = (index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectLabelDiv');

        projectDiv.appendChild(_createProjectLabel(index));
        projectDiv.appendChild(_createProjectInput(index));

        return projectDiv;
    }

    const _createProjectLabel = (index) => {
        const projectLabel = document.createElement('h5');
        projectLabel.classList.add('projectLabel');
        projectLabel.textContent = "Project:";

        return projectLabel;
    }

    const _createProjectInput = (index) => {
        const projectInput = document.createElement('input');
        projectInput.classList.add('projectLabel');
        projectInput.id = 'projectEditor';
        projectInput.placeholder = `${checkIfFiltered(filtered, index).project}`;

        return projectInput;
    }

    const _createNoteDiv = (index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('noteDiv');

        noteDiv.appendChild(_createNoteLabel(index));
        noteDiv.appendChild(_createNoteInput(index));

        return noteDiv;
    }

    const _createNoteLabel = (index) => {
        const noteLabel = document.createElement('h5');
        noteLabel.classList.add('noteLabel');
        noteLabel.textContent = "Notes:";

        return noteLabel;
    }

    const _createNoteInput = (index) => {
        const noteInput = document.createElement('input');
        noteInput.classList.add('notes');   
        noteInput.id = 'noteEditor';
        noteInput.placeholder = `${checkIfFiltered(filtered, index).notes}`;

        return noteInput;
    }

    const _createButtonDiv = (index) => {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');

        buttonDiv.appendChild(_createEnterBtn(index));
        buttonDiv.appendChild(_createCancelBtn(index));

        return buttonDiv;
    }

    const _createEnterBtn = (index) => {
        const enter = document.createElement('input');
        enter.type = "submit";
        enter.classList.add('enterBtn');
        enter.textContent = "Enter";

        return enter;
    }

    const _createCancelBtn = (index) => {
        const cancelBtn = document.createElement('input');
        cancelBtn.type = "button";
        cancelBtn.value = "Cancel";
        cancelBtn.name = "Cancel";
        cancelBtn.classList.add('cancelBtn');
        cancelBtn.textContent = "Cancel";

        return cancelBtn;
    }

    const checkIfFiltered = (filtered, index) => {
        if(filtered.innerText === "Project : All") {
            return newToDo.ToDoList[index];
        }else {
            return newToDo.filteredList[index];
        }
    }

    return {
        replaceNode,
        checkIfFiltered,
    }
}

const editTaskBtns = () => {
    let _checkbox = document.getElementById('editCheckbox');
    let _name = document.getElementById('taskNameEditor');
    let _date = document.getElementById('dateEditor');
    let _project = document.getElementById('projectEditor');
    let _notes = document.getElementById('noteEditor');
    let _form = document.getElementById('editTaskForm');
    let _filtered =  document.querySelector('#filterLabel');

    const createCancelBtnListener = () => {
        let _allCancelBtns = document.getElementsByClassName('cancelBtn');
        for(let i=0; i<_allCancelBtns.length; i++){
            _allCancelBtns[i].addEventListener('click', _callCancel);
        }
    }

    const _callCancel = (e) => {
        e.preventDefault();
        _cancelEdit(e);
    }

    const _cancelEdit = (e) => {
        let index = e.target.parentNode.parentNode.dataset.index;
        e.target.parentNode.parentNode.after(DOM_Task_Factory()
            .newItemForm().appendFilledTaskCompact(editTasks().checkIfFiltered(_filtered, index), index));
        e.target.parentNode.parentNode.remove();
        listenForExpand.resetCarrotListeners();
    }
    
    const checkIfFiltered = (filtered, index) => {
        if(filtered.innerText === "Project : All") {
            return newToDo.ToDoList[index]; 
        }else {
            return newToDo.filteredList[index];
        }
    }

    const validateUserEdit = () => {
        const _submitEditBtns = document.getElementsByClassName('enterBtn');
        for(let i=0; i<_submitEditBtns.length; i++){
            _submitEditBtns[i].addEventListener('click', _callEditSubmit);
        }
    }

    const _callEditSubmit = (e) => {
        return _submitUserEdit(e);
    }

    const _submitUserEdit = (e) => {
        e.preventDefault();
        let _index = e.target.parentNode.parentNode.dataset.index;
        let _filtered = document.querySelector('#filterLabel');
        _checkForNullEdit(e, _index);
        e.target.parentNode.parentNode.after(DOM_Task_Factory().newItemForm()
            .appendFilledTaskCompact(checkIfFiltered(_filtered, _index), _index));
        e.target.parentNode.parentNode.remove();
        localStorage.setItem('ToDo_List', JSON.stringify(newToDo.ToDoList));
        listenForExpand.resetCarrotListeners();
    }

    const _checkForNullEdit = (e, index) => {
        let ToDoListIndex = checkIndex(e);
        console.log(checkIndex(e));
        console.log(newToDo.filteredList[index]);
        if(_name.value !== '') {
            newToDo.ToDoList[ToDoListIndex].description = _name.value;
            if(_filtered.innerText !== "Project : All") newToDo.filteredList[index].description = _name.value;
        }
        if(_date.value !== '') {
            newToDo.ToDoList[ToDoListIndex].date = _date.value;
            if(_filtered.innerText !== "Project : All") newToDo.filteredList[index].date = _date.value;
        }
        if(_project.value !== '') {
            newToDo.ToDoList[ToDoListIndex].project = _project.value;
            if(_filtered.innerText !== "Project : All") newToDo.filteredList[index].project = _project.value;
        }
        if(_notes.value !== '') {
            newToDo.ToDoList[ToDoListIndex].notes = _notes.value;
            if(_filtered.innerText !== "Project : All") newToDo.filteredList[index].notes = _notes.value;
        }
        if(_checkbox.checked) {
            newToDo.ToDoList[ToDoListIndex].urgent = 'true';
            if(_filtered.innerText !== "Project : All") newToDo.filteredList[index].urgent = 'true'; 
        }else {
            newToDo.ToDoList[ToDoListIndex].urgent = 'false';
            if(_filtered.innerText !== "Project : All") newToDo.filteredList[index].urgent = 'false';
        } 
    }

    const checkIndex = (e) => {
        //=================================================
        let _filtered = document.querySelector('#filterLabel');
        let _index = e.target.parentNode.parentNode.dataset.index;
        for(let i=0; i<newToDo.ToDoList.length; i++){
            if(checkIfFiltered(_filtered, _index).description 
                === newToDo.ToDoList[i].description){
                    return i;
            }
        }
    }

    return {
        createCancelBtnListener,
        validateUserEdit,
    }
}
    
const expandTasks = () => {
    let _allCarrots = document.getElementsByClassName('taskCarrot');
    let deleteTaskBtns = document.getElementsByClassName('deleteEntry');
    let editTaskBtns = document.getElementsByClassName('editEntry');
    let _allItems = document.getElementsByClassName('itemDiv');
    const validate = validateForm();

    const addListenerToNewItem = (list) => {
        let i = (list.length - 1);
        _allCarrots[i].addEventListener('click', _callExpand);
    }
    
    const resetCarrotListeners = () => {
        let _allCarrotsDup = document.querySelectorAll('.taskCarrot');
        console.log(_allCarrotsDup);
        for(let i=0; i<_allCarrotsDup.length; i++) _resetCarrotNodes(_allCarrotsDup, i);
        listen(_allCarrotsDup);
    }

    const _resetCarrotNodes = (carrots, i) => {
        carrots[i].parentNode.parentNode.dataset.index = '';
        carrots[i].parentNode.parentNode.dataset.index = `${i}`;
        carrots[i].removeEventListener('click', _callExpand);

    }

    const _callExpand = (e) => {
        return _expand(e, e.target.parentNode.parentNode.getAttribute('data-index'));
    }

    const _expand = (e, i) => {
        let _selectTasks = document.querySelectorAll('.itemDiv');
        let _filter = document.querySelector('#filterLabel');
        let _allProjects = "Project : All";
        if(!e.target.classList.contains('active')){
            _checkForFilter(_allProjects, _selectTasks, _filter, i);
            _turnCarrot(e);
            _edit();
            _remove();
        }else {
            _shrink(e);
            _turnCarrot(e);
        }
    }

    const _checkForFilter = (allProjects, selectTasks, filter, i) => {
        if(filter.innerText == allProjects) {
            taskFactory.appendFilledTaskExtended(newToDo.ToDoList[i], i, selectTasks[i]);
        }else {
            taskFactory.appendFilledTaskExtended(newToDo.filteredList[i], i, selectTasks[i]);
        }

    }

    const _edit = () => {
        for(let i=0; i<_allCarrots.length; i++){
            for(let j=0; j<editTaskBtns.length; j++){
                editTaskBtns[j].addEventListener('click', _callEdit);
            }

        }
    }

    const _callEdit = (e) => {
        _editTask(e);
    }

    const _editTask = (e) => {
        editTasks().replaceNode(e);
    }

   const _remove = () => {
        for(let i=0; i<_allCarrots.length; i++){
            for(let j=0; j<deleteTaskBtns.length; j++){
                deleteTaskBtns[j].addEventListener('click', deleteTask);
            }
        }
    }

    const deleteTask = (e) => {
        const containerDiv = e.target.parentNode.parentNode.parentNode;
        containerDiv.remove();
        newToDo.ToDoList.splice(containerDiv.dataset.index, 1);
        newToDo.filteredList.splice(containerDiv.dataset.index, 1);
            
        window.localStorage.setItem('ToDo_List', JSON.stringify(newToDo.ToDoList));
        resetCarrotListeners();
    }

    const _shrink = (e) => {
        e.target.parentNode.parentNode.lastChild.remove();
    }

    const _turnCarrot = (e) => {
        e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
    }



    const listen = (carrots) => {
        console.log(carrots);
        for(let i=0; i<carrots.length; i++){
            carrots[i].addEventListener('click', _callExpand);
        }
    }
    
    return {
        listen,
        addListenerToNewItem,
        resetCarrotListeners,
    }
        
}

const handleCarrotClicks = (() => {

    const filterProjects = (list) => {
        addProjectsToArray(list);
        appendProjectsToSidebar(newToDo.projectList);
        addListenerToProjectLabels();
        doc.carrot.removeEventListener('click', callExpandProjects);
        doc.carrot.addEventListener('click', callReduceProjects);
    }

    const addProjectsToArray = (list) => {
        for(let i=0; i<list.length; i++){
            if(!newToDo.projectList.includes(list[i].project)) {
                if(list[i].project != null) {
                    newToDo.projectList.push(list[i].project);
                }
            }
        }
    }

    const callReduceProjects = () => {
        return reduceProjects();
    }
    
    const reduceProjects = () => {
        doc.expandProjectsMenu();
        newToDo.projectList.splice(0, newToDo.projectList.length);
        clearProjects();
        doc.carrot.removeEventListener('click', callReduceProjects);
        doc.carrot.addEventListener('click', callExpandProjects);
    }

    const clearProjects = () => {
        const projectLabels = document.querySelectorAll('.projectFilterLabel');
        for(let i=0; i<projectLabels.length; i++){
            projectLabels[i].remove();
        }
    }

    const appendProjectsToSidebar = (list) => {
        const sidebar = document.getElementById('sidebar');
        const projectLinkDiv = document.createElement('div');
        projectLinkDiv.id = "projectLinkDiv";
        for(let i=0; i<list.length; i++){
            projectLinkDiv.appendChild(createProjectLink(list[i])); 
        }
        sidebar.append(projectLinkDiv);
    }

    const createProjectLink = (input) => {
        const label = document.createElement('h5');
        label.classList.add('projectFilterLabel');
        label.textContent = input;
        return label;
    }

    const addListenerToProjectLabels = () => {
        const projectLabels = document.querySelectorAll('.projectFilterLabel');
        for(let i=0; i<projectLabels.length; i++) {
            projectLabels[i].addEventListener('click', callFilterToDos);
        }
    }

    const callFilterToDos = (e) => {
        return filter().filterToDos(e);
    }

    return {
        filterProjects,
    }
})();

const filter = () => {
    let filterLabel = document.querySelector('#filterLabel');
    const container = document.querySelector('#listContainer');

    const createRemoveFilterBtn = (() => {
        const removeFilterContainer = document.createElement('div');
        removeFilterContainer.id = "removeFilterContainer";

        const filterCancelBtn = document.createElement('div');
        filterCancelBtn.id = "removeFilter";
        filterCancelBtn.textContent = "-";

        const removeFilterLabel = document.createElement('p');
        removeFilterLabel.id = "removeFilterLabel";
        removeFilterLabel.textContent = "remove filter";

        return {
            removeFilterContainer,
            filterCancelBtn,
            removeFilterLabel,
        }
    })();
    
    const filterToDos = (e) => {
        newToDo.filteredList = newToDo.ToDoList.reduce((a, current, i) => 
            (current.project === e.target.textContent) ? a.concat(current) : a, []);
        if(filterLabel.innerText == "Project : All") _appendRemoveFilterBtn();
        filterLabel.textContent = `Project : ${e.target.textContent}`;
        _applyFilter(newToDo.filteredList, e);
        _createFilteredCarrotListeners();
    }

    const _appendRemoveFilterBtn = () => {
        let filterLabelDiv = document.querySelector("#filterLabelDiv");
        createRemoveFilterBtn.removeFilterContainer.appendChild(createRemoveFilterBtn.filterCancelBtn);
        createRemoveFilterBtn.removeFilterContainer.appendChild(createRemoveFilterBtn.removeFilterLabel);
        filterLabelDiv.appendChild(createRemoveFilterBtn.removeFilterContainer);
        _addRemoveFilterListener();
    }

    const _addRemoveFilterListener = () => {
        createRemoveFilterBtn.filterCancelBtn.addEventListener('click', _callRemoveFilter);
    }

    const _callRemoveFilter = (e) => {
        return removeFilter(e, filterLabel);
    }

    const _applyFilter = (list, e) => {
        const tasks = document.querySelectorAll('.itemDiv');
        _removeUnfilteredTasks(tasks);        
        _appendFilteredTasks(list, container);
    }

    const _removeUnfilteredTasks = (tasks) => {
        for(let i=0; i<tasks.length; i++) tasks[i].remove();
    }

    const _appendFilteredTasks = (list, container) => {
        for(let i=0; i<list.length; i++){
            container.appendChild(taskFactory.newItemForm().appendFilledTaskCompact(list[i], i));
        }
    }

    const _createFilteredCarrotListeners = () => {
        listenForExpand.resetCarrotListeners();
    }

    const removeFilter = (e, label) => {
        label.innerText = "Project : All";
        const _tasks = document.querySelectorAll('.itemDiv');
        e.target.parentNode.remove();
        for(let i=0; i<_tasks.length; i++) _tasks[i].remove();
        for(let i=0; i<newToDo.ToDoList.length; i++){
            container.appendChild(taskFactory.newItemForm()
            .appendFilledTaskCompact(newToDo.ToDoList[i], i));
        }
        let carrots = document.querySelectorAll('.taskCarrot');
        listenForExpand.listen(carrots);
    }

    return {
        filterToDos,
    }
}



export { DOM_Task_Factory, DOM_Factory, validateForm, expandTasks }



            