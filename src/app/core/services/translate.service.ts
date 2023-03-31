import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private data: any; // Almacenar los datos de traducción

  constructor(private http: HttpClient) {}

  /*
    Vamos a crear un método getData() devuelve una promesa que se resolverá
    una vez que los datos de traducción se hayan cargado correctamente.
  */
  public getData() {
    console.log('Language: ', navigator.language);

    /* return new Promise((resolve) => {
      this.http.get('assets/translations/' + navigator.language + '.json').subscribe(data =>
        this.data = data);
      resolve(true);
    }) */

    return new Promise((resolve) => {
      const acceptableLanguages = ['es', 'es-419', 'es-ES'];
      const lang = acceptableLanguages.includes(navigator.language)
        ? navigator.language
        : 'en';
      const langTwoChars = lang.substring(0, 2); // 'es'

      this.http
        .get(`assets/translations/${langTwoChars}.json`)
        .subscribe((data) => {
          this.data = data;
          resolve(true);
        });
    });
  }

  /*
    Este método devuelve una traducción para una palabra específica.
    La palabra se pasa como un argumento y el método devuelve la traducción correspondiente de los
    datos de traducción almacenados en la propiedad data.
  */
  public getTranslate(word: string) {
    //console.log('word:', word);
    //console.log('data[word]:', this.data[word]);
    return this.data[word]; // Retorno la Palabra Traducida
  }
}
