import "@testing-library/jest-dom";

import renderUsers from "../modules/renderUsers";
import { User } from "../modules/types";

document.body.innerHTML = `
  <table>
    <tbody></tbody>
  </table>
  <span id="msg"></span>`;

const fetchedUsers: User[] = [
  {
    id: 532,
    last_name: "Gart",
    first_name: "Juli",
    status: "active",
    created_at: "2022-10-12T10:58:36.016Z",
    updated_at: "2022-12-05T18:23:44.607Z",
    url: "https://assessment-users-backend.herokuapp.com/users/532.json",
  },
  {
    id: 574,
    last_name: "ekisz",
    first_name: "ekisz",
    status: "active",
    created_at: "2022-11-07T17:19:56.607Z",
    updated_at: "2022-12-05T18:24:38.861Z",
    url: "https://assessment-users-backend.herokuapp.com/users/574.json",
  },
  {
    id: 618,
    last_name: "dd",
    first_name: "qq",
    status: "active",
    created_at: "2022-12-03T18:47:58.661Z",
    updated_at: "2022-12-05T18:30:47.909Z",
    url: "https://assessment-users-backend.herokuapp.com/users/618.json",
  },
  {
    id: 636,
    last_name: "Kuga",
    first_name: "Gyula",
    status: "active",
    created_at: "2022-12-05T11:08:29.780Z",
    updated_at: "2022-12-05T15:31:36.096Z",
    url: "https://assessment-users-backend.herokuapp.com/users/636.json",
  },
  {
    id: 524,
    last_name: "Shat",
    first_name: "Holy",
    status: "locked",
    created_at: "2022-09-28T08:07:06.612Z",
    updated_at: "2022-12-05T15:32:46.238Z",
    url: "https://assessment-users-backend.herokuapp.com/users/524.json",
  },
];

const tbody = document.querySelector("tbody") as HTMLTableSectionElement;
const msg = document.querySelector("span") as HTMLSpanElement;
const pageNum = 0;
const limit = 6;

beforeAll(() => {
  renderUsers(fetchedUsers, tbody, pageNum, limit, msg);
});

describe("renderUsers tests", () => {
  test("there is a button element in the document", () => {
    const element = document.querySelector("button");
    expect(element).toBeInTheDocument();
    expect(element).not.toBeNull();
    expect(element).toBeVisible();
    expect(element).toBeEnabled();
  });

  test("function renders 10 buttons for 5 users", () => {
    const elements = document.getElementsByTagName("button");
    expect(elements).toHaveLength(10);
  });

  test("buttons' textContent is rendered correctly", () => {
    const elements = document.getElementsByTagName("button");
    expect(elements[0].textContent).toBe("Edit");
    expect(elements[1].textContent).toBe("Lock");
    expect(elements[2].textContent).toBe("Edit");
    expect(elements[3].textContent).toBe("Lock");
    expect(elements[4].textContent).toBe("Edit");
    expect(elements[5].textContent).toBe("Lock");
    expect(elements[6].textContent).toBe("Edit");
    expect(elements[7].textContent).toBe("Lock");
    expect(elements[8].textContent).toBe("Edit");
    expect(elements[9].textContent).toBe("Unlock");
  });

  test("there is a table data cell in the document", () => {
    const element = document.querySelector("td");
    expect(element).toBeInTheDocument();
    expect(element).not.toBeNull();
    expect(element).toBeVisible();
    expect(element?.textContent).not.toBe("");
  });

  test("function renders 5 table data cells for each user - 25 in total for 5 users", () => {
    const elements = document.getElementsByTagName("td");
    expect(elements).toHaveLength(25);
  });

  test("msg span remains blank after render", () => {
    const element = document.querySelector("#msg");
    expect(element?.textContent).toBe("");
  });

  test("first name, last name and date created cells' textContent rendered correctly", () => {
    const elements = document.getElementsByTagName("td");
    expect(elements[0].textContent).toBe("Juli");
    expect(elements[1].textContent).toBe("Gart");
    expect(elements[2].textContent).toBe("2022-10-12T10:58:36.016Z");
    expect(elements[5].textContent).toBe("ekisz");
    expect(elements[6].textContent).toBe("ekisz");
    expect(elements[7].textContent).toBe("2022-11-07T17:19:56.607Z");
    expect(elements[10].textContent).toBe("qq");
    expect(elements[11].textContent).toBe("dd");
    expect(elements[12].textContent).toBe("2022-12-03T18:47:58.661Z");
    expect(elements[15].textContent).toBe("Gyula");
    expect(elements[16].textContent).toBe("Kuga");
    expect(elements[17].textContent).toBe("2022-12-05T11:08:29.780Z");
    expect(elements[20].textContent).toBe("Holy");
    expect(elements[21].textContent).toBe("Shat");
    expect(elements[22].textContent).toBe("2022-09-28T08:07:06.612Z");
  });

  test("locked user's textContent rendered line-through", () => {
    const elements = document.getElementsByTagName("td");
    expect(elements[20]).toHaveStyle("textDecoration: line-through");
    expect(elements[21]).toHaveStyle("textDecoration: line-through");
    expect(elements[22]).toHaveStyle("textDecoration: line-through");
  });
});
