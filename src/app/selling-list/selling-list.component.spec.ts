import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingListComponent } from './selling-list.component';

describe('SellingListComponent', () => {
  let component: SellingListComponent;
  let fixture: ComponentFixture<SellingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
