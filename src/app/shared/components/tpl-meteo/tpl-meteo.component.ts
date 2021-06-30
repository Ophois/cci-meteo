import { Component, Input, OnInit } from '@angular/core';

/**
 * template météo (partagé entre la météo et les prévisions).
 * Permet d'afficher la météo du jour
 * ainsi que la météo de chaque jour pour les prévisions.
 */
@Component({
  selector: 'app-tpl-meteo',
  templateUrl: './tpl-meteo.component.html',
  styleUrls: ['./tpl-meteo.component.scss']
})
export class TplMeteoComponent implements OnInit {

  /**
   * Météo du jour à afficher.
   */
  @Input() meteo: any;
  constructor() { }

  ngOnInit(): void {
//    console.log(this.meteo);
  }

}
