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

      console.log('Language: ', navigator.language);

      const acceptableLanguages = ['es', 'es-419', 'es-ES'];
      const lang = acceptableLanguages.includes(navigator.language) ? navigator.language : 'en';
      const langTwoChars = lang.substring(0, 2); // 'es'

      this.http.get(`assets/translations/${langTwoChars}.json`).subscribe(data => {
        this.data = data;
        resolve(true);
      });

    })
  }

  public getTranslate(word: string) {
    return this.data[word];
  }
}
