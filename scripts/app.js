const container = document.querySelector("div");
const formControl = document.getElementById("form_control");
const insertedText = document.getElementById("inserted_text");
const typeError = document.getElementById("type_error");

const list = document.getElementById("list");

let menuContent;

formControl.addEventListener("submit", addToList);

// document.getElementById("list").addEventListener("click", function (e) {
//   if (e.target && e.target.matches("#action_menu")) {
//     const menuContent = document.getElementById("list_actions");
//     menuContent.style.display === "none"
//       ? (menuContent.style.display = "block")
//       : (menuContent.style.display = "none");
//   }
// });
