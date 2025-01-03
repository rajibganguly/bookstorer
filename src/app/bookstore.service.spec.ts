import { TestBed } from '@angular/core/testing';

import { BookstoreService } from './bookstore.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookstoreService', () => {
  let service: BookstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add this line
    });
    service = TestBed.inject(BookstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
