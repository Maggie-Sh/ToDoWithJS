const container = document.querySelector("div");
const formControl = document.getElementById("form_control");
const insertedText = document.getElementById("inserted_text");
const typeError = document.getElementById("type_error");

const list = document.getElementById("list");

let menuContent;

formControl.addEventListener("submit", addToList);
