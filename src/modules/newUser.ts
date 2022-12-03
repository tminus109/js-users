import { handleResponse, postUser } from "./fetchUsers.js";
import { Status, User } from "./types.js";

const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;
const firstNameLbl = document.querySelector(
  "#first-name-lbl"
) as HTMLLabelElement;
const firstNameInp = document.querySelector("#first-name") as HTMLInputElement;
const lastNameLbl = document.querySelector(
  "#last-name-lbl"
) as HTMLLabelElement;
const lastNameInp = document.querySelector("#last-name") as HTMLInputElement;
const msg = document.querySelector("#msg") as HTMLSpanElement;

const newUser: User = { first_name: "", last_name: "", status: Status.Active };

addBtn.addEventListener("click", saveNewUser);

async function saveNewUser() {
  firstNameLbl.textContent = "First name:";
  lastNameLbl.textContent = "Last name:";
  newUser.first_name = firstNameInp.value;
  newUser.last_name = lastNameInp.value;
  const response = await postUser(newUser, msg);
  if (response) {
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
  }
}
