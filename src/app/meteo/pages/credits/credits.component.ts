import { Component, OnInit } from '@angular/core';

/**
 * Page des crédits.
 */
@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  /**
   * Tableau des crédits.
   */
  public credits: any[];
  /**
   * Constructeur. Liste complète des outils utilisés.
   */
  constructor() {
    this.credits = [
      {nom: 'Angular', url: 'http://angular.io'},
      {nom: 'Bootstrap', url: 'http://getbootstrap.com'},
      {nom: 'NG Bootstrap', url: 'https://ng-bootstrap.github.io/'},
      {nom: 'NG Font Awesome', url: 'https://www.npmjs.com/package/@fortawesome/angular-fontawesome'},
      {nom: 'API GEO', url: 'https://geo.api.gouv.fr/'},
      {nom: 'OpenWeatherMap', url: 'https://openweathermap.org/api'},
      {nom: 'JSON Viewer', url: 'http://jsonviewer.stack.hu/'},
    ]
  }

  ngOnInit(): void {
  }

}
