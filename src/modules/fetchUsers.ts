import User from "../types/models/User.js";

const url = "https://assessment-users-backend.herokuapp.com/users";
const myInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

async function fetchUsers(errorMsg: Element) {
  return await fetch(url, myInit)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}.`);
      }
      return response.json() as Promise<Array<User>>;
    })
    .then((users) => {
      return users;
    })
    .catch((error) => {
      errorMsg!.textContent = error.message;
    });
}

export default fetchUsers;
