import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteoService } from 'src/app/core/services/meteo.service';

/**
 * Page de configuration:
 *
 * - Affiche le formulaire pour la saisie d'une ville.
 *
 * - Affiche la liste des villes trouvées en fonction de la recherche.
 *
 * - Redirige vers la page d'accueil une fois la ville sélectionnée.
 *
 * - Communique avec le localStorage pour enregistrer/modifier
 * la recherche pour une utilisation ultérieure sans devoir reconfigurer.
 */
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  /**
   * Liste des villes retournées par l'API.
   */
  public liste!: any;

  /**
   * Ville recherchée.
   */
  public ville: any = "Montpellier";

  /**
   * Stockage temporaire du localStorage.
   */
  private lieu!: any;

  /**
   * Constructeur.
   * @param {MeteoService} ms Service de recherche météo.
   * @param {Router} router Service de routage pour la redirection.
   */
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

  /**
   * Fonction de recherche de la liste des villes correspondant
   * à la recherche.
   * @param {any} ville Ville recherchée dans le formulaire.
   */
  search(ville: any): any {
    this.ms.listeVilles(ville.ville).subscribe((data) => {
      this.liste = data;
    });
  }

  /**
   * Stockage d'une ville dans le localStorage
   * et redirection vers la page d'affichage de la météo.
   * @param {any} ville Ville à sauvegarder.
   */
  sauve(ville: any): void {
    localStorage.setItem('ville', JSON.stringify(ville));
    this.router.navigate(['meteo']);
  }

}
