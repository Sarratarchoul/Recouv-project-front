import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionRetardsChartComponent } from './evolution-retards-chart.component';

describe('EvolutionRetardsChartComponent', () => {
  let component: EvolutionRetardsChartComponent;
  let fixture: ComponentFixture<EvolutionRetardsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionRetardsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionRetardsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
