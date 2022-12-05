import { Status, User } from "../modules/types";
import { handleResponse } from "../modules/fetchUsers";

const firstNameLbl = document.createElement("lable") as HTMLLabelElement;
const lastNameLbl = document.createElement("lable") as HTMLLabelElement;
const msg = document.createElement("span") as HTMLSpanElement;

beforeEach(() => {
  firstNameLbl.textContent = "";
  lastNameLbl.textContent = "";
  msg.textContent = "";
});

describe("handleResponse tests", () => {
  test("happy test - response is a user", () => {
    const response: User = {
      id: 37,
      last_name: "Homenick",
      first_name: "Peggie",
      status: Status.Active,
      created_at: "2022-01-04T16:00:47.268Z",
      updated_at: "2022-12-04T11:20:00.732Z",
    };
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
    expect(msg.textContent).toBe("User has been successfully saved.");
  });

  test("first name and last name are blank", () => {
    const response: User = {
      last_name: ["can't be blank"],
      first_name: ["can't be blank"],
      status: Status.Active,
    };
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
    expect(lastNameLbl.textContent).toBe("Last name can't be blank.");
    expect(firstNameLbl.textContent).toBe("First name can't be blank.");
  });

  test("status is invalid", () => {
    const response: User = {
      status: ["is not included in the list"],
    };
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
    expect(msg.textContent).toBe("Status is not included in the list.");
    expect(firstNameLbl.textContent).not.toBe("First name can't be blank.");
    expect(lastNameLbl.textContent).not.toBe("Last name can't be blank.");
  });

  test("first name is blank", () => {
    const response: User = {
      first_name: ["can't be blank"],
    };
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
    expect(firstNameLbl.textContent).toBe("First name can't be blank.");
  });

  test("last name is blank", () => {
    const response: User = {
      last_name: ["can't be blank"],
    };
    handleResponse(response, firstNameLbl, lastNameLbl, msg);
    expect(lastNameLbl.textContent).toBe("Last name can't be blank.");
  });
});
