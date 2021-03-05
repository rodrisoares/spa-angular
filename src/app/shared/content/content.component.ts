import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  text1 = "Sedans";
  text2 = "SUVs";
  text3 = "Pick-Ups";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goToSedans();
  }
  goToSedans(){
    this.router.navigate(['sedans'])
  }

  goToSuvs(){
    this.router.navigate(['suvs'])
  }

  goToPickups(){
    this.router.navigate(['pickups'])
  }
}
