import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Dashboadrd/header/header.component';
import { MainComponent } from './Dashboadrd/main/main.component';
import { FooterComponent } from './Dashboadrd/footer/footer.component';
import { GenereComponent } from './Dashboadrd/genere/genere.component';
import { MovieComponent } from './Dashboadrd/movie/movie.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GenerateComponent } from './Download/generate/generate.component';
import { DownloadLinkComponent } from './Download/download-link/download-link.component';
import { SearchComponent } from './Dashboadrd/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GenereComponent,
    MovieComponent,
    GenerateComponent,
    DownloadLinkComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
