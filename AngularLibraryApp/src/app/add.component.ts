// Addpage
import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { BookService, Book} from './book.service';


@Component ({
     template: `
				<h3> Add New Books </h3>
				<form>
				<label for="bID"> ISBN: </label><br>
				<input type = "text" id= "bID" name="bID" [(ngModel)]=newID />
				<br/>
				<label for="bName"> Title: </label><br>
				<input type = "text" id= "bName" name="bName" [(ngModel)]=newName />
				<br/>
				<label for="bAuthor"> Author: </label><br>
				<input type = "text" id= "bAuthor" name="bAuthor" [(ngModel)]=newAuthor />
				<br/>
				<label for="bPublisher"> Publisher: </label><br>
				<input type = "text" id= "bPublisher" name="bPublisher" [(ngModel)]=newPublisher />
				<br/>
				<label for="bPublicationDate"> Publication Date: </label><br>
				<input type = "date" id= "bPublicationDate" name="bPublicationDate" [(ngModel)]=newPublicationDate />
				<br/>
				<label for="bPage"> Number Of Pages: </label><br>
				<input type = "text" id= "bPage" name="bPage" [(ngModel)]=newPages />
				<br/>
				<label for="bAvailability"> Availability: </label><br>
				<select id="availability" [(ngModel)]=newAvailability>
            	<option value=""></option>
            	<option value="Paperback">Paperback</option>
            	<option value="eBook">eBook</option>
            	<option value="Audiobook">Audiobook</option>
        		</select><br>
				<label for="bEdition"> Edition Number: </label><br>
				<input type = "text" id= "bEdition" name="bEdition" [(ngModel)]=newEditionNumber />
				<br/><br>
				<button (click)="add()"> Add Book </button>

				<button routerLink = "/"> Home Page </button>
				<button (click)="doHelp()">Help</button>
				<p style="color:red">{{message}}</p>
				</form> `,
			  

			  styleUrls:['./add.component.css']
				
	})

 export class AddComponent{
 	newID: string ="";
 	newName: string = "";
 	newAuthor: string="";
 	newPublisher: string="";
 	newPublicationDate: string="";
 	newPages: string="";
 	newAvailability: string="";
 	newEditionNumber: string="";
 	message: string="";

 	constructor (private book:BookService){}
 

 	add(){
           let tempID : number = parseInt(this.newID);
          
          if(isNaN(tempID)){
      	this.message="please enter a number For Book ISBN and page number";
            }
           else{
      	  this.message = "";
      	  if(this.book.isPresent(tempID)){
      	  	this.message = "Book ISBN already Exists in Database";

      	 } else{
      	  let bk: Book = {ID: parseInt(this.newID), name: this.newName, author:this.newAuthor , publisher:this.newPublisher , publicationDate:this.newPublicationDate , pages:this.newPages , 
                          availability:this.newAvailability , edition:this.newEditionNumber };
 	        this.book.doAdd(bk);
 	        this.newID ="";
 	        this.newName="";
 	        this.newAuthor="";
 	        this.newPublisher="";
 	        this.newPublicationDate="";
			this.newAvailability="";
 	        this.newPages="";
 	        this.newEditionNumber="";
 	         }
 	      }
      }
      doHelp(){
 		this.message="Go to Browsr Page to edit the books in Database";


 	}


 	

   

}