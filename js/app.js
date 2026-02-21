var items = groceryItems;

function render() {
  var $app = $("#app");
  $app.empty();

  var $itemsElement = createItems(items);
  $app.append($itemsElement);
}

$(document).ready(function () {
  render();
});
