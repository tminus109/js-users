enum Status {
  Active = "active",
  Locked = "locked",
}

type User = {
  id?: number;
  first_name: string;
  last_name: string;
  status: Status;
  created_at?: string;
  updated_at?: string;
  url?: string;
};

export { Status, User };
