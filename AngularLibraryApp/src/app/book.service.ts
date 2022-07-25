//Book database injectable component
import {Injectable} from '@angular/core';

export interface Book{ID: number, title:string, author: string, publisher: string, publicationDate: string, pages: string, 
                         availability: string, edition:string};

@Injectable()

export class BookService{
         bkData : Book[] =[];
	getBook: any;
         
          doAdd(b: Book) {
              this.bkData[this.bkData.length]=b;// adds all the new book to the array

          }

          isExist(id:number) : boolean{ // checks the book is is already present in the array or not.
              for(let i=0; i<this.bkData.length;i++){
             if (this.bkData[i].ID==id) return true;
            
              }
             return false;
            }
         
    getList(): Book[]
    {
    return this.bkData; //return list of all books
    }
}