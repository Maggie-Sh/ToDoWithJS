const addToList = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const text = formData.get("inserted_text").trim();

  if (text.length) {
    let id = Math.floor(Math.random() * 100);
    typeError.textContent = "";
    const listItem = document.createElement("DIV");
    listItem.classList.add("list_item");
    listItem.id = `id_${id}`;
    listItem.innerHTML = `
            <div class="list_item_content">
              <div class="list_item_check_text">
                <input type="checkbox" class="checking_item" />
                <p class="list_item_text" id =
                  "id_${id}_text"
                >${text}</p>
              </div>
              <div  id="id_${id}_list_actions" class="list_actions" >
              <div id=
                "id_${id}_edit"
               class="list_action"><i class="fas fa-edit"></i></div>
              <div id=
                "id_${id}_delete"
               class="list_action"><i class="fas fa-trash"></i></div>
              </div>
            </div>`;
    list.appendChild(listItem);
    const listActions = document.getElementById(`id_${id}_list_actions`);
    const removeDialog = document.getElementById(`id_${id}_delete`);
    const editDialog = document.getElementById(`id_${id}_edit`);
    removeDialog.addEventListener("click", () => removeElem(id, listActions));
    editDialog.addEventListener("click", () => editTask(id, listActions));
  } else {
    typeError.textContent = "Please type valid text.";
  }
  insertedText.value = "";
};

const removeElem = (id, listActions) => {
  listActions.classList.remove("open");

  const background = document.getElementById("background");
  const removeDialog = document.getElementById("remove_dialog");

  background.style.display = "block";
  removeDialog.style.display = "block";

  background.addEventListener("click", () =>
    closeRemoveDialog(background, removeDialog)
  );

  document
    .getElementById("cancel_remove")
    .addEventListener("click", () =>
      closeRemoveDialog(background, removeDialog)
    );

  document.getElementById("remove").addEventListener("click", () => {
    if (document.getElementById("id_" + id)) {
      document.getElementById("id_" + id).remove();
    }
    closeRemoveDialog(background, removeDialog);
  });
};

const closeRemoveDialog = (background, removeDialog) => {
  background.style.display = "none";
  removeDialog.style.display = "none";
};

const closeEditDialog = (background, editDialog) => {
  background.style.display = "none";
  editDialog.style.display = "none";
  document.getElementById("edited_text").value = "";
};

const editTask = (id, listActions) => {
  listActions.classList.remove("open");

  const background = document.getElementById("background");
  const editDialog = document.getElementById("edit_dialog");

  background.style.display = "block";
  editDialog.style.display = "block";

  background.addEventListener("click", () =>
    closeEditDialog(background, editDialog)
  );
  document
    .getElementById("close")
    .addEventListener("click", () => closeEditDialog(background, editDialog));

  document
    .getElementById("edit_text")
    .addEventListener(
      "click",
      (event) => editItem(event, id, editDialog, background),
      {
        once: true,
      }
    );
};

const editItem = (event, id, editDialog, background) => {
  event.preventDefault();
  const editingInput = document.getElementById("edited_text");
  let text = editingInput.value.trim();
  if (text) {
    if (document.getElementById("id_" + id + "_text")) {
      document.getElementById("id_" + id + "_text").innerHTML = text;
    }
  }
  closeEditDialog(background, editDialog);
  editingInput.value = "";
};
