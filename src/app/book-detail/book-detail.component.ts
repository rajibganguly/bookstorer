import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UuidService } from '../uuidService';
import { Book } from '../model/bookStore.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {

  //books: Book = {id:"", title: "", author:""};
  bookId: string | null = "";
  updateBookForm: FormGroup;

  constructor(
    private bookService: BookstoreService, 
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private router: Router, 
    private uuidService: UuidService) {
    if(this.route.snapshot.paramMap.get('id')) {
      this.bookId = this.route.snapshot.paramMap.get('id');
    }

    

    this.updateBookForm = this.fb.group({
      id: '',
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Load existing book data
    this.loadBookData()

  }

  updateBookNow() {
    console.log(this.updateBookForm.value)
    this.bookService.updateBookDetails(this.updateBookForm.value).subscribe((data: any) => {
      alert('Changes done!');
      this.router.navigate(['/book']);
    })

  }

  private loadBookData(): void {
    if(this.bookId) {
      this.bookService.getASingleBook(this.bookId).subscribe((data: any) => {
        //this.books = data.Items;
        this.updateBookForm.patchValue(data.body.Item);
        console.log('The lines===', this.bookId, data.Item)
      })
    }
  }


}




