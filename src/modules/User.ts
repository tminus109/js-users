import Status from "./Status.js";

type User = {
  id?: number;
  first_name: string;
  last_name: string;
  status: Status;
  created_at?: string;
  updated_at?: string;
  url?: string;
};

export default User;
