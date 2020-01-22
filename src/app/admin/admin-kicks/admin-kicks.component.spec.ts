import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKicksComponent } from './admin-kicks.component';

describe('AdminKicksComponent', () => {
  let component: AdminKicksComponent;
  let fixture: ComponentFixture<AdminKicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
