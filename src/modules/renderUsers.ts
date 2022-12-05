import { putUser } from "./fetchUsers.js";
import { User } from "./types.js";
import { reverseUserStatus, setLockBtnText, setStrikeAttrs } from "./utils.js";

function renderUsers(
  fetchedUsers: User[],
  tbody: HTMLTableSectionElement,
  pageNum: number,
  limit: number,
  msg: HTMLSpanElement
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
    const firstNameTd = document.createElement("td");
    const lastNameTd = document.createElement("td");
    const createdAtTd = document.createElement("td");
    const editTd = document.createElement("td");
    const lockTd = document.createElement("td");
    const editBtn = document.createElement("button");
    const lockBtn = document.createElement("button");

    firstNameTd.textContent = user.first_name as string;
    lastNameTd.textContent = user.last_name as string;
    createdAtTd.textContent = user.created_at!;
    editBtn.textContent = "Edit";
    lockBtn.textContent = setLockBtnText(user);

    setStrikeAttrs(user, firstNameTd, lastNameTd, createdAtTd);

    editBtn.addEventListener("click", () => {
      window.location.href = `/users/${user.id}/edit`;
    });

    lockBtn.addEventListener("click", async () => {
      reverseUserStatus(user);
      const response = await putUser(String(user.id), user, msg!);

      if (response) {
        msg.textContent = response.toString();
        reverseUserStatus(user);
      } else {
        msg.textContent = "";
        lockBtn.textContent = setLockBtnText(user)!;
        setStrikeAttrs(user, firstNameTd, lastNameTd, createdAtTd);
      }
    });

    tbody.appendChild(newRow);
    newRow.appendChild(firstNameTd);
    newRow.appendChild(lastNameTd);
    newRow.appendChild(createdAtTd);
    newRow.appendChild(editTd);
    newRow.appendChild(lockTd);
    editTd.appendChild(editBtn);
    lockTd.appendChild(lockBtn);
  }
}

export default renderUsers;
