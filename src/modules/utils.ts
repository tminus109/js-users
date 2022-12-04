import { Status, User } from "./types.js";

function setLockBtnText(user: User): string {
  if (user.status === Status.Locked) {
    return "Unlock";
  } else {
    return "Lock";
  }
}

function reverseUserStatus(user: User) {
  if (user.status === Status.Active) {
    user.status = Status.Locked;
  } else {
    user.status = Status.Active;
  }
}

function setStrikeAttrs(
  user: User,
  firstNameTd: HTMLTableCellElement,
  lastNameTd: HTMLTableCellElement,
  createdAtTd: HTMLTableCellElement
) {
  if (user.status === Status.Locked) {
    firstNameTd.style.textDecoration = "line-through";
    lastNameTd.style.textDecoration = "line-through";
    createdAtTd.style.textDecoration = "line-through";
  } else {
    firstNameTd.style.textDecoration = "none";
    lastNameTd.style.textDecoration = "none";
    createdAtTd.style.textDecoration = "none";
  }
}

function ableOrDisablePageBtns(
  pageNum: number,
  lastPageNum: number,
  firstBtn: HTMLButtonElement,
  prevBtn: HTMLButtonElement,
  nextBtn: HTMLButtonElement,
  lastBtn: HTMLButtonElement
) {
  firstBtn.style.color = "#4a1eaa";
  prevBtn.style.color = "#4a1eaa";
  nextBtn.style.color = "#4a1eaa";
  lastBtn.style.color = "#4a1eaa";

  if (pageNum === 0) {
    firstBtn.style.color = "grey";
    prevBtn.style.color = "grey";
  }

  if (pageNum === lastPageNum - 1) {
    nextBtn.style.color = "grey";
    lastBtn.style.color = "grey";
  }
}

function resetLabelsColor(
  firstNameLbl: HTMLLabelElement,
  lastNameLbl: HTMLLabelElement
) {
  firstNameLbl.style.color = "#eee";
  lastNameLbl.style.color = "#eee";
}

export {
  setLockBtnText,
  reverseUserStatus,
  setStrikeAttrs,
  ableOrDisablePageBtns,
  resetLabelsColor,
};
