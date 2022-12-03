import { User } from "./types.js";

let url = "https://assessment-users-backend.herokuapp.com/users";

const getInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

async function getUsers(msg: Element) {
  return await fetch(url, getInit)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}.`);
      }
      return response.json() as Promise<Array<User>>;
    })
    .catch((error) => {
      msg!.textContent = error.message;
    });
}

async function postUser(user: User, msg: Element) {
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

async function getUser(id: string, msg: Element) {
  return await fetch(`${url}/${id}`, getInit)
    .then((response) => {
      return response.json() as Promise<User>;
    })
    .catch((error) => {
      msg.textContent = error.message;
    });
}

async function putUser(id: string, user: User, msg: Element) {
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
  firstNameLbl: Element,
  lastNameLbl: Element,
  msg: Element
) {
  if (response.hasOwnProperty("id")) {
    msg.textContent = "User has been successfully saved.";
  } else {
    if (response.hasOwnProperty("first_name")) {
      firstNameLbl.textContent = `First name ${response.first_name[0]}.`;
    }
    if (response.hasOwnProperty("last_name")) {
      lastNameLbl.textContent = `Last name ${response.last_name[0]}.`;
    }
    if (response.hasOwnProperty("status")) {
      msg.textContent = `Status ${response.status[0]}.`;
    }
  }
}

export { getUsers, postUser, getUser, putUser, handleResponse };
