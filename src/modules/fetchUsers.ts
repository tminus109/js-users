import { User } from "./types.js";
import { resetLabelsColor } from "./utils.js";

let url = "https://assessment-users-backend.herokuapp.com/users";

const getInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

async function getUsers(msg: HTMLSpanElement) {
  return await fetch(url, getInit)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}.`);
      }
      return response.json() as Promise<Array<User>>;
    })
    .catch((error) => {
      msg.textContent = error.message;
    });
}

async function postUser(user: User, msg: HTMLSpanElement) {
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  return await fetch(url, myInit)
    .then((response) => {
      return response.json() as Promise<User>;
    })
    .catch((error) => {
      msg.textContent = `${error.message}.`;
    });
}

async function getUser(id: string, msg: HTMLSpanElement) {
  return await fetch(`${url}/${id}`, getInit)
    .then((response) => {
      return response.json() as Promise<User>;
    })
    .catch((error) => {
      msg.textContent = error.message;
    });
}

async function putUser(id: string, user: User, msg: HTMLSpanElement) {
  const myInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  return await fetch(`${url}/${id}`, myInit)
    .then((response) => {
      return response.json() as Promise<User>;
    })
    .catch((error) => {
      msg.textContent = `${error.message}.`;
    });
}

function handleResponse(
  response: User,
  firstNameLbl: HTMLLabelElement,
  lastNameLbl: HTMLLabelElement,
  msg: HTMLSpanElement
) {
  resetLabelsColor(firstNameLbl, lastNameLbl);
  msg.textContent = "";

  if (response.hasOwnProperty("id")) {
    msg.textContent = "User has been successfully saved.";
  } else {
    if (response.hasOwnProperty("first_name")) {
      firstNameLbl.textContent = `First name ${response.first_name![0]}.`;
      firstNameLbl.style.color = "red";
    }
    if (response.hasOwnProperty("last_name")) {
      lastNameLbl.textContent = `Last name ${response.last_name![0]}.`;
      lastNameLbl.style.color = "red";
    }
    if (response.hasOwnProperty("status")) {
      msg.textContent = `Status ${response.status![0]}.`;
    }
  }
}

export { getUsers, postUser, getUser, putUser, handleResponse };
