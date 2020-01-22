import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKicksComponent } from './my-kicks.component';

describe('MyKicksComponent', () => {
  let component: MyKicksComponent;
  let fixture: ComponentFixture<MyKicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyKicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
