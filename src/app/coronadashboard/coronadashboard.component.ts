import { Component, OnInit } from '@angular/core';
import { CoronadashboardService } from './coronadashboard.service';

@Component({
  selector: 'app-coronadashboard',
  templateUrl: './coronadashboard.component.html',
  styleUrls: ['./coronadashboard.component.scss']
})
export class CoronadashboardComponent implements OnInit {

  covidData: any;
  totalConfirmedIndian: number;
  totalConfirmedForeign:number;
  cured: number;
  totaldeaths: number;
  title = 'Overall Corona Statistics in India';
   type = 'PieChart';
   piedata = [];
   columnNames = ['Statistics', 'Percentage'];
   options = {    
   };
   width = 550;
   height = 400;

   baritle = 'Corona Statistics in India statewise';
   bartype = 'ColumnChart';
   bardata = [];
 barcolumnNames = ['Indian States', 'Total Confirmed Cases in States','Total Confirmed Cases of Foreign Nationals in States'];
 baroptions = {   
    hAxis: {
       title: 'Indian States'
    },
    vAxis:{
       minValue:0
    }  
 };
 
 barwidth = 850;
 barheight = 400;

   filter: string;
   sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private api: CoronadashboardService) {

    this.totalConfirmedIndian=0;
    this.totalConfirmedForeign =0;
    this.cured =0;
    this.totaldeaths =0;
    
   }

  ngOnInit() {
    
    /*
    this.covidData= [
      {
          "stateName": "Andhra Pradesh",
          "totalConfirmedCasesIndian": 2,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Chattisgarh",
          "totalConfirmedCasesIndian": 1,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Delhi",
          "totalConfirmedCasesIndian": 11,
          "totalConfirmedCasesForeign": 1,
          "cured": 3,
          "deaths": 1
      },
      {
          "stateName": "Haryana",
          "totalConfirmedCasesIndian": 3,
          "totalConfirmedCasesForeign": 14,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Karnataka",
          "totalConfirmedCasesIndian": 14,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 1
      },
      {
          "stateName": "Kerala",
          "totalConfirmedCasesIndian": 25,
          "totalConfirmedCasesForeign": 2,
          "cured": 3,
          "deaths": 0
      },
      {
          "stateName": "Maharashtra",
          "totalConfirmedCasesIndian": 44,
          "totalConfirmedCasesForeign": 3,
          "cured": 0,
          "deaths": 1
      },
      {
          "stateName": "Odisha",
          "totalConfirmedCasesIndian": 1,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Pondicherry",
          "totalConfirmedCasesIndian": 1,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Punjab",
          "totalConfirmedCasesIndian": 2,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 1
      },
      {
          "stateName": "Rajasthan",
          "totalConfirmedCasesIndian": 5,
          "totalConfirmedCasesForeign": 2,
          "cured": 3,
          "deaths": 0
      },
      {
          "stateName": "Tamil Nadu",
          "totalConfirmedCasesIndian": 2,
          "totalConfirmedCasesForeign": 0,
          "cured": 1,
          "deaths": 0
      },
      {
          "stateName": "Telengana",
          "totalConfirmedCasesIndian": 4,
          "totalConfirmedCasesForeign": 2,
          "cured": 1,
          "deaths": 0
      },
      {
          "stateName": "Union Territory of Chandigarh",
          "totalConfirmedCasesIndian": 1,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Union Territory of Jammu and Kashmir",
          "totalConfirmedCasesIndian": 4,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Union Territory of Ladakh",
          "totalConfirmedCasesIndian": 8,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "Uttar Pradesh",
          "totalConfirmedCasesIndian": 18,
          "totalConfirmedCasesForeign": 1,
          "cured": 9,
          "deaths": 0
      },
      {
          "stateName": "Uttarakhand",
          "totalConfirmedCasesIndian": 1,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      },
      {
          "stateName": "West Bengal",
          "totalConfirmedCasesIndian": 1,
          "totalConfirmedCasesForeign": 0,
          "cured": 0,
          "deaths": 0
      }
  ]
  */
  this.getSmartphones();

  
  console.log("bar data ", this.bardata);

 
}

getSmartphones() {
    this.api.getCorornaData()
      .subscribe(data => {
        this.covidData=data;
        console.log("Welcome ", data);
        this.covidData.forEach(element => {
            let temparr =[];
            temparr.push(element.stateName, element.totalConfirmedCasesIndian, element.totalConfirmedCasesForeign);
            this.bardata.push(temparr)  ;
            this.totalConfirmedIndian +=element.totalConfirmedCasesIndian;
            this.totalConfirmedForeign +=element.totalConfirmedCasesForeign;
            this.cured +=element.cured;
            this.totaldeaths +=element.deaths;
            console.log(element);
          }); 
        
          this.piedata = [
            ['Total Confirmed Cases In Indian',this.totalConfirmedIndian],
            ['Total Confirmed Cases Foreign National', this.totalConfirmedForeign],
            ['Total cured', this.cured],
            ['Total Deaths', this.totaldeaths]
           
         ];
        
      });
      
  }


}
