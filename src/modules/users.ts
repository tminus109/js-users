import fetchUsers from "./fetchUsers.js";
import renderUsers from "./renderUsers.js";

const newUserBtn = document.querySelector("#new-user-btn");
const tbody = document.querySelector("tbody");
const errorMsg = document.querySelector("#error-msg");
const firstBtn = document.querySelector("#first-btn");
const prevBtn = document.querySelector("#prev-btn");
const pageNumSpan = document.querySelector("#page-num-span");
const nextBtn = document.querySelector("#next-btn");
const lastBtn = document.querySelector("#last-btn");
const fetchedUsers = await fetchUsers(errorMsg!);
let limit = 10;
let pageNum = 0;
let lastPageNum = Math.ceil(fetchedUsers!.length / limit);

renderUsers(fetchedUsers!, tbody!, pageNum, limit);

pageNumSpan!.textContent = `${pageNum + 1} / ${lastPageNum}`;

newUserBtn?.addEventListener("click", () => {
  window.location.href = "/new";
});

firstBtn?.addEventListener("click", () => {
  pageNum = 0;
  renderUsers(fetchedUsers!, tbody!, pageNum, limit);
  pageNumSpan!.textContent = `${pageNum + 1} / ${lastPageNum}`;
});

prevBtn?.addEventListener("click", () => {
  if (pageNum !== 0) {
    pageNum--;
    renderUsers(fetchedUsers!, tbody!, pageNum, limit);
    pageNumSpan!.textContent = `${pageNum + 1} / ${lastPageNum}`;
  }
});

nextBtn?.addEventListener("click", () => {
  if (pageNum + 1 !== lastPageNum) {
    pageNum++;
    renderUsers(fetchedUsers!, tbody!, pageNum, limit);
    pageNumSpan!.textContent = `${pageNum + 1} / ${lastPageNum}`;
  }
});

lastBtn?.addEventListener("click", () => {
  pageNum = lastPageNum - 1;
  renderUsers(fetchedUsers!, tbody!, pageNum, limit);
  pageNumSpan!.textContent = `${pageNum + 1} / ${lastPageNum}`;
});
