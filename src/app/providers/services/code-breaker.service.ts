import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakerService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  verifyNumber(number: string): Observable<any> {
    const url = `${this.baseUrl}?number=${number}`;
    return this.http.get<any>(url);
  }
  restartGame(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post<any>(url, null);
  }
}
