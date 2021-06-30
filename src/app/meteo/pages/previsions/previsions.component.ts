import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from 'src/app/core/services/meteo.service';

/**
 * Prévisions météo.
 */
@Component({
  selector: 'app-previsions',
  templateUrl: './previsions.component.html',
  styleUrls: ['./previsions.component.scss']
})
export class PrevisionsComponent implements OnInit {

  /**
   * Constructeur.
   * @param {Router} router pour la redirection.
   * @param {MeteoService} ms service pour les prévisions météo.
   */
  constructor(private router: Router, private ms: MeteoService) { }

  /**
   * Ville recherchée.
   */
  public ville!: any;

  /**
   * Prévisions météo.
   */
  public meteo!: any;

  /**
   * Recherche des prévisions météo si une ville est enregistrée
   * dans le localStorage.
   * Sinon redirection vers la page de configuration.
   */
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
