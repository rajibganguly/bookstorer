import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UuidService } from '../uuidService'; 
import { Book } from '../model/bookStore.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {
  booksCountAvailable = sessionStorage.getItem('book')
  shortUUID: string = "";
  addBookForm: FormGroup;
  constructor(private bookService: BookstoreService, private fb: FormBuilder, private router: Router, private uuidService: UuidService) {
    this.addBookForm = this.fb.group({
      id: '0',
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.shortUUID = this.uuidService.generateShortUUID();
    console.log(this.shortUUID);
    
  }

  addBookNow() {
    let newBook: any
    //let ids = Number(this.booksCountAvailable) + 1
    if (this.addBookForm.valid) {
      newBook = {
        id:  this.shortUUID,
        title: this.addBookForm.value.title,
        author: this.addBookForm.value.author
      }
    } else {
      console.log('Form is invalid');
    }
    console.log('New Book:', newBook);
    this.bookService.postAllBooks(newBook).subscribe((data: any) => {
      this.router.navigate(['/book']);
    })

  }

}



