// DashBoard  of the Application

import { Component } from '@angular/core';
//import { BookService, Book} from'./book.service';

@Component({
      template: `
				<h3>Angular BookApplication </h3>
				<p> </p>

				<br>
				<button (click)="doHelp()">Help</button>
				<br>


				<br>
				<p style = "color:Red;">{{message}}</p>
				
			  `
              
          
	})
 export class DashBoardComponent{
 	message:string="";
 	doHelp(){
 		this.message="Go to Add Page to Add the book in Database";


 	}

 }