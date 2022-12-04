import { getUsers } from "./fetchUsers.js";
import renderUsers from "./renderUsers.js";
import { ableOrDisablePageBtns } from "./utils.js";

const newUserBtn = document.querySelector("#new-user-btn") as HTMLButtonElement;
const tbody = document.querySelector("tbody") as HTMLTableSectionElement;
const msg = document.querySelector("#msg") as HTMLSpanElement;
const firstBtn = document.querySelector("#first-btn") as HTMLButtonElement;
const prevBtn = document.querySelector("#prev-btn") as HTMLButtonElement;
const pageNumSpan = document.querySelector("#page-num-span") as HTMLSpanElement;
const nextBtn = document.querySelector("#next-btn") as HTMLButtonElement;
const lastBtn = document.querySelector("#last-btn") as HTMLButtonElement;
const fetchedUsers = await getUsers(msg!);
let limit = 10;
let pageNum = 0;
let lastPageNum = Math.ceil(fetchedUsers!.length / limit);

ableOrDisablePageBtns(
  pageNum,
  lastPageNum,
  firstBtn,
  prevBtn,
  nextBtn,
  lastBtn
);

renderUsers(fetchedUsers!, tbody!, pageNum, limit, msg!);

pageNumSpan.textContent = `${pageNum + 1} / ${lastPageNum}`;

newUserBtn.addEventListener("click", () => {
  window.location.href = "/users/new";
});

firstBtn.addEventListener("click", () => {
  pageNum = 0;
  renderUsers(fetchedUsers!, tbody, pageNum, limit, msg);
  pageNumSpan.textContent = `${pageNum + 1} / ${lastPageNum}`;
  ableOrDisablePageBtns(
    pageNum,
    lastPageNum,
    firstBtn,
    prevBtn,
    nextBtn,
    lastBtn
  );
});

prevBtn.addEventListener("click", () => {
  if (pageNum !== 0) {
    pageNum--;
    renderUsers(fetchedUsers!, tbody, pageNum, limit, msg);
    pageNumSpan.textContent = `${pageNum + 1} / ${lastPageNum}`;
    ableOrDisablePageBtns(
      pageNum,
      lastPageNum,
      firstBtn,
      prevBtn,
      nextBtn,
      lastBtn
    );
  }
});

nextBtn.addEventListener("click", () => {
  if (pageNum + 1 !== lastPageNum) {
    pageNum++;
    renderUsers(fetchedUsers!, tbody, pageNum, limit, msg);
    pageNumSpan.textContent = `${pageNum + 1} / ${lastPageNum}`;
  }
  ableOrDisablePageBtns(
    pageNum,
    lastPageNum,
    firstBtn,
    prevBtn,
    nextBtn,
    lastBtn
  );
});

lastBtn.addEventListener("click", () => {
  pageNum = lastPageNum - 1;
  renderUsers(fetchedUsers!, tbody, pageNum, limit, msg);
  pageNumSpan.textContent = `${pageNum + 1} / ${lastPageNum}`;
  ableOrDisablePageBtns(
    pageNum,
    lastPageNum,
    firstBtn,
    prevBtn,
    nextBtn,
    lastBtn
  );
});
