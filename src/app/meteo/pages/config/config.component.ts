import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from 'src/app/core/services/meteo.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  public liste!: any;
  public ville: any = "Montpellier";
  private lieu!: any;
  constructor(private ms: MeteoService, private router: Router) {
    //si la ville est déjà dans le localStorage
    //on la récupère et on l'injecte dans le formulaire
    if(localStorage.getItem('ville')) {
      this.lieu = localStorage.getItem('ville');
      let tmp = JSON.parse(this.lieu);
      this.ville = tmp.nom;
    }
   }

  ngOnInit(): void {
  }

  search(ville: any): any {
    this.ms.listeVilles(ville.ville).subscribe((data) => {
      this.liste = data;
    });
  }
  sauve(ville: any): void {
    localStorage.setItem('ville', JSON.stringify(ville));
    this.router.navigate(['meteo']);
  }

}
