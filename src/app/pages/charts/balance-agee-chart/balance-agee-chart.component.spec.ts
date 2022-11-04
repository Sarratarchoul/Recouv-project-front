import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceAgeeChartComponent } from './balance-agee-chart.component';

describe('BalanceAgeeChartComponent', () => {
  let component: BalanceAgeeChartComponent;
  let fixture: ComponentFixture<BalanceAgeeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceAgeeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceAgeeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
