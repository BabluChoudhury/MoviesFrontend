import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ExtraOptions } from '@angular/router';
import { MovieComponent } from './Dashboadrd/movie/movie.component';
import { MainComponent } from './Dashboadrd/main/main.component';
import { GenerateComponent } from './Download/generate/generate.component';
import { DownloadLinkComponent } from './Download/download-link/download-link.component';
import { SearchComponent } from './Dashboadrd/search/search.component';
import { AboutComponent } from './Dashboadrd/about/about.component';
import { DisclaimerComponent } from './Dashboadrd/disclaimer/disclaimer.component';
import { ContactComponent } from './Dashboadrd/contact/contact.component';
import { DMCAComponent } from './Dashboadrd/dmca/dmca.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'search',component:SearchComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'disclaimer',component:DisclaimerComponent},
  {path:'contact',component:ContactComponent},
  {path:'dmca',component:DMCAComponent},
  {path:':name',component:MovieComponent},
  {path:':name/getlink',component:GenerateComponent},
  {path:':name/getlink/download-file',component:DownloadLinkComponent},
];
const routerOption:ExtraOptions={
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
