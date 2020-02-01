import { SellingListService } from './selling-list/selling-list.service';
import { Kicks } from './kicks';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class KicksService {
  kicksChanged = new Subject<Kicks[]>();

  private kicks: Kicks[] = [
    new Kicks('Jordan', '500$','11',
      'https://cms-cdn.thesolesupplier.co.uk/2017/06/Jordan-11-Low-Barons-Black-03.png',
      )
  ];

  constructor(private slService: SellingListService) {}

  getKicks() {
    return this.kicks.slice();
  }

  getKick(index: number) {
    return this.kicks[index];
  }


  addKick(kicks: Kicks) {
    this.kicks.push(kicks);
    this.kicksChanged.next(this.kicks.slice());
  }

  updateKick(index: number, newKick: Kicks) {
    this.kicks[index] = newKick;
    this.kicksChanged.next(this.kicks.slice());
  }

  deleteKick(index: number) {
    this.kicks.splice(index, 1);
    this.kicksChanged.next(this.kicks.slice());
  }

}