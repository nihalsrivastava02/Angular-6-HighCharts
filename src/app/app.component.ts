import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   highcharts = Highcharts;
   chartOptions = {   
      chart : {
      },
      title : {
         text: 'Browser Consumption'   
      },
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: true,
               alpha : 25,
               opacity : 10,
               beta : 0,
               format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
            }
         }
      },
      series : [{
         type: 'pie',
         tooltip: {
            enabled: false       
        },
         data: [
           {
              name : 'Firefox',
              myotherdata : '1462',
              y : 13,
              color : '#66e0ff',
           },
           {
              name : 'Chrome',
              myotherdata : '1064',
              y : 14,
              color : '#99ebff',
           },
            {
              name: 'Netscape',
              y: 6,
              myotherdata : '130',
              color : '#1ad1ff',
            },
            {
              name : 'Opera',
              myotherdata : '180',
              y : 8,
              color : '#1ab2ff',
            },
            {
              name : 'Uc Browser',
              myotherdata : '73',
              y : 17,
              color : '#538cc6',
            },
            {
              name : 'Tor',
              myotherdata : '32',
              y : 12,
              color : '#0099cc',
            },
            {
              name : 'Others',
              myotherData : '110',
              y : 16,
              color : '#3385ff'
            },
         ]
      }]
   };
}
