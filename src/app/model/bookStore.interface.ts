export interface Book {
    id: string;
    title: string;
    author: string;
    // Add other properties as needed
  }
  
  export interface DynamoDBResponse {
    Items: Book[];
  }