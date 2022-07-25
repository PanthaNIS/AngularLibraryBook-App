import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DashBoardComponent} from './dashboard.component';
import {ListComponent} from './list.component';
import {AddComponent} from './add.component';
import {UpdateComponent} from './update.component';
import {BadURLComponent} from './badurl.component';
import {BookService} from './book.service';
import {FormsModule} from '@angular/forms';
import { GuideComponent } from './guide.component';



const myRoutes : Routes =
[
  {path: 'add', component: AddComponent},
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'list', component: ListComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'guide', component: GuideComponent},
  {path:'', redirectTo:"/home", pathMatch: 'full'},
  {path:'**', component:BadURLComponent},
  


]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DashBoardComponent,
    ListComponent,
    UpdateComponent,
    BadURLComponent,
    GuideComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
