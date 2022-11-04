import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRelanceComponent } from './all-relance.component';

describe('AllRelanceComponent', () => {
  let component: AllRelanceComponent;
  let fixture: ComponentFixture<AllRelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRelanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
