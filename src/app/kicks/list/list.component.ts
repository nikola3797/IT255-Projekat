import { KicksService } from './../../kicks.service';
import { Kicks } from './../../kicks';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  kicks: Kicks[];
  subscription: Subscription;

  constructor(private kicksService: KicksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.kicksService.kicksChanged
      .subscribe(
        (kicks: Kicks[]) => {
          this.kicks = kicks;
        }
      );
    this.kicks = this.kicksService.getKicks();
  }

  onNewKicks() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}