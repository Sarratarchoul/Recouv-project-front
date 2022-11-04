import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'ngx-evolution-retards-chart',
  templateUrl: './evolution-retards-chart.component.html',
  styleUrls: ['./evolution-retards-chart.component.scss']
})
export class EvolutionRetardsChartComponent implements OnInit {

 /* public barChartOptions: ChartOptions = {
    responsive: true,
  };*/
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 159, 64, 0.8)',
      borderColor: 'rgba(255, 159, 64, 0.8)',
      borderWidth: 1
    },
    {
      backgroundColor: 'rgba(0, 136, 207, 0.9)',
      borderColor: 'rgba(0, 136, 207, 0.9)',
      borderWidth: 1
    },
    {
      backgroundColor: "rgba(255,255,255,0.5)",
      borderColor: 'rgba(255, 22, 72, 1)',
      borderWidth: 2
    }
  ];
  public barChartData: ChartDataSets[] = [];

  public chartClicked(e: any): void {
    console.log(e);
}
public chartHovered(e: any): void {
    console.log(e);
}
public barChartOptions: ChartOptions = {
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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`http://localhost:8080/facture/evolutionretard`).subscribe(data=> {
      this.barChartLabels = data.map(item=>item.mois);
     this.barChartData =  [
        { data: data.map(item=>item.ecoursT) , label: 'Encours total'},
        { data: data.map(item=>item.ecoursR) , label: 'Encours en retard'},
        { data: data.map(item=>item.tauxR) , label: 'Taux de retard', type: 'line', yAxisID:'y-axis-1'}
        
      ];

      
    });
    
  }  


}
