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
  private commits: any;

  selectedRepo = '';
  onChange(newValue) {
    this.selectedRepo = newValue;
    this.getCommits(this.selectedRepo);
  }

  ngOnInit() {
    this.getReposUser();
    this.getCommits(this.selectedRepo);
  }
  getReposUser() {
    // this.dataApi.getRepos().subscribe((repos) => console.log(repos));
    this.dataApi.getRepos().subscribe((repos: any) => { this.repos = repos; });
  }
  getCommits(repo: string) {
    // this.dataApi.getCommits(repo).subscribe((commits: any) => console.log(commits));
    this.dataApi.getCommits(repo).subscribe((commits: any) => this.commits = commits);
  }
}
