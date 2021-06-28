import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from 'src/app/core/services/meteo.service';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  constructor(private router: Router, private ms: MeteoService) { }
  public ville!: any;
  public current!: any;

  ngOnInit(): void {
    if(!localStorage.getItem('ville')){
      this.router.navigate(['configuration']);
    }
    else {
      let tmp: any = localStorage.getItem('ville');
      this.ville = JSON.parse(tmp);
      this.ms.meteoJour(this.ville).subscribe((data) => {
        let meteo: any = data;
       this.current = meteo.current;
      });
    }
  }
}
