import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/** Icone de recherche.
 *
 * Utilise la bibliothèque d'icônes FontAwesome.
 */
@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.scss']
})
export class IconSearchComponent implements OnInit {

  /**
   * Icône recherche.
   */
  public myIcon = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
