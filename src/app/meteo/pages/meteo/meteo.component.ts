import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from 'src/app/core/services/meteo.service';

/**
 * Affichage de la météo du jour.
 */
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  /**
   * Constructeur.
   * @param {Router} router routage pour la redirection vers la
   * configuration si aucune ville n'est enregistrée dans le
   * localStorage.
   * @param {MeteoService} ms Service météo pour l'affichage de la
   * météo du jour.
   */
  constructor(private router: Router, private ms: MeteoService) { }

  /**
   * Ville recherchée.
   */
  public ville!: any;

  /**
   * Météo du jour
   */
  public current!: any;

  /**
   * Initialisation de la page.
   * Si une ville est enregistrée dans le localStorage,
   * recherche et affichage de la météo.
   * Sinon redirection vers la page de configuration.
   */
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
