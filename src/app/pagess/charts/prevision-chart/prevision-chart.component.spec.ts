import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisionChartComponent } from './prevision-chart.component';

describe('PrevisionChartComponent', () => {
  let component: PrevisionChartComponent;
  let fixture: ComponentFixture<PrevisionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevisionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
