import User from "../types/models/User.js";

const table = document.querySelector("table");
const errorMsg = document.querySelector("#error-msg");
const url = "https://assessment-users-backend.herokuapp.com/users";

const fetchedUsers = await fetch(url, {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json() as Promise<Array<User>>;
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    errorMsg!.textContent = error.message;
  });

if (fetchedUsers) {
  const length = fetchedUsers.length;
  for (let i = 0; i < length!; i++) {
    const user: User = fetchedUsers[i];
    const newRow = document.createElement("tr");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const createdAt = document.createElement("td");
    firstName.textContent = user.first_name;
    lastName.textContent = user.last_name;
    if (user.created_at) {
      createdAt.textContent = user.created_at;
    }
    table?.appendChild(newRow);
    newRow.appendChild(firstName);
    newRow.appendChild(lastName);
    newRow.appendChild(createdAt);
  }
}
