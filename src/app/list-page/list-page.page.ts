import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListItemServiceService} from './../list-item-service.service';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {

  constructor(private router: Router, private listItemServiceService: ListItemServiceService) { }
  
  books=[];
  routes=[];
   
  ngOnInit() {
    this.books=this.listItemServiceService.getAllBooks();
    this.routes=this.listItemServiceService.getRoute();
  }

}
