import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'ngx-status-chart',
  templateUrl: './status-chart.component.html',
  styleUrls: ['./status-chart.component.scss']
})
export class StatusChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {

    layout: {
      padding: {
        top: 20,
      },
    },
    legend: {
      position: 'bottom',
      align: 'center',
    },
    responsive: true,
    plugins: {
      labels: [
        {
          render: 'percentage',
        },
       // {
        //  render: function (data: any) {
         //   return data.value + ' APs';
         // },
       //   position: 'outside',
       // },
      ],
    },
    cutoutPercentage: 60,
  };
  pieChartColors: Color[] = [
    {
      backgroundColor: [
      'rgba(124, 190, 235, 0.9)',
      'rgba(255, 159, 65, 0.9)',
      'rgba(255, 206, 86, 0.9)',
      'rgba(75, 192, 192, 1)',
      'rgba(0, 136, 207, 0.9)'
      
    ],
      borderColor: [
        'rgba(124, 190, 235, 0.9)',
        'rgba(255, 159, 65, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 1)',
        'rgba(0, 136, 207, 0.9)'
      ],
      borderWidth: 1
    },
  ];
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartClicked(e: any): void {
    console.log(e);
}
public chartHovered(e: any): void {
    console.log(e);
}
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`http://localhost:8080/facture/Statusfacture`).subscribe(data=> {
      this.pieChartLabels = data.map(item=>item.status);
      this.pieChartData= data.map(item=>item.count)
    });
    
  }  

}
