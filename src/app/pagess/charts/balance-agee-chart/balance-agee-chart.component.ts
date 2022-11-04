import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Balanceagee } from '../../interface/balance.interface';

@Component({
  selector: 'ngx-balance-agee-chart',
  templateUrl: './balance-agee-chart.component.html',
  styleUrls: ['./balance-agee-chart.component.scss']
})
export class BalanceAgeeChartComponent implements OnInit {

  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] =['Non échu      0-30 j      31-60 j      61-90 j      +90 j'] ;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [
    
      {
        backgroundColor: 'rgba(124, 190, 235, 0.9)',
        borderColor: 'rgba(124, 190, 235, 0.9)',
        borderWidth: 1
      },
      {
        backgroundColor: 'rgba(0, 136, 207, 0.9)',
        borderColor: 'rgba(0, 136, 207, 0.9)',
        borderWidth: 1
      },
      {
        backgroundColor: 'rgba(255, 206, 86, 0.9)',
        borderColor: 'rgba(255, 206, 86, 0.9)',
        borderWidth: 1
      },
      {
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        backgroundColor: 'rgba(255, 159, 64, 0.9)',
        borderColor: 'rgba(255, 159, 64, 0.9)',
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
    this.http.get<any[]>(`http://localhost:8080/facture/balanceagee`).subscribe(data=> {
    
     this.barChartData =  [
        { data: data.map(item=>item.echu) , label: 'Non échu'},
        { data: data.map(item=>item.nonechupremier) , label: '0-30 j'},
        { data: data.map(item=>item.nonechudeux) , label: '31-60 j'},
        { data: data.map(item=>item.nonechutrois) , label: '61-90 j'},
        { data: data.map(item=>item.nonechuquatre) , label: '+90 j'}
      ];

      
    });
    
  }  

}


