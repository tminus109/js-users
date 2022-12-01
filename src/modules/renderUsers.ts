import User from "../types/models/User.js";

function renderUsers(fetchedUsers: User[], table: HTMLTableElement) {
  const limit = 10;
  let pageCount = fetchedUsers.length / limit;
  if (length % limit !== 0) {
    pageCount += 1;
  }
  let startIndex = 0;
  let pageNum = 0;

  for (let i = startIndex; i < limit; i++) {
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
    table.appendChild(newRow);
    newRow.appendChild(firstName);
    newRow.appendChild(lastName);
    newRow.appendChild(createdAt);
  }
}

export default renderUsers;
