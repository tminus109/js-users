import fetchUsers from "./fetchUsers.js";
import renderUsers from "./renderUsers.js";

const table = document.querySelector("table");
const errorMsg = document.querySelector("#error-msg");
const url = "https://assessment-users-backend.herokuapp.com/users";
const myInit = {
  headers: {
    "Content-Type": "application/json",
  },
};
const fetchedUsers = await fetchUsers(url, myInit, errorMsg!);

renderUsers(fetchedUsers!, table!);
