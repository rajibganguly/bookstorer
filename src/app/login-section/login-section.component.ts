import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-section',
  standalone: true,
  imports: [],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.scss'
})
export class LoginSectionComponent implements OnInit {
  firstCharacter: string = "";
  lastCharacter: string = "";
  user: any;

  constructor(private userSerice: UserService) { }

  ngOnInit(): void {
    this.userSerice.getUser().subscribe((user: any) => {
      if (user && user.surname) {
        this.user = user;
        this.firstCharacter = user.name.charAt(0);
        this.lastCharacter = user.surname.charAt(0);
      } else {
        console.log('user is undefined');
      }
    });
  }
}
