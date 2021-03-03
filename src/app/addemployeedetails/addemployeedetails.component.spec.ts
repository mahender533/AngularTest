import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeedetailsComponent } from './addemployeedetails.component';

describe('AddemployeedetailsComponent', () => {
  let component: AddemployeedetailsComponent;
  let fixture: ComponentFixture<AddemployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
