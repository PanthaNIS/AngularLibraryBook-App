// Listpage

import { Component } from '@angular/core';
import {BookService, Book} from './book.service';

@Component({
      template: `
				<h3> List Page </h3>
				<table>
				   
				   <tr>
				     <th>ISBN|</th>
				     <th>Title|</th>
				     <th>Author|</th>
				     <th>Publisher|</th>
				     <th>Publication Date|</th>
				     <th>No of Pages|</th>
				     <th>Availability|</th>
				     <th>Edition Number</th>
				   </tr>
				   <tr *ngFor ="let bk of data">
				      <td>{{bk.ID}}</td>
				      <td>{{bk.name}}</td>
				      <td>{{bk.author}}</td>
				      <td>{{bk.publisher}}</td>
				      <td>{{bk.publicationDate}}</td>
				      <td>{{bk.pages}}</td>
				      <td>{{bk.availability}}</td>
				      <td>{{bk.edition}}</td>
				   <tr>

				</table>




				<br>
				<button (click)="doHelp()">Help</button>
				<br>
		

				<br>
				<p style = "color:blue;">{{message}}</p>




			  `
              
          
	})
 export class ListComponent{
 	message:string="";
 	 data: Book[];// temporary to store the information of book or temporary array
 	 constructor (private books: BookService){
 	 	this.data = books.getList(); // assign all the book to this list

 	}
 	doHelp(){
 		this.message="Go to add  Page to add more books in Database";


 	}
 
 }