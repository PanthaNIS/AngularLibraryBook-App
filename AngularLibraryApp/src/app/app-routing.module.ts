import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dashboard.component';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { UpdateComponent } from './update.component';
import { BadURLComponent } from './badurl.component';
import { GuideComponent } from './guide.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'list', component: ListComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'guide', component: GuideComponent},
  {path:'', redirectTo:"/dashboard", pathMatch: 'full'},
  {path:'**', component:BadURLComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
