import { Component, OnInit } from '@angular/core';
import { Covid19Service} from '../covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  data:[];
  displayedColumns  :  string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered', 'active','critical', 'casesPerOneMillion','deathsPerMillion','tests','testsPerOneMillion']
  constructor(private covid19Service:Covid19Service) {

   }

  ngOnInit() {

    this.covid19Service.getCovid19Status().subscribe((data)=>{
      console.log(data);
      this.data = data
    });
  }
}
