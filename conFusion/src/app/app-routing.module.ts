import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {DishdetailComponent} from "./dishdetail/dishdetail.component";
import {AboutComponent} from "./about/about.component";
const routes:Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dishdetail/:id', component: DishdetailComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
