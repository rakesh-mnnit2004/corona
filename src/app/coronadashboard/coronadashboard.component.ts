import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coronadashboard',
  templateUrl: './coronadashboard.component.html',
  styleUrls: ['./coronadashboard.component.scss']
})
export class CoronadashboardComponent implements OnInit {

  covidData: any;
  constructor() { }

  ngOnInit() {

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
  
  }

}
