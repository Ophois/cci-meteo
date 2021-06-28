import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private geoApi = environment.geoApi;
  private meteoApi = environment.meteoApi;
  private prevApi = environment.prevApi;

  constructor(private http: HttpClient) { }

  /* Liste des villes correspondant à la recherche */
  public listeVilles(ville: any) {
    console.log(ville.ville);
    //paramètres d'url
    const params = new HttpParams().set('nom', ville).set('fields', 'centre,departement');
    return this.http.get(this.geoApi, { params });
  }
  /* météo du jour */
  public meteoJour(ville: any) {
    //paramètres d'url
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.meteoApi + '&lat=' + lat + '&lon=' + lng);
  }
  /* prévisions météo */
  public previsions(ville: any) {
    //paramètres d'url
    let lat = ville.centre.coordinates[1];
    let lng = ville.centre.coordinates[0];
    return this.http.get(this.prevApi + '&lat=' + lat + '&lon=' + lng);
  }
}
