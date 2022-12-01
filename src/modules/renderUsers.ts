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
    const edit = document.createElement("td");
    const lock = document.createElement("td");
    const editBtn = document.createElement("button");
    const lockBtn = document.createElement("button");
    firstName.textContent = user.first_name;
    lastName.textContent = user.last_name;
    if (user.created_at) {
      createdAt.textContent = user.created_at;
    }
    editBtn.textContent = "Edit";
    if (user.status === "locked") {
      lockBtn.textContent = "Unlock";
    } else {
      lockBtn.textContent = "Lock";
    }
    table.appendChild(newRow);
    newRow.appendChild(firstName);
    newRow.appendChild(lastName);
    newRow.appendChild(createdAt);
    newRow.appendChild(edit);
    newRow.appendChild(lock);
    edit.appendChild(editBtn);
    lock.appendChild(lockBtn);
  }
}

export default renderUsers;
