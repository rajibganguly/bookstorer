import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BookstoreService } from '../bookstore.service';
import { UuidService } from '../uuidService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailComponent, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BookstoreService, UuidService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
