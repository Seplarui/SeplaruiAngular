import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { JumbotronComponent } from './componentes/jumbotron/jumbotron.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { GithubComponent } from './componentes/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    HomeComponent,
    NotFoundComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
