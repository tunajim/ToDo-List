"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandTasks = exports.validateForm = exports.DOM_Factory = exports.DOM_Task_Factory = void 0;

var _upArrow = _interopRequireDefault(require("./up-arrow.png"));

var _ToDo_Object_Factory = require("./ToDo_Object_Factory");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* get DOM elements */
var DOM_Factory = function DOM_Factory() {
  var sidebar = document.getElementById('sidebar');
  var projectsLabelDiv = document.getElementById('projectsLabelDiv');
  var menu = document.getElementById('menu');
  var taskContainer = document.getElementById('listContainer');
  var addBtn = document.getElementById('addBtn');
  var carrot = document.createElement('img');
  carrot.id = "carrot";
  carrot.src = _upArrow["default"];

  var showMenu = function showMenu(event) {
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      taskContainer.classList.remove('active');
    } else {
      sidebar.classList.add('active');
      taskContainer.classList.add('active');
    }
  };

  var expandProjectsMenu = function expandProjectsMenu(event) {
    console.log(!carrot.classList.contains('active'));
    carrot.classList.contains('active') ? carrot.classList.remove('active') : carrot.classList.add('active');

    if (carrot.classList.contains('active')) {
      _.newToDo.projectList.push(handleCarrotClicks.filterProjects(_.newToDo.ToDoList));
    }
  };

  return {
    addBtn: addBtn,
    sidebar: sidebar,
    projectsLabelDiv: projectsLabelDiv,
    carrot: carrot,
    menu: menu,
    taskContainer: taskContainer,
    showMenu: showMenu,
    expandProjectsMenu: expandProjectsMenu
  };
};
/* create and append new DOM elements when user adds or edits task */


exports.DOM_Factory = DOM_Factory;

var DOM_Task_Factory = function DOM_Task_Factory() {
  var newElement = function newElement(tag) {
    var element;
    element = document.createElement(tag);
    return element;
  };

  var markUrgent = function markUrgent(item, itemDiv) {
    console.log(item.urgent);

    if (item.urgent == 'true') {
      console.log('help');
      itemDiv.classList.add('active');
      itemDiv.style.backgroundColor = "salmon";
    } else {
      itemDiv.classList.remove('active');
    }
  };

  var appendFilledTaskExtended = function appendFilledTaskExtended(arr, index, item) {
    console.log({
      item: item
    });
    console.log(arr);
    var taskFilledExtended = newElement('div');
    taskFilledExtended.classList.add('taskExtended');
    var projectLabelDiv = newElement('div');
    projectLabelDiv.classList.add('projectLabelDiv');
    var projectLabel = newElement('h5');
    projectLabel.classList.add('projectLabel');
    projectLabel.textContent = "Project:";
    var projectName = newElement('h5');
    projectName.classList.add('projectName');
    projectName.textContent = "".concat(arr.project);
    var noteDiv = newElement('div');
    noteDiv.classList.add('noteDiv');
    var noteLabel = newElement('h5');
    noteLabel.classList.add('noteLabel');
    noteLabel.textContent = 'Notes:';
    var notes = newElement('p');
    notes.classList.add('notes');
    notes.textContent = "".concat(arr.notes);
    var buttonDiv = newElement('div');
    buttonDiv.classList.add('buttonDiv');
    var editButton = newElement('button');
    editButton.classList.add('editEntry');
    editButton.textContent = 'Edit';
    var deleteButton = newElement('button');
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
  };

  var newItemForm = function newItemForm() {
    var ToDo = (0, _ToDo_Object_Factory.ToDo_Item)();
    var itemDiv = newElement('div');
    itemDiv.classList.add('itemDiv');
    var itemForm = newElement('form');
    itemForm.classList.add('itemDiv');
    itemForm.setAttribute('action', '/');
    itemForm.setAttribute('method', 'GET');
    var taskCompact = newElement('div');
    taskCompact.classList.add('taskCompact');
    var checkbox = newElement('input');
    checkbox.classList.add('checkbox');
    checkbox.id = 'urgent';
    checkbox.setAttribute('type', 'checkbox');
    var taskName = newElement('h4');
    taskName.classList.add('taskName');
    var date = newElement('h4');
    date.classList.add('date');
    var container = DOM_Factory();
    var taskExtended = newElement('div');
    taskExtended.classList.add('taskExtended');
    var projectLabelDiv = newElement('div');
    projectLabelDiv.classList.add('projectLabelDiv');
    var projectLabel = newElement('h5');
    projectLabel.classList.add('projectLabel');
    projectLabel.textContent = "Project: ";
    var projectName = newElement('h5');
    projectName.classList.add('projectName');
    var noteDiv = newElement('div');
    noteDiv.classList.add('noteDiv');
    var noteLabel = newElement('h5');
    noteLabel.classList.add('noteLabel');
    noteLabel.textContent = "Notes:";
    var notes = newElement('p');
    notes.classList.add('notes');
    var buttonDiv = newElement('div');
    buttonDiv.classList.add('buttonDiv');
    var editBtn = newElement('button');
    editBtn.classList.add('editEntry');
    editBtn.textContent = "Edit";
    var deleteBtn = newElement('button');
    deleteBtn.classList.add('deleteEntry');
    deleteBtn.textContent = "Delete";
    var deleteFormBtn = newElement('button');
    deleteFormBtn.id = "deleteBtn";
    deleteFormBtn.textContent = "Delete";
    var enterBtn = newElement('button');
    enterBtn.classList.add('enterBtn');
    enterBtn.id = 'enter';
    enterBtn.textContent = "Enter";
    enterBtn.setAttribute('type', 'submit');
    var taskInput = newElement('input');
    taskInput.classList.add = "taskName";
    taskInput.id = 'name';
    taskInput.setAttribute('placeholder', 'Enter Task');
    taskInput.setAttribute('name', 'name');
    taskInput.setAttribute('type', 'text');
    taskInput.required = true;
    var dateInput = newElement('input');
    dateInput.classList.add = "date";
    dateInput.id = "date";
    dateInput.setAttribute('placeholder', 'Enter Date: "yyyy-mm-dd"');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('type', 'date');
    dateInput.required = true;
    var projectInput = newElement('input');
    projectInput.classList.add("projectName");
    projectInput.id = "project";
    projectInput.setAttribute('placeholder', 'Enter Project');
    projectInput.setAttribute('name', 'project');
    projectInput.setAttribute('type', 'text');
    projectInput.required = true;
    var noteInput = newElement('input');
    noteInput.classList.add("notes");
    noteInput.setAttribute('placeholder', 'Enter Notes');
    noteInput.setAttribute('name', 'note');
    noteInput.setAttribute('type', 'text');

    var appendEmptyTaskCompact = function appendEmptyTaskCompact() {
      taskCompact.appendChild(checkbox.cloneNode(true));
      taskCompact.appendChild(taskInput.cloneNode(true));
      taskCompact.appendChild(dateInput.cloneNode(true));
      itemForm.appendChild(taskCompact.cloneNode(true));
      itemForm.id = 'emptyForm';
    };

    var appendFilledTaskCompact = function appendFilledTaskCompact(item, index) {
      var filledItemDiv = newElement('div');
      filledItemDiv.classList.add('itemDiv');
      filledItemDiv.setAttribute('data-index', "".concat(index));
      var taskCompactFilled = newElement('div');
      taskCompactFilled.classList.add('taskCompact');
      var taskCarrot = newElement('img');
      taskCarrot.classList = 'taskCarrot';
      taskCarrot.src = _upArrow["default"];
      var filledTaskName = newElement('h4');
      filledTaskName.classList.add('taskName');
      filledTaskName.textContent = "".concat(item.description);
      var filledTaskDate = newElement('h4');
      filledTaskDate.classList.add('date');
      filledTaskDate.textContent = "".concat(item.date);
      markUrgent(item, filledItemDiv);
      taskCompactFilled.appendChild(taskCarrot.cloneNode(true));
      taskCompactFilled.appendChild(filledTaskName.cloneNode(true));
      taskCompactFilled.appendChild(filledTaskDate.cloneNode(true));
      filledItemDiv.appendChild(taskCompactFilled.cloneNode(true));
      return filledItemDiv;
    };

    var appendEmptyTaskExtended = function appendEmptyTaskExtended() {
      projectLabelDiv.appendChild(projectLabel);
      projectLabelDiv.appendChild(projectInput);
      taskExtended.appendChild(projectLabelDiv);
      noteDiv.appendChild(noteLabel);
      noteDiv.appendChild(noteInput);
      taskExtended.appendChild(noteDiv);
      itemForm.appendChild(taskExtended);
    };

    var appendEmptyButtons = function appendEmptyButtons() {
      buttonDiv.appendChild(enterBtn);
      buttonDiv.appendChild(deleteFormBtn);
      itemForm.appendChild(buttonDiv);
    };

    var appendEmptyItemForm = function appendEmptyItemForm() {
      appendEmptyTaskCompact();
      appendEmptyTaskExtended();
      appendEmptyButtons();
      container.taskContainer.appendChild(itemForm.cloneNode(true));
      container.addBtn.removeEventListener('click', appendEmptyItemForm);
      var validate = validateForm();
      validate.run();
    };

    var appendFilledItemForm = function appendFilledItemForm(newToDo) {
      console.log(newToDo);

      for (var i = 0; i < newToDo.length; i++) {
        container.taskContainer.appendChild(appendFilledTaskCompact(newToDo[i], i));
        console.log(newToDo.ToDoList);
      }
    };

    var appendNewItem = function appendNewItem(item) {
      var index = item.ToDoList.length - 1;
      container.taskContainer.appendChild(appendFilledTaskCompact(item.ToDoList[index], index));
    };

    return {
      appendEmptyItemForm: appendEmptyItemForm,
      appendFilledItemForm: appendFilledItemForm,
      appendNewItem: appendNewItem,
      appendFilledTaskCompact: appendFilledTaskCompact
    };
  };

  return {
    newItemForm: newItemForm,
    markUrgent: markUrgent,
    appendFilledTaskExtended: appendFilledTaskExtended
  };
};

exports.DOM_Task_Factory = DOM_Task_Factory;

var validateForm = function validateForm() {
  var name = document.getElementById('name');
  var date = document.getElementById('date');
  var project = document.getElementById('project');
  var form = document.getElementById('emptyForm');
  var deleteFormBtn = document.getElementById('deleteBtn');
  var checkbox = document.getElementById('urgent');
  var userEntries;

  var run = function run() {
    if (form !== null) form.addEventListener('submit', collect);
    if (form !== null) form.addEventListener('submit', addExpandListener);

    if (deleteFormBtn !== null) {
      deleteFormBtn.addEventListener('click', function (e) {
        form.remove();
        DOM_Factory().addBtn.addEventListener('click', DOM_Task_Factory().newItemForm().appendEmptyItemForm);
      });
    }
  };

  function collect(e) {
    var enter = document.getElementById('enter');
    e.preventDefault();
    var isUrgent = check(checkbox, e);
    isUrgent;
    userEntries = _.newToDo.newItem("".concat(e.target.name.value), "".concat(e.target.date.value), "".concat(e.target.project.value), "".concat(e.target.note.value), "".concat(e.target.urgent.value));

    _.newToDo.ToDoList.push(userEntries);

    localStorage.setItem('ToDo_List', JSON.stringify(_.newToDo.ToDoList));
    form.remove();

    _.taskFactory.newItemForm().appendNewItem(_.newToDo);

    _.doc.addBtn.addEventListener('click', _.taskFactory.newItemForm().appendEmptyItemForm);
  }

  function check(checkbox, e) {
    checkbox.checked === true ? e.target.urgent.value = true : e.target.urgent.value = false;
  }

  var addExpandListener = function addExpandListener(e) {
    console.log(e.target.parentNode);
    console.log(_.newToDo.ToDoList.length - 1);

    _.listenForExpand.addListenerToNewItem();
  };

  return {
    run: run,
    form: form
  };
};

exports.validateForm = validateForm;

var editTasks = function editTasks() {
  var replaceNode = function replaceNode(e) {
    var index = e.target.parentNode.parentNode.parentNode.dataset.index;
    var clickedDiv = document.querySelectorAll("[data-index = '".concat(index, "']"));
    e.target.parentNode.parentNode.parentNode.after(_createEditForm(index));
    e.target.parentNode.parentNode.parentNode.remove();
    editTaskBtns().validateUserEdit(e);
    editTaskBtns().createCancelBtnListener();
  };

  var _createEditForm = function _createEditForm(index) {
    var taskEditingForm = document.createElement('form');
    taskEditingForm.action = "/";
    taskEditingForm.id = "editTaskForm";
    if (_.newToDo.ToDoList[index].urgent !== 'false') taskEditingForm.style.backgroundColor = 'salmon';
    taskEditingForm.classList.add('form', 'itemDiv');
    taskEditingForm.setAttribute('data-index', index);
    taskEditingForm.appendChild(_createTaskCompact(index));
    taskEditingForm.appendChild(_createTaskExtended(index));
    taskEditingForm.appendChild(_createButtonDiv(index));
    return taskEditingForm;
  };

  var _createTaskCompact = function _createTaskCompact(index) {
    var taskCompactEditor = document.createElement('div');
    taskCompactEditor.classList.add('taskCompact');
    taskCompactEditor.appendChild(_createCheckBoxInput(index));
    taskCompactEditor.appendChild(_createTaskNameInput(index));
    taskCompactEditor.appendChild(_createDateInput(index));
    return taskCompactEditor;
  };

  var _createCheckBoxInput = function _createCheckBoxInput(index) {
    var editFormCheckBox = document.createElement('input');
    editFormCheckBox.type = 'checkbox';
    editFormCheckBox.classList.add('checkbox');
    editFormCheckBox.id = 'editCheckbox';

    if (_.newToDo.ToDoList[index].urgent == 'true') {
      editFormCheckBox.checked = true;
    } else {
      editFormCheckBox.checked = false;
    }

    return editFormCheckBox;
  };

  var _createTaskNameInput = function _createTaskNameInput(index) {
    var taskNameInput = document.createElement('input');
    taskNameInput.classList.add('taskName');
    taskNameInput.id = 'taskNameEditor';
    taskNameInput.placeholder = "".concat(_.newToDo.ToDoList[index].description);
    return taskNameInput;
  };

  var _createDateInput = function _createDateInput(index) {
    var dateInput = document.createElement('input');
    dateInput.classList.add('date');
    dateInput.id = 'dateEditor';
    dateInput.type = 'date';
    dateInput.value = "".concat(_.newToDo.ToDoList[index].date);
    dateInput.placeholder = "\"".concat(_.newToDo.ToDoList[index].date, "\"");
    return dateInput;
  };

  var _createTaskExtended = function _createTaskExtended(index) {
    var taskExtended = document.createElement('div');
    taskExtended.classList.add('taskExtended');
    taskExtended.appendChild(_createProjectDiv(index));
    taskExtended.appendChild(_createNoteDiv(index));
    return taskExtended;
  };

  var _createProjectDiv = function _createProjectDiv(index) {
    var projectDiv = document.createElement('div');
    projectDiv.classList.add('projectLabelDiv');
    projectDiv.appendChild(_createProjectLabel(index));
    projectDiv.appendChild(_createProjectInput(index));
    return projectDiv;
  };

  var _createProjectLabel = function _createProjectLabel(index) {
    var projectLabel = document.createElement('h5');
    projectLabel.classList.add('projectLabel');
    projectLabel.textContent = "Project:";
    return projectLabel;
  };

  var _createProjectInput = function _createProjectInput(index) {
    var projectInput = document.createElement('input');
    projectInput.classList.add('projectLabel');
    projectInput.id = 'projectEditor';
    projectInput.placeholder = "".concat(_.newToDo.ToDoList[index].project);
    return projectInput;
  };

  var _createNoteDiv = function _createNoteDiv(index) {
    var noteDiv = document.createElement('div');
    noteDiv.classList.add('noteDiv');
    noteDiv.appendChild(_createNoteLabel(index));
    noteDiv.appendChild(_createNoteInput(index));
    return noteDiv;
  };

  var _createNoteLabel = function _createNoteLabel(index) {
    var noteLabel = document.createElement('h5');
    noteLabel.classList.add('noteLabel');
    noteLabel.textContent = "Notes:";
    return noteLabel;
  };

  var _createNoteInput = function _createNoteInput(index) {
    var noteInput = document.createElement('input');
    noteInput.classList.add('notes');
    noteInput.id = 'noteEditor';
    noteInput.placeholder = "".concat(_.newToDo.ToDoList[index].notes);
    return noteInput;
  };

  var _createButtonDiv = function _createButtonDiv(index) {
    var buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    buttonDiv.appendChild(_createEnterBtn(index));
    buttonDiv.appendChild(_createCancelBtn(index));
    return buttonDiv;
  };

  var _createEnterBtn = function _createEnterBtn(index) {
    var enter = document.createElement('input');
    enter.type = "submit";
    enter.classList.add('enterBtn');
    enter.textContent = "Enter";
    return enter;
  };

  var _createCancelBtn = function _createCancelBtn(index) {
    var cancelBtn = document.createElement('input');
    cancelBtn.type = "button";
    cancelBtn.value = "Cancel";
    cancelBtn.name = "Cancel";
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.textContent = "Cancel";
    return cancelBtn;
  };

  return {
    replaceNode: replaceNode
  };
};

var editTaskBtns = function editTaskBtns() {
  var _checkbox = document.getElementById('editCheckbox');

  var _name = document.getElementById('taskNameEditor');

  var _date = document.getElementById('dateEditor');

  var _project = document.getElementById('projectEditor');

  var _notes = document.getElementById('noteEditor');

  var _form = document.getElementById('editTaskForm');

  var createCancelBtnListener = function createCancelBtnListener() {
    var _allCancelBtns = document.getElementsByClassName('cancelBtn');

    for (var i = 0; i < _allCancelBtns.length; i++) {
      _allCancelBtns[i].addEventListener('click', _callCancel);
    }
  };

  var _callCancel = function _callCancel(e) {
    console.log(e.target.parentNode.parentNode);
    e.preventDefault();

    _cancelEdit(e);
  };

  var _cancelEdit = function _cancelEdit(e) {
    console.log(e.target.parentNode.parentNode.dataset.index);
    var index = e.target.parentNode.parentNode.dataset.index;
    e.target.parentNode.parentNode.after(DOM_Task_Factory().newItemForm().appendFilledTaskCompact(_.newToDo.ToDoList[index], index));
    e.target.parentNode.parentNode.remove();

    _.listenForExpand.resetCarrotListeners();
  };

  var validateUserEdit = function validateUserEdit() {
    var _submitEditBtns = document.getElementsByClassName('enterBtn');

    for (var i = 0; i < _submitEditBtns.length; i++) {
      _submitEditBtns[i].addEventListener('click', _callEditSubmit);
    }

    console.log(_submitEditBtns[0].parentNode.parentNode);
  };

  var _callEditSubmit = function _callEditSubmit(e) {
    console.log('i love you');
    return _submitUserEdit(e);
  };

  var _submitUserEdit = function _submitUserEdit(e) {
    e.preventDefault();
    var _index = e.target.parentNode.parentNode.dataset.index;

    _checkForNullEdit(e, _index);

    e.target.parentNode.parentNode.after(DOM_Task_Factory().newItemForm().appendFilledTaskCompact(_.newToDo.ToDoList[_index], _index));
    e.target.parentNode.parentNode.remove();
    localStorage.setItem('ToDo_List', JSON.stringify(_.newToDo.ToDoList));

    _.listenForExpand.resetCarrotListeners();
  };

  var _checkForNullEdit = function _checkForNullEdit(e, index) {
    if (_name.value !== '') _.newToDo.ToDoList[index].description = _name.value;
    if (_date.value !== '') _.newToDo.ToDoList[index].date = _date.value;
    if (_project.value !== '') _.newToDo.ToDoList[index].project = _project.value;
    if (_notes.value !== '') _.newToDo.ToDoList[index].notes = _notes.value;
    _checkbox.checked ? _.newToDo.ToDoList[index].urgent = 'true' : _.newToDo.ToDoList[index].urgent = 'false';
    console.log(_.newToDo.ToDoList[index]);
    console.log(_project.value);
    console.log(_notes.value);
  };

  return {
    createCancelBtnListener: createCancelBtnListener,
    validateUserEdit: validateUserEdit
  };
};

var expandTasks = function expandTasks() {
  var _allCarrots = document.getElementsByClassName('taskCarrot');

  var deleteTaskBtns = document.getElementsByClassName('deleteEntry');
  var editTaskBtns = document.getElementsByClassName('editEntry');

  var _allItems = document.getElementsByClassName('itemDiv');

  var validate = validateForm();
  console.log(_allCarrots);

  var deleteTask = function deleteTask(e) {
    console.log(e.target);
    var containerDiv = e.target.parentNode.parentNode.parentNode;
    containerDiv.remove();

    _.newToDo.ToDoList.splice(containerDiv.dataset.index, 1);

    window.localStorage.setItem('ToDo_List', JSON.stringify(_.newToDo.ToDoList));
    console.log(_.newToDo.ToDoList);
    resetCarrotListeners();
  };

  var _remove = function _remove() {
    for (var i = 0; i < _allCarrots.length; i++) {
      console.log(deleteTaskBtns);
      console.log(_.newToDo.ToDoList);

      for (var j = 0; j < deleteTaskBtns.length; j++) {
        deleteTaskBtns[j].addEventListener('click', deleteTask);
      }
    }
  };

  var _edit = function _edit() {
    for (var i = 0; i < _allCarrots.length; i++) {
      console.log(editTaskBtns);

      for (var j = 0; j < editTaskBtns.length; j++) {
        editTaskBtns[j].addEventListener('click', _callEdit);
      }
    }
  };

  var _callEdit = function _callEdit(e) {
    console.log(e.target);

    _editTask(e);
  };

  var _editTask = function _editTask(e) {
    editTasks().replaceNode(e);
  };

  var _shrink = function _shrink(e) {
    console.log(e.target.parentNode.parentNode.lastChild);
    e.target.parentNode.parentNode.lastChild.remove();
  };

  var _turnCarrot = function _turnCarrot(e) {
    console.log(e);
    e.target.classList.contains('active') ? e.target.classList.remove('active') : e.target.classList.add('active');
  };

  var addListenerToNewItem = function addListenerToNewItem() {
    var i = _.newToDo.ToDoList.length - 1;

    _allCarrots[i].addEventListener('click', _callExpand);
  };

  var resetCarrotListeners = function resetCarrotListeners() {
    var _allCarrotsDup = document.querySelectorAll('.taskCarrot');

    console.log(_allCarrotsDup);

    for (var i = 0; i < _allCarrotsDup.length; i++) {
      console.log(_allCarrotsDup[i].parentNode.parentNode.getAttribute('data-index'));

      _resetCarrotNodes(_allCarrotsDup, i); // _allCarrotsDup[i].parentNode.parentNode.dataset.index = '';
      // _allCarrotsDup[i].parentNode.parentNode.dataset.index = `${i}`;
      // _allCarrotsDup[i].removeEventListener('click', _callExpand);


      console.log(_allCarrotsDup[i].parentNode.parentNode);
      console.log({
        i: i
      });
    }

    listen();
  };

  var _resetCarrotNodes = function _resetCarrotNodes(carrots, i) {
    carrots[i].parentNode.parentNode.dataset.index = '';
    carrots[i].parentNode.parentNode.dataset.index = "".concat(i);
    carrots[i].removeEventListener('click', _callExpand);
  };

  var _callExpand = function _callExpand(e) {
    console.log(e.target.parentNode.parentNode.dataset.index);
    return _expand(e, e.target.parentNode.parentNode.getAttribute('data-index'));
  };

  var _expand = function _expand(e, i) {
    var _selectTasks = document.querySelectorAll('.itemDiv');

    if (!e.target.classList.contains('active')) {
      _.taskFactory.appendFilledTaskExtended(_.newToDo.ToDoList[i], i, _selectTasks[i]);

      _turnCarrot(e);

      _edit();

      _remove();
    } else {
      _shrink(e);

      _turnCarrot(e);
    }
  };

  var listen = function listen() {
    console.log(_allCarrots);

    for (var i = 0; i < _allCarrots.length; i++) {
      _allCarrots[i].addEventListener('click', _callExpand);
    }
  };

  return {
    listen: listen,
    addListenerToNewItem: addListenerToNewItem,
    resetCarrotListeners: resetCarrotListeners
  };
};

exports.expandTasks = expandTasks;

var handleCarrotClicks = function () {
  var filterProjects = function filterProjects(list) {
    addProjectsToArray(list);
    appendProjectsToSidebar(_.newToDo.projectList);
    addListenerToProjectLabels();

    _.doc.carrot.removeEventListener('click', _.callExpandProjects);

    _.doc.carrot.addEventListener('click', callReduceProjects);
  };

  var addProjectsToArray = function addProjectsToArray(list) {
    for (var i = 0; i < list.length; i++) {
      if (!_.newToDo.projectList.includes(list[i].project)) {
        if (list[i].project != null) _.newToDo.projectList.push(list[i].project);
      }
    }

    console.log(_.newToDo.projectList);
  };

  var callReduceProjects = function callReduceProjects() {
    return reduceProjects();
  };

  var reduceProjects = function reduceProjects() {
    _.doc.expandProjectsMenu();

    _.newToDo.projectList.splice(0, _.newToDo.projectList.length);

    clearProjects();

    _.doc.carrot.removeEventListener('click', callReduceProjects);

    _.doc.carrot.addEventListener('click', _.callExpandProjects);

    console.log(_.newToDo.projectList);
  };

  var clearProjects = function clearProjects() {
    var projectLabels = document.querySelectorAll('.projectFilterLabel');
    console.log(projectLabels);

    for (var i = 0; i < projectLabels.length; i++) {
      projectLabels[i].remove();
    }
  };

  var appendProjectsToSidebar = function appendProjectsToSidebar(list) {
    var sidebar = document.getElementById('sidebar');

    for (var i = 0; i < list.length; i++) {
      sidebar.append(createProjectLink(list[i]));
    }

    console.log(sidebar);
  };

  var createProjectLink = function createProjectLink(input) {
    var label = document.createElement('h5');
    label.classList.add('projectFilterLabel');
    label.textContent = input;
    return label;
  };

  var addListenerToProjectLabels = function addListenerToProjectLabels() {
    var projectLabels = document.querySelectorAll('.projectFilterLabel');

    for (var i = 0; i < projectLabels.length; i++) {
      projectLabels[i].addEventListener('click', callFilterToDos);
    }
  };

  var callFilterToDos = function callFilterToDos(e) {
    return filter().filterToDos(e);
  };

  return {
    filterProjects: filterProjects
  };
}();

var filter = function filter() {
  var filterToDos = function filterToDos(e) {
    var filtered = _.newToDo.ToDoList.reduce(function (a, current, i) {
      return current.project === e.target.textContent ? a.concat(current) : a;
    }, []);

    _applyFilter(filtered, e);

    _createFilteredCarrotListeners();

    console.log(filtered);
  };

  var _applyFilter = function _applyFilter(list, e) {
    var container = document.querySelector('#listContainer');
    var tasks = document.querySelectorAll('.itemDiv');

    _removeUnfilteredTasks(tasks);

    _appendFilteredTasks(list, container);
  };

  var _removeUnfilteredTasks = function _removeUnfilteredTasks(tasks) {
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].remove();
    }
  };

  var _appendFilteredTasks = function _appendFilteredTasks(list, container) {
    for (var i = 0; i < list.length; i++) {
      container.appendChild(_.taskFactory.newItemForm().appendFilledTaskCompact(list[i], i));
    }
  };

  var _createFilteredCarrotListeners = function _createFilteredCarrotListeners() {};

  return {
    filterToDos: filterToDos
  };
};