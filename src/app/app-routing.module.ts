import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickupsComponent } from './components/pickups/pickups.component';
import { SedansComponent } from './components/sedans/sedans.component';
import { SuvsComponent } from './components/suvs/suvs.component';


const routes: Routes = [
  

  {
    path: 'sedans',
    component: SedansComponent
  },
  {
    path:'suvs',
    component: SuvsComponent
  },
  {
    path:'pickups',
    component:PickupsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
