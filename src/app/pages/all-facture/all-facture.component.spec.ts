import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFactureComponent } from './all-facture.component';

describe('AllFactureComponent', () => {
  let component: AllFactureComponent;
  let fixture: ComponentFixture<AllFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
