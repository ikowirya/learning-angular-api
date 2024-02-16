import { Injectable } from "@angular/core";
import { User, UserForm } from "./auth";
import { Router } from "@angular/router";

const users: Array<User> = [
  { username: "ikowirya", password: "123abc", name: "Iko Wirya" },
  { username: "batman", password: "123", name: "Batman" },
];

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User | undefined;

  constructor(private router: Router) {}

  login(form: UserForm) {
    const response = users.find((user) => this.matchUser(user, form));
    if (!response) {
      alert("User is not found");
    } else {
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(["anime/list"]);
    }
  }

  getAuth(): User | undefined {
    const response = localStorage.getItem('user');
    if(!response) {
      return undefined ;
    }else {
      return JSON.parse(response);
    }
  }

  matchUser(user: User, form: UserForm): boolean {
    return user.username === form.username && user.password === form.password;
  }
}
