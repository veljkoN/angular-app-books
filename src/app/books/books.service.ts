import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}
  
  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image:'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount:700
  
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'David Thomas',
        image:'https://m.media-amazon.com/images/I/71f743sOPoL._AC_UY327_FMwebp_QL65_.jpg',
        amount:800
  
      },
      {
        name: 'The Art of Computer Programming',
        author: 'Donald Knuth',
        image:'https://m.media-amazon.com/images/I/410vJZbAZGS._SY393_BO1,204,203,200_.jpg',
        amount:900
  
      },
      {
        name: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        image:'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg',
        amount:500
  
      }
    ]
  }
  
}


