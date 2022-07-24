// Update Book Information

import { Component } from '@angular/core';
import {BookService, Book} from './book.service';

@Component({
      template: `
				<h3> Update Book Information</h3>
				
				<form>
				<p>Book ISBN: {{currentID}}</p>
				<label for="bName"> Title: </label><br>
				<input type = "text" id= "bName" name="bName" [(ngModel)]=currentName />
				<br>
				<label for="bAuthor"> Author: </label><br>
				<input type = "text" id= "bAuthor" name="bAuthor" [(ngModel)]=currentAuthor />
				<br>
				<label for="bPublisher"> Publisher: </label><br>
				<input type = "text" id= "bPublisher" name="bPublisher" [(ngModel)]=currentPublisher />
				<br>
				<label for="bPublicationDate"> Publication Date: </label><br>
				<input type = "date" id= "bPublicationDateP" name="bPublicationDate" [(ngModel)]=currentPublicationDate />
				<br>
				<label for="bPage"> Number Of Pages: </label><br>
				<input type = "text" id= "bPage" name="bPage" [(ngModel)]=currentPage />
				<br>
				<label for="bAvailability"> Availability: </label><br>
				<select id="availability" [(ngModel)]=currentAvailability>
            	<option value=""></option>
            	<option value="Paperback">Paperback</option>
            	<option value="eBook">eBook</option>
            	<option value="Audiobook">Audiobook</option>
        		</select>
				
				<br>
				<label for="bEdition"> Edition Number: </label><br>
				<input type = "text" id= "bEdition" name="bEdition" [(ngModel)]=currentEditionNumber />
				<br><br>
				<button (click) ="doPrev()">Prev</button>
				<button (click) ="doNext()">Next</button>
				<button (click) ="doSave()">Save</button>
				<button (click) ="doDelete()">Delete</button>
				<br><br>
				<button routerLink ="/">Homepage </button>
				<button (click)="doHelp()">Help</button>

				<p style = "color:red;">{{message}}</p>
				</form>`,
			 styleUrls:['./add.component.css']
              
          
	})
 export class UpdateComponent{
 	data: Book[];
 	position: number= -1;
 	currentID: number=0;
 	currentName:string="";
 	currentAuthor:string="";
 	currentPublisher:string="";
 	currentPublicationDate:string="";
 	currentPage:string="";
 	currentAvailability:string="";
 	currentEditionNumber:string="";
 	message:string="";
 	constructor (private books:BookService){
 		this.data = this.books.getList();
 		if(this.data.length == 0){
 			this.position =-1;
 			this.currentID = 0;
 			this.currentName ="";
 			this.currentAuthor="";
 			this.currentPublisher="";
 			this.currentPublicationDate="";
 			this.currentPage="";
 			this.currentAvailability="";
 			this.currentEditionNumber="";
 			this.message ="The book list is empty";
 		}
 		else
 		{
 			this.position =0;
 			this.currentID = this.data[0].ID;
 			this.currentName = this.data[0].name;
 			this.currentAuthor=this.data[0].author;
 			this.currentPublisher=this.data[0].publisher;
 			this.currentPublicationDate=this.data[0].publicationDate;
 			this.currentPage=this.data[0].pages;
 			this.currentAvailability=this.data[0].availability;
 			this.currentEditionNumber=this.data[0].edition;

 		}

 	}
 	doPrev(){
 		if(this.position<=0)
 		{
 			this.message = "There is no previous Book in the list";
 		}
 		else
 		{
 			this.message="";
 			this.position--;
 			this.currentID = this.data[this.position].ID;
 			this.currentName = this.data[this.position].name;
 			this.currentAuthor=this.data[this.position].author;
 			this.currentPublisher=this.data[this.position].publisher;
 			this.currentPublicationDate=this.data[this.position].publicationDate;
 			this.currentPage=this.data[this.position].pages;
 			this.currentAvailability=this.data[this.position].availability;
 			this.currentEditionNumber=this.data[this.position].edition;
 		}

 	}
 	doNext(){

          if(this.position== this.data.length-1){
          	this.message = "There is no next Book in the list";
          } 
          else
          {
          	this.message="";
 		this.position++;
 		this.currentID = this.data[this.position].ID;
 		this.currentName = this.data[this.position].name;
 		this.currentAuthor=this.data[this.position].author;
 		this.currentPublisher=this.data[this.position].publisher;
 		this.currentPublicationDate=this.data[this.position].publicationDate;
 		this.currentPage=this.data[this.position].pages;
 		this.currentAvailability=this.data[this.position].availability;
 		this.currentEditionNumber=this.data[this.position].edition;
          }

 	}
 	doSave()
 	{
 		if(this.position<0){
 			this.message = "There is no any data in the list to save in the list";
 		}
		 else{
 		this.data[this.position].name = this.currentName;
 		this.data[this.position].author = this.currentAuthor;
 		this.data[this.position].publisher = this.currentPublisher;
 		this.data[this.position].publicationDate = this.currentPublicationDate;
 		this.data[this.position].pages = this.currentPage;
 		this.data[this.position].availability = this.currentAvailability;
 		this.data[this.position].edition = this.currentEditionNumber;
		 this.message = "Data updated successfully";
		 }
 	}
 	doDelete()
 	{
 		this.data.splice(this.position,1);
 		if(this.position == this. data.length){
 			this.position--;
 			this.message="The book form the list has been deleted";
 		}
 		if(this.data.length==0){
 			this.currentID=0;
 			this.currentName="";
 			this.currentAuthor="";
 			this.currentPublisher="";
 			this.currentPublicationDate="";
 			this.currentPage="";
 			this.currentAvailability="";
 			this.currentEditionNumber="";

 			this.message ="There are no other list in the database";
 		}
 		else{
 		this.message="";
 		this.currentID = this.data[this.position].ID;
 		this.currentName = this.data[this.position].name;
 		this.currentAuthor=this.data[this.position].author;
 		this.currentPublisher=this.data[this.position].publisher;
 		this.currentPublicationDate=this.data[this.position].publicationDate;
 		this.currentPage=this.data[this.position].pages;
 		this.currentAvailability=this.data[this.position].availability;
 		this.currentEditionNumber=this.data[this.position].edition;


 		}

 	}
 	doHelp(){
 		this.message="Press Prev and Next to traverse the database. To edit the database make change and press save button. And to delete the database press Delete";


 	}

 }