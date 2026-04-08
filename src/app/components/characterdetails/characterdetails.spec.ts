import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Characterdetails } from './characterdetails';

describe('Characterdetails', () => {
  let component: Characterdetails;
  let fixture: ComponentFixture<Characterdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Characterdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Characterdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
