import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any[]> {
        return this.http.get<any[]>(`https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json`);
    }
}
