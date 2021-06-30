import { Component } from '@angular/core';

/**
 * Composant principal. Représente la "page"
 * dans laquelle les composants seront affichés
 * en fonction du routage.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * titre de l'application
   */
  title = 'meteo';
}
