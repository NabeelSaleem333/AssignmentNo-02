import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListItemServiceService {

    books=['Programming Fundamentals','Object Oriented Programming','Java','.net','C++'];
    route=['home//home.page.html','https://www.google.com'];
  constructor() { }
 getAllBooks(){
    return this.books;
  }
  getRoute(){
    return this.route;
  }
}
