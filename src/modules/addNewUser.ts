import User from "./User.js";

const url = "https://assessment-users-backend.herokuapp.com/users";

async function postNewUser(user: User, msg: Element) {
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

function handleResponse(
  response: User,
  firstNameLbl: Element,
  lastNameLbl: Element,
  msg: Element
) {
  if (response.hasOwnProperty("id")) {
    msg.textContent = "New user has been successfully saved.";
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

export { postNewUser, handleResponse };
