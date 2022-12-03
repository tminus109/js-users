import { User } from "./types.js";

function renderUsers(
  fetchedUsers: User[],
  tbody: HTMLTableSectionElement,
  pageNum: number,
  limit: number
) {
  const startIndex = pageNum * limit;

  if (fetchedUsers.length - startIndex < limit) {
    limit = fetchedUsers.length - startIndex;
  }

  while (tbody.lastChild) {
    tbody.removeChild(tbody.lastChild);
  }

  for (let i = startIndex; i < startIndex + limit; i++) {
    const user: User = fetchedUsers[i];

    const newRow = document.createElement("tr");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const createdAt = document.createElement("td");
    const editTd = document.createElement("td");
    const lockTd = document.createElement("td");
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

    editBtn.addEventListener("click", () => {
      window.location.href = `/users/${user.id}/edit`;
    });

    tbody.appendChild(newRow);
    newRow.appendChild(firstName);
    newRow.appendChild(lastName);
    newRow.appendChild(createdAt);
    newRow.appendChild(editTd);
    newRow.appendChild(lockTd);
    editTd.appendChild(editBtn);
    lockTd.appendChild(lockBtn);
  }
}

export default renderUsers;
