// Book Listed in the DashBoard

import { Component } from '@angular/core';
import {BookService, Book} from './book.service';

@Component({
      template: `
				<h3> Book List </h3>
				
				<table>
				   
				   <tr>
				     <th>ISBN</th>
				     <th>Title</th>
				     <th>Author</th>
				     <th>Publisher</th>
				     <th>Publication Date</th>
				     <th>No of Pages</th>
				     <th>Availability</th>
				     <th>Edition Number</th>
				   </tr>
				   <tr  *ngFor ="let bk of data">
				      <td>{{bk.ID}}</td>
				      <td>{{bk.title}}</td>
				      <td>{{bk.author}}</td>
				      <td>{{bk.publisher}}</td>
				      <td>{{bk.publicationDate}}</td>
				      <td>{{bk.pages}}</td>
				      <td>{{bk.availability}}</td>
				      <td>{{bk.edition}}</td>
				   <tr>

				</table>




			  `,
			   styleUrls: ['./add.component.css']
              
          
	})
 export class ListComponent{
 	message:string="";
 	 data: Book[];// temporary to store the information of book or temporary array to store the information of book
 	 constructor (private books: BookService){
 	 	this.data = books.getList(); // assign all the book to this list

 	}
 	
 
 }