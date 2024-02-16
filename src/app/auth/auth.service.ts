import { Injectable } from "@angular/core";
import { User, UserForm } from "./auth";

const users: Array<User> = [
  { username: "ikowirya", password: "123abc", name: "Iko Wirya" },
  { username: "batman", password: "123", name: "Batman" },
];

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User | undefined;
  constructor() {}

  login(form: UserForm) {
    const response = users.find((user) => this.matchUser(user, form));
    if (!response) {
      alert("User is not found");
    } else {
      this.user = response;
      alert(`Hello, ${this.user.name} !`)
    }
  }

  matchUser(user: User, form: UserForm): boolean {
    return user.username === form.username && user.password === form.password;
  }
}
