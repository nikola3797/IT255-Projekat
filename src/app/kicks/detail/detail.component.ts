import { KicksService } from './../../kicks.service';
import { Kicks } from './../../kicks';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  kicks: Kicks;
  id: number;

  constructor(private kicksService: KicksService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.kicks = this.kicksService.getKick(this.id);
        }
      );
  }

  onEditKicks() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteKicks() {
    this.kicksService.deleteKick(this.id);
    this.router.navigate(['/kicks']);
  }

}
