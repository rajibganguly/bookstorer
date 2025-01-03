import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { CommonModule } from '@angular/common';
import { Book } from '../model/bookStore.interface';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-allbook-dashboard',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './allbook-dashboard.component.html',
  styleUrl: './allbook-dashboard.component.scss'
})
export class AllbookDashboardComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookstoreService, private router: Router) {

  }

  ngOnInit() {
    this.loadCurrentBooks()
  }

  /**
   * 
   * @param bookId EDIT books function
   */

  getBookDetail(bookId: string) {
    this.router.navigate(['/book', bookId])

  }


  /**
   * 
   * @param bookId DELETE book function
   */
  deleteBook(book: any) {
    const message = `Want to delete Title: ${book.title}?`
    if (window.confirm(message)) {
      this.bookService.deleteSelectedBook(book.id).subscribe((data) => {
        //window.location.href = '/book';
        this.router.navigate(['/book']);
        this.loadCurrentBooks();
      })
      
      
    }
  }


  /**
   * 
   * @param LOAD books
   */
  private loadCurrentBooks() {
    this.bookService.getAllBooks().subscribe((data: any) => {
      if (data?.body?.Items) {
        this.books = data?.body?.Items;
        sessionStorage.setItem('book', data?.body?.ScannedCount)
      }
    })
  }

}


