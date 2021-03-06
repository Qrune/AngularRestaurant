import { Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish'
import {DishService} from "../services/dish.service";
import {Location} from "@angular/common";
import {Params, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import{switchMap} from "rxjs/operators";
import 'rxjs/Rx';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish : Dish;
  dishIds: number[];
  prev: number;
  next: number;

  constructor(private dishservice : DishService,
              private route: ActivatedRoute,
              private location: Location) { }
  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(
      switchMap((params: Params) => this.dishservice.getDish(+params['id']))).
      subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id)});


  }
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }
  goBack(){
    this.location.back();
  }

}
