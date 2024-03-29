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
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AboutComponent } from './Dashboadrd/about/about.component';
import { DisclaimerComponent } from './Dashboadrd/disclaimer/disclaimer.component';
import { DMCAComponent } from './Dashboadrd/dmca/dmca.component';
import { ContactComponent } from './Dashboadrd/contact/contact.component';


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
    AboutComponent,
    DisclaimerComponent,
    DMCAComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
