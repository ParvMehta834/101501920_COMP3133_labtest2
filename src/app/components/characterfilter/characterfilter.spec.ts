import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Characterfilter } from './characterfilter';

describe('Characterfilter', () => {
  let component: Characterfilter;
  let fixture: ComponentFixture<Characterfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Characterfilter],
    }).compileComponents();

    fixture = TestBed.createComponent(Characterfilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
