import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'ngx-prevision-chart',
  templateUrl: './prevision-chart.component.html',
  styleUrls: ['./prevision-chart.component.scss']
})
export class PrevisionChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255, 206, 86, 0.8)',
      borderColor: 'rgba(255, 206, 86, 0.8)',
      borderWidth: 1
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ];

  barChartData: ChartDataSets[] = [];
   public chartClicked(e: any): void {
    console.log(e);
}
public chartHovered(e: any): void {
    console.log(e);
}
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`http://localhost:8080/facture/prevision`).subscribe(data=> {
      this.barChartLabels = data.map(item=>item.mois);
     this.barChartData =  [
        { data: data.map(item=>item.promesse) , label: 'dont Promesses de règlement', stack: 'a'},
        { data: data.map(item=>item.nonechu) , label: 'Prévision comportement de paiement', stack: 'a'}
      ];

      
    });
    
  }  

}