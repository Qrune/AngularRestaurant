import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
const routes:Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'home', component: HomeComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
