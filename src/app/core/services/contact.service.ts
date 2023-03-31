import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contact } from '@core/models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _http = inject(HttpClient);

  create(guest: Contact): Observable<Contact> {
    return this._http.post<Contact>(
      'http://localhost:3002/contacto/create',
      guest
    );
  }
}
