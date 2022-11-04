import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSOComponent } from './dso.component';

describe('DSOComponent', () => {
  let component: DSOComponent;
  let fixture: ComponentFixture<DSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
