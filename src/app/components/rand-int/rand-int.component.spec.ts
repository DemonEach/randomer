import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandIntComponent } from './rand-int.component';

describe('RandIntComponent', () => {
  let component: RandIntComponent;
  let fixture: ComponentFixture<RandIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandIntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
