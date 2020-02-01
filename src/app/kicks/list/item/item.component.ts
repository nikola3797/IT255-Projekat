import { KicksService } from './../../../kicks.service';
import { Kicks } from './../../../kicks';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() kicks: Kicks;
  @Input() index: number;
  constructor(private kicksService: KicksService) { }

  ngOnInit() {
  }

}
