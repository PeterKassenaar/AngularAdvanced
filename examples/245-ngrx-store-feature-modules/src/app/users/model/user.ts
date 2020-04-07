export interface User {
  name: Name;
  login: Login;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
export interface Login {
  username: string;
}

