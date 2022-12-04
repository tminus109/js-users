import { getUser, handleResponse, putUser } from "./fetchUsers.js";
import { resetLabelsColor } from "./utils.js";

const firstNameLbl = document.querySelector(
  "#first-name-lbl"
) as HTMLLabelElement;
const firstNameInp = document.querySelector("#first-name") as HTMLInputElement;
const lastNameLbl = document.querySelector(
  "#last-name-lbl"
) as HTMLLabelElement;
const lastNameInp = document.querySelector("#last-name") as HTMLInputElement;
const updateBtn = document.querySelector("#update-btn") as HTMLButtonElement;
const msg = document.querySelector("#msg") as HTMLSpanElement;

const splitUrl = window.location.href.split("/");
const id = splitUrl[splitUrl.length - 2];
const user = await getUser(id, msg);

firstNameInp.value = user!.first_name;
lastNameInp.value = user!.last_name;

updateBtn.addEventListener("click", updateUser);

async function updateUser() {
  firstNameLbl.textContent = "First name:";
  lastNameLbl.textContent = "Last name:";
  user!.first_name = firstNameInp.value;
  user!.last_name = lastNameInp.value;
  const response = await putUser(id, user!, msg);
  if (response) {
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
  } else {
    resetLabelsColor(firstNameLbl, lastNameLbl);
    msg.textContent = "Changes have been saved.";
  }
}
