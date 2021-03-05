import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedansComponent } from './sedans/sedans.component';
import { SuvsComponent } from './suvs/suvs.component';
import { PickupsComponent } from './pickups/pickups.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [SedansComponent, SuvsComponent, PickupsComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[SedansComponent, SuvsComponent, PickupsComponent]
})
export class ComponentsModule { }
