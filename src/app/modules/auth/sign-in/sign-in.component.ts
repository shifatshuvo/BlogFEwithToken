import { Component } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  email?: string;
  pass?: string;
  
  constructor(private authService: AuthService) {
  }
  
  signInClicked(): void {
    if (!this.email || !this.pass) {
      // TODO: show waring...
      return;
    }
    this.authService.doSignIn(this.email, this.pass);
  }

}
