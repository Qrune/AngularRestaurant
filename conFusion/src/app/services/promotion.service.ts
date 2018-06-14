import { Injectable } from '@angular/core';
import {PROMOTIONS} from "../shared/promotions";
import {Promotion} from "../shared/promotion";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
@Injectable()
export class PromotionService {

  constructor() { }
  getPromotions():Observable<Promotion[]>{
    return Observable.of(PROMOTIONS).delay(1000);
  }
  getPromotion(id: number):Observable<Promotion>{
    return Observable.of(PROMOTIONS.filter((promo => (promo => (promo.id === id))))[0]).delay(1000);
  }
  getFeaturedPromotion():Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter(promo => promo.featured)[0]).delay(1000);
  }

}
