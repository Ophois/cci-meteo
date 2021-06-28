import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from 'src/app/core/services/meteo.service';

@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.component.html',
  styleUrls: ['./previsions.component.scss']
})
export class PrevisionsComponent implements OnInit {

  constructor(private router: Router, private ms: MeteoService) { }
  public ville!: any;
  public meteo!: any;
  ngOnInit(): void {
    if(!localStorage.getItem('ville')){
      this.router.navigate(['configuration']);
    }
    else {
      let tmp: any = localStorage.getItem('ville');
      this.ville = JSON.parse(tmp);
      this.ms.previsions(this.ville).subscribe((data) => {
        this.meteo = data;
        console.log(this.meteo);
      });
    }
  }

}
