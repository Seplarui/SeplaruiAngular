import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getRepos() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const urlApi = 'https://api.github.com/users/seplarui/repos';
    return this.http.get(urlApi, { headers, responseType: 'text' });
  }
}
