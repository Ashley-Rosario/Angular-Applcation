import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RateComponent } from './rate/rate.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'

  },
  {
    path:'home',
    component: HomeComponent,
    pathMatch:'full'

  },
  {
    path:'about',
    component: AboutComponent,
    pathMatch:'full'

  },
  {
    path:'rate',
    component: RateComponent,
    pathMatch:'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
