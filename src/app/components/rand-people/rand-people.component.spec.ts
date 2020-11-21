import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandPeopleComponent } from './rand-people.component';

describe('RandPeopleComponent', () => {
  let component: RandPeopleComponent;
  let fixture: ComponentFixture<RandPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
