import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      surname: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.userService.setUser(this.userForm.value);
      this.router.navigate(['/book'])
    } 
  }


}
