import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }


  getRepos() {

    const urlApi = 'https://api.github.com/users/seplarui/repos?per_page=130';
    return this.http.get(urlApi);

  }
  getCommits(repo: any) {
    if (repo != '' || repo != null) {
      const urlApi = `https://api.github.com/repos/seplarui/${repo}/commits`;

      return this.http.get(urlApi);
    }
  }
}
