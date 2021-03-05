import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-sedans',
  templateUrl: './sedans.component.html',
  styleUrls: ['./sedans.component.css']
})
export class SedansComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

}
