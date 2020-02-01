import { Model } from './../model';
import {Subject} from 'rxjs';


export class SellingListService {
  ModelsChanged = new Subject<Model[]>();
  startedEditing = new Subject<number>();

  private Models: Model[] = [

  ];

  getModels() {
    return this.Models.slice();
  }

  getModel(index: number) {
    return this.Models[index];
  }

  addModel(Model: Model) {
    this.Models.push(Model);
    this.ModelsChanged.next(this.Models.slice());
  }

  addModels(Models: Model[]) {
    this.Models.push(...Models);
    this.ModelsChanged.next(this.Models.slice());
  }

  updateModel(index: number, newModel: Model) {
    this.Models[index] = newModel;
    this.ModelsChanged.next(this.Models.slice());
  }

  deleteModel(index: number) {
    this.Models.splice(index, 1);
    this.ModelsChanged.next(this.Models.slice());
  }
}