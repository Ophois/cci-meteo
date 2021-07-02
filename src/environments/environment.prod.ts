/* fichier de variables d'environnement
   qui sera appelé en production.
   Les adresses des API peuvent être différentes
   de celles utilisées pendant le développement. */
export const environment = {
  production: true,
  geoApi: 'https://geo.api.gouv.fr/communes',
  meteoApi: 'https://api.openweathermap.org/data/2.5/onecall?appid=d2e33b810d399f2fb3d6791d161388ec&exclude=daily,hourly,minutely,alerts&units=metric&lang=fr',
  prevApi: 'https://api.openweathermap.org/data/2.5/onecall?appid=d2e33b810d399f2fb3d6791d161388ec&exclude=current,hourly,minutely,alerts&units=metric&lang=fr'
};
