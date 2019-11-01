import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/data-api.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {


  constructor(private dataApi: DataApiService) { }

  private repos: any;

  ngOnInit() {
    this.getReposUser();
  }
  getReposUser() {
    // this.dataApi.getRepos().subscribe((repos) => console.log(repos));

    this.dataApi.getRepos().subscribe((repos: any) => { this.repos = repos; });


  }

}
