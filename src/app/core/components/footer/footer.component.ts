import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

/**
 * Pied de page.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 /**
   * constructeur
   */
  constructor() { }

  /**
   * Année créée dynamiquement avec la bibliothèque dayjs.
   */
  public date = dayjs().format('YYYY');

  ngOnInit(): void {
  }

}
