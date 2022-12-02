import Status from "./Status.js";
import User from "./User.js";
import { handleResponse, postNewUser } from "./addNewUser.js";

const addBtn = document.querySelector("#add-btn");
const firstNameLbl = document.querySelector("#first-name-lbl");
const firstNameInp = document.querySelector("#first-name");
const lastNameLbl = document.querySelector("#last-name-lbl");
const lastNameInp = document.querySelector("#last-name");
const msg = document.querySelector("#msg");

const newUser: User = { first_name: "", last_name: "", status: Status.Active };

addBtn?.addEventListener("click", saveNewUser);

async function saveNewUser() {
  firstNameLbl!.textContent = "First name:";
  lastNameLbl!.textContent = "Last name:";
  newUser.first_name = (firstNameInp as HTMLInputElement).value;
  newUser.last_name = (lastNameInp as HTMLInputElement).value;
  const response = await postNewUser(newUser, msg!);
  if (response) {
    handleResponse(response, firstNameLbl!, lastNameLbl!, msg!);
  }
}
