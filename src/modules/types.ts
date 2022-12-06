enum Status {
  Active = "active",
  Locked = "locked",
}

type User = {
  id?: number;
  first_name?: string | string[];
  last_name?: string | string[];
  status?: Status | string[] | string;
  created_at?: string;
  updated_at?: string;
  url?: string;
};

export { Status, User };
