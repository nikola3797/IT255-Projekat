import { KicksService } from './../../kicks.service';
import { Kicks } from './../../kicks';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  editMode = false;
  kicksForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private kicksService: KicksService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit() {
   
    if (this.editMode) {
      this.kicksService.updateKick(this.id, this.kicksForm.value);
    } else {
      this.kicksService.addKick(this.kicksForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let kicksBrand = '';
    let kicksImageURL = '';
    let kicksModel = '';
    let kicksCena = '';
   

    if (this.editMode) {
      const kicks = this.kicksService.getKick(this.id);
      kicksBrand = kicks.brand;
      kicksImageURL = kicks.imageURL;
      kicksModel = kicks.model;
      kicksCena = kicks.cena;
      
    }
    this.kicksForm = new FormGroup({
      'brand': new FormControl(kicksBrand, Validators.required),
      'imageURL': new FormControl(kicksImageURL, Validators.required),
      'model': new FormControl(kicksModel, Validators.required),
      'cena' : new FormControl(kicksCena, Validators.required)
      
    });
  }

}
