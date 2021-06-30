import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Service pour la météo.
 *
 * Permet de trouver la liste des villes correspondant à un nom, avec coordonnées GPS du centre.
 *
 * Permet de récupérer la météo du jour, et les prévisions en fonction de coordonnées GPS.
 */
export class MeteoService {

  /**
   * url de l'API de recherche de villes.
   */
  private geoApi = environment.geoApi;

  /**
   * url de l'API de météo du jour.
   */
  private meteoApi = environment.meteoApi;

  /**
   * url des prévisions météo.
   */
  private prevApi = environment.prevApi;

  /**
   * Constructeur du service.
   * @param {HttpClient} http service http pour la connexion aux API.
   *
   */
  constructor(private http: HttpClient) { }

  /**
   * Liste des villes correspondant à la recherche.
   * @param {any} ville Ville recherchée.
   * @returns {Observable} liste des villes correspondant.
   */
  public listeVilles(ville: any) {
    console.log(ville.ville);
    //paramètres d'url
    const params = new HttpParams().set('nom', ville).set('fields', 'centre,departement');
    return this.http.get(this.geoApi, { params });
  }
  /**
   *  Recherche de la météo du jour.
   * @param {any} ville. Objet ville pour obtenir la météo du jour.
   * @returns {Observable} météo du jour.
   */
  public meteoJour(ville: any) {
    //paramètres d'url
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.meteoApi + '&lat=' + lat + '&lon=' + lng);
  }
  /**
   * Recherche des prévisions météo.
   * @param {any} ville.  Objet ville pour obtenir les prévisions météo.
   * @returns {Observable} Prévisions météo pour les jours à venir.
   */
  public previsions(ville: any) {
    //paramètres d'url
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.prevApi + '&lat=' + lat + '&lon=' + lng);
  }
}
