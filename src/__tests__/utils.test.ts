import { Status, User } from "../modules/types";
import {
  reverseUserStatus,
  setLockBtnText,
  setStrikeAttrs,
  ableOrDisablePageBtns,
  resetLabelsColor,
} from "../modules/utils";

const user: User = {
  last_name: "Berry",
  first_name: "Chuck",
  status: Status.Active,
};

describe("reverseUserStatus tests", () => {
  test("user status reverses every time", () => {
    reverseUserStatus(user);
    expect(user.status).toBe(Status.Locked);
    reverseUserStatus(user);
    expect(user.status).toBe(Status.Active);
  });
});

describe("setLockBtnText tests", () => {
  test("user status is active", () => {
    user.status = Status.Active;
    const lockBtnText = setLockBtnText(user);
    expect(lockBtnText).toBe("Lock");
  });

  test("user status is locked", () => {
    user.status = Status.Locked;
    const lockBtnText = setLockBtnText(user);
    expect(lockBtnText).not.toBe("Lock");
    expect(lockBtnText).toBe("Unlock");
  });
});

describe("setStrikeAttrs tests", () => {
  const firstNameTd = document.createElement("td") as HTMLTableCellElement;
  const lastNameTd = document.createElement("td") as HTMLTableCellElement;
  const createdAtTd = document.createElement("td") as HTMLTableCellElement;

  test("user status is locked", () => {
    user.status = Status.Locked;
    setStrikeAttrs(user, firstNameTd, lastNameTd, createdAtTd);
    expect(firstNameTd.style.textDecoration).toBe("line-through");
    expect(lastNameTd.style.textDecoration).toBe("line-through");
    expect(createdAtTd.style.textDecoration).toBe("line-through");
  });

  test("user status is active", () => {
    user.status = Status.Active;
    setStrikeAttrs(user, firstNameTd, lastNameTd, createdAtTd);
    expect(firstNameTd.style.textDecoration).toBe("none");
    expect(lastNameTd.style.textDecoration).toBe("none");
    expect(createdAtTd.style.textDecoration).toBe("none");
  });
});

describe("ableOrDisablePageBtns tests", () => {
  const lastPageNum = 5;
  const firstBtn = document.createElement("button") as HTMLButtonElement;
  const prevBtn = document.createElement("button") as HTMLButtonElement;
  const nextBtn = document.createElement("button") as HTMLButtonElement;
  const lastBtn = document.createElement("button") as HTMLButtonElement;

  test("page is first page", () => {
    const pageNum = 0;
    ableOrDisablePageBtns(
      pageNum,
      lastPageNum,
      firstBtn,
      prevBtn,
      nextBtn,
      lastBtn
    );
    expect(firstBtn.style.color).toBe("grey");
    expect(prevBtn.style.color).toBe("grey");
    expect(nextBtn.style.color).toBe("rgb(74, 30, 170)");
    expect(lastBtn.style.color).toBe("rgb(74, 30, 170)");
  });

  test("page is last page", () => {
    const pageNum = lastPageNum - 1;
    ableOrDisablePageBtns(
      pageNum,
      lastPageNum,
      firstBtn,
      prevBtn,
      nextBtn,
      lastBtn
    );
    expect(firstBtn.style.color).toBe("rgb(74, 30, 170)");
    expect(prevBtn.style.color).toBe("rgb(74, 30, 170)");
    expect(nextBtn.style.color).toBe("grey");
    expect(lastBtn.style.color).toBe("grey");
  });

  test("page is page #2", () => {
    const pageNum = 1;
    ableOrDisablePageBtns(
      pageNum,
      lastPageNum,
      firstBtn,
      prevBtn,
      nextBtn,
      lastBtn
    );
    expect(firstBtn.style.color).toBe("rgb(74, 30, 170)");
    expect(prevBtn.style.color).toBe("rgb(74, 30, 170)");
    expect(nextBtn.style.color).toBe("rgb(74, 30, 170)");
    expect(lastBtn.style.color).toBe("rgb(74, 30, 170)");
  });
});

describe("resetLabelsColor tests", () => {
  const firstNameLbl = document.createElement("label") as HTMLLabelElement;
  const lastNameLbl = document.createElement("label") as HTMLLabelElement;

  test("labels' color is red", () => {
    firstNameLbl.style.color = "red";
    lastNameLbl.style.color = "red";
    resetLabelsColor(firstNameLbl, lastNameLbl);
    expect(firstNameLbl.style.color).not.toBe("red");
    expect(lastNameLbl.style.color).not.toBe("red");
    expect(firstNameLbl.style.color).toBe("rgb(238, 238, 238)");
    expect(lastNameLbl.style.color).toBe("rgb(238, 238, 238)");
  });
});
