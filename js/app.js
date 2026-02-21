function getLocalStorage() {
  var list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
}
function setLocalStorage(itemsArray) {
  localStorage.setItem("grocery-list", JSON.stringify(itemsArray));
}
var items = getLocalStorage();

function render() {
  var $app = $("#app");
  $app.empty();

  var $itemsElement = createItems(items);
  $app.append($itemsElement);
}

function editCompleted(itemId) {
  items = $.map(items, function (item) {
    if (item.id === itemId) {
      return $.extend({}, item, { completed: !item.completed });
    }
    return item;
  });
  setLocalStorage(items);
  render();
}
$(document).ready(function () {
  render();
});

function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  setLocalStorage(items);

  render();
  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}

function render() {
  var $app = $("#app");
  $app.empty();

  var $formElement = createForm();
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function addItem(itemName) {
  var newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };
  items.push(newItem);
  setLocalStorage(items);
  render();
  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
}

var editId = null;

function render() {
  var $app = $("#app");
  $app.empty();

  var itemToEdit = editId
    ? $.grep(items, function (item) {
        return item.id === editId;
      })[0]
    : null;
  var $formElement = createForm(editId, itemToEdit); // edited line
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}

$(document).ready(function () {
  render();
});

function updateItemName(newName) {
  items = $.map(items, function (item) {
    if (item.id === editId) {
      return $.extend({}, item, { name: newName });
    }
    return item;
  });
  editId = null;
  setLocalStorage(items);
  render();
  setTimeout(function () {
    alert("Item Updated Successfully!");
  }, 0);
}

function setEditId(itemId) {
  editId = itemId;
  render();

  setTimeout(function () {
    $(".form-input").focus();
  }, 0);
}
