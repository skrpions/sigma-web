import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private data: any;

  constructor(private http: HttpClient) { }

  public getData() {
    return new Promise((resolve) => {

      if (navigator.language === 'es' || navigator.language === 'es-419' || navigator.language === 'es-ES') {

        // navigator.language obtiene el idioma del navegador para colocar los textos de acuerdo a las traducciones creadas
        this.http.get('assets/translations/'+ 'es' +'.json').subscribe(data => {
          this.data = data;
          resolve(true);
        })
      }
      else {

        // navigator.language obtiene el idioma del navegador para colocar los textos de acuerdo a las traducciones creadas
        this.http.get('assets/translations/'+ 'en' +'.json').subscribe(data => {
          this.data = data;
          resolve(true);
        })
      }

    })
  }

  public getTranslate(word: string) {
    return this.data[word];
  }
}
