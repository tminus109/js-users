import { getUser, handleResponse, putUser } from "./fetchUsers.js";

const firstNameLbl = document.querySelector("#first-name-lbl");
const firstNameInp = document.querySelector("#first-name");
const lastNameLbl = document.querySelector("#last-name-lbl");
const lastNameInp = document.querySelector("#last-name");
const updateBtn = document.querySelector("#update-btn");
const msg = document.querySelector("#msg");

const splitUrl = window.location.href.split("/");
const id = splitUrl[splitUrl.length - 2];
const user = await getUser(id!, msg!);

(firstNameInp as HTMLInputElement).value = user!.first_name;
(lastNameInp as HTMLInputElement).value = user!.last_name;

updateBtn?.addEventListener("click", updateUser);

async function updateUser() {
  user!.first_name = (firstNameInp as HTMLInputElement).value;
  user!.last_name = (lastNameInp as HTMLInputElement).value;
  const response = await putUser(id, user!, msg!);
  if (response) {
    handleResponse(response, firstNameLbl!, lastNameLbl!, msg!);
  } else {
    msg!.textContent = "User has been successfully updated.";
  }
}
