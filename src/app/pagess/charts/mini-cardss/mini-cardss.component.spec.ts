import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardssComponent } from './mini-cardss.component';

describe('MiniCardComponent', () => {
  let component: MiniCardssComponent;
  let fixture: ComponentFixture<MiniCardssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCardssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCardssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
