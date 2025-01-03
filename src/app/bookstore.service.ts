import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
 // url: string = '/api/dev/DynamoDBManager'; // Dev
  url: string = 'https://9xubn9m5tf.execute-api.ap-south-1.amazonaws.com/dev/DynamoDBManager'; // Prod.

  headers:any = { 
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
   }

  constructor(private http: HttpClient) { 
    if (isDevMode()) {
      this.url = '/api/dev/DynamoDBManager'
      console.log('Running in development mode');
    } else {
      this.url = 'https://9xubn9m5tf.execute-api.ap-south-1.amazonaws.com/dev/DynamoDBManager'
      console.log('Running in production mode');
    }
  }

  /**
   * 
   * @returns GET ALL BOOKS
   */
  getAllBooks() {
    return this.http.post(
      this.url,
      JSON.stringify({ "operation": "scan", "payload": {} }),
      {
        headers: this.headers
      }
    )
  }

  /**
   * 
   * @returns GET A SINGLE BOOK
   */
  getASingleBook(bookId: string) {
    return this.http.post(
      this.url,
      JSON.stringify({"operation": "read", "payload": {"Key": {"id": bookId}}}),
      {
        headers: this.headers
      }
    )
  }

  /**
   * 
   * @returns POST A BOOKS
   */
  postAllBooks(book: any) {
    return this.http.post(
      this.url,
      JSON.stringify({"operation": "create", "payload": {"Item": book}}),
      {
        headers: this.headers
      }
    )
  }

  /**
   * 
   * @returns UPDATE A BOOKS
   */
  updateBookDetails(book: any) {
    return this.http.post(
      this.url,
      JSON.stringify({
        "operation": "update",
        "payload": {
            "Key": {
                "id": book.id
            },
            "UpdateExpression": "SET #ttle = :newTtle, #athr = :newAthr",
            "ExpressionAttributeNames": {
                "#ttle": "title",
                "#athr": "author"
            },
            "ExpressionAttributeValues": {
                ":newTtle": book.title,
                ":newAthr": book.author
            }
        }
    }),
      {
        headers: this.headers
      }
    )
  }


  /**
   * 
   * @returns Delete A BOOKS
   */
  deleteSelectedBook(bookId: string) {
    return this.http.post(
      this.url,
      JSON.stringify({"operation": "delete", "payload": {"Key": {"id": bookId}}}),
      {
        headers: this.headers
      }
    )
  }
}
