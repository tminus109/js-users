import Status from "../enums/Status";

type User = {
  id?: number;
  first_name: string;
  last_name: string;
  status?: Status;
  created_at?: number;
  updated_at?: number;
};

export default User;
