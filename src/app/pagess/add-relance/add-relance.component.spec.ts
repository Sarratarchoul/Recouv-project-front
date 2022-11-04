import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelanceComponent } from './add-relance.component';

describe('AddRelanceComponent', () => {
  let component: AddRelanceComponent;
  let fixture: ComponentFixture<AddRelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRelanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
