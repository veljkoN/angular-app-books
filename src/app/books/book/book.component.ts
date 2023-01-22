import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book = {} as Book

  constructor(private cartService:CartService) {

  }

  isInCart:boolean = false

  addToCart(){
    this.isInCart = true
    this.cartService.add(this.book)
    //this.bookEmitter.emit(this.book)
  }
  
  removeFromCart(){
    this.isInCart = false
    this.cartService.remove(this.book)
    //this.bookEmitter.emit(this.book)
  }


 

  ngOnInit(): void {
    
  }
}
