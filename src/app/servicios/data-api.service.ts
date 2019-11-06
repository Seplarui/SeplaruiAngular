import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getRepos() {

    const urlApi = 'https://api.github.com/users/seplarui/repos?per_page=130';
    return this.http.get(urlApi);

  }
  getCommits(repo: any) {
    const urlApi = `https://api.github.com/repos/seplarui/${repo}/commits`;
    return this.http.get(urlApi);
  }
}
