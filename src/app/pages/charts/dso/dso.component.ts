import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'ngx-dso',
  templateUrl: './dso.component.html',
  styleUrls: ['./dso.component.scss']
})
export class DSOComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  scales: {
    yAxes: [{
      id: 'y-axis-0',
          position: 'left',
    },
    {
      id: 'y-axis-1',
          position: 'right',
}
    ]
  }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(0, 136, 207, 0.9)',
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
    {
      borderColor: 'rgba(54, 162, 235, 0.5)',
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
    {
      borderColor: 'rgba(193, 37, 83, 0.8)',
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
    {
      backgroundColor: 'rgba(219, 228, 235, 0.8)',
      borderColor: 'rgba(219, 228, 235, 0.8)',
      borderWidth: 1
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  public chartClicked(e: any): void {
    console.log(e);
}
public chartHovered(e: any): void {
    console.log(e);
}
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`http://localhost:8080/facture/DSO`).subscribe(data=> {
      this.lineChartLabels = data.map(item=>item.mois);
     this.lineChartData =  [
        { data: data.map(item=>item.dso) , label: 'DSO'},
        { data: data.map(item=>item.dso_contractuel) , label: 'DSO contractuel'},
        { data: data.map(item=>item.dso_retard) , label: 'DSO retard'},
        { data: data.map(item=>item.tauxR) , label: 'Taux de retard', type: 'bar', yAxisID:'y-axis-1'}
        
      ];

      
    });
  }

}
