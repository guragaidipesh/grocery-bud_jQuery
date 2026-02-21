function createSingleItem(item) {
  var $div = $('<div class="single-item"></div>');

  $div.html(`
        <input type="checkbox" ${item.completed ? "checked" : ""} />
       <p class="${item.completed ? "completed" : ""}">${item.name}</p>
        <button class="btn icon-btn edit-btn" type="button">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="btn icon-btn remove-btn" type="button">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      `);

  $div.find('input[type="checkbox"]').on("change", function () {
    editCompleted(item.id);
  });

  return $div;
}
