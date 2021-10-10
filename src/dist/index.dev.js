"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenForExpand = exports.doc = exports.taskFactory = exports.newToDo = void 0;

require("./style.css");

var _menuButton = require("./menuButton.png");

var _upArrow = require("./up-arrow.png");

var _DOMManager = require("./DOM-Manager");

var _ToDo_Object_Factory = require("./ToDo_Object_Factory");

console.log('hello');
var taskFactory = (0, _DOMManager.DOM_Task_Factory)();
exports.taskFactory = taskFactory;
var div = taskFactory.itemDiv;
console.log({
  div: div
});
var doc = (0, _DOMManager.DOM_Factory)();
exports.doc = doc;
doc.projectsLabelDiv.insertBefore(doc.carrot, doc.projectsLabelDiv.firstChild);
doc.menu.addEventListener('click', doc.showMenu);
doc.carrot.addEventListener('click', doc.expandProjectsMenu);
doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);

var removeItem = function removeItem(node) {
  console.log(node);
  console.log(node.target.parentNode.parentNode);
  node.target.parentNode.parentNode.remove();

  if (node.target.parentNode.parentNode.id === 'emptyForm') {
    doc.addBtn.addEventListener('click', taskFactory.newItemForm().appendEmptyItemForm);
  }
};

var listenForDelete = function listenForDelete() {
  var deleteBtn = document.getElementsByClassName('deleteEntry');

  for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', removeItem);
  }
};

listenForDelete();
doc.addBtn.addEventListener('click', listenForDelete);

var responsiveSidebar = function () {
  var minSize = window.matchMedia("(min-width: 500px)");
  var maxSize = window.matchMedia("(max-width: 500px)");

  var sidebarMediaQuery = function sidebarMediaQuery(min, max) {
    if (max.matches) {
      doc.sidebar.classList.remove('active');
      doc.taskContainer.classList.remove('active');
    } else if (min.matches) {
      doc.sidebar.classList.add('active');
      doc.taskContainer.classList.add('active');
    }
  };

  return {
    minSize: minSize,
    maxSize: maxSize,
    sidebarMediaQuery: sidebarMediaQuery
  };
}();

window.onload = responsiveSidebar.sidebarMediaQuery(responsiveSidebar.minSize, responsiveSidebar.maxSize);
var newToDo = (0, _ToDo_Object_Factory.ToDo_Item)();
exports.newToDo = newToDo;
var addItem = newToDo.newItem('get groceries', '08/13/21', 'groceries', 'get milk, and eggs', 'true');
var addAnotherItem = newToDo.newItem('clean room', '08/14/21', 'housework', 'room is dirty, clean it!', 'false');
var addAnotherTestItem = newToDo.newItem('test', 'test', 'test', 'test');
newToDo.ToDoList.push(addItem, addAnotherItem);
console.log(newToDo.ToDoList);
console.log(newToDo);
console.log(newToDo.ToDoList[0].description);
window.addEventListener("load", taskFactory.newItemForm().appendFilledItemForm(newToDo));
var testValidate = (0, _DOMManager.validateForm)();
testValidate.run();
doc.addBtn.addEventListener('click', function () {
  console.log(testValidate.form);
});

var expandTasks = function expandTasks() {
  var allTasks = document.getElementsByClassName('taskCarrot');
  console.log(allTasks);

  var expand = function expand(e) {
    e.classList.contains('active') ? e.classList.remove('active') : e.classList.add('active');
  };

  var listen = function listen() {
    var _loop = function _loop(i) {
      allTasks[i].addEventListener('click', function () {
        expand(allTasks[i]);
      });
      console.log(allTasks[i].parentNode.parentNode);
    };

    for (var i = 0; i < allTasks.length; i++) {
      _loop(i);
    }
  };

  return {
    listen: listen
  };
};

var listenForExpand = expandTasks();
exports.listenForExpand = listenForExpand;
listenForExpand.listen();