import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from '../app-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [HeaderComponent, ContentComponent, FooterComponent, DialogComponent],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  exports:[HeaderComponent, ContentComponent, FooterComponent, DialogComponent]
})
export class SharedModule { }
