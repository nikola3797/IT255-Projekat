import { SellingListService } from './selling-list.service';
import { Model } from './../model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-selling-list',
  templateUrl: './selling-list.component.html',
  styleUrls: ['./selling-list.component.css']
})
export class SellingListComponent implements OnInit, OnDestroy {
  models: Model[];
  private subscription: Subscription;

  constructor(private slService: SellingListService) { }

  ngOnInit() {
    this.models = this.slService.getModels();
    this.subscription = this.slService.ModelsChanged.subscribe(
      (models: Model[]) => {
        this.models = models;
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
