import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../menuitemservice/menuitem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss']
})
export class OverzichtComponent implements OnInit {

  constructor(
    private itemService: MenuitemService,
    private http:HttpClient
  ) { }

  ngOnInit() { 
    this.getKarakters()
  }

  karakters

  getKarakters(): void {
    this.itemService.getKarakters().
    subscribe(karakters1 => this.karakters = karakters1)
  }

  testServer() {
    console.log("test: database karakters " + this.karakters)
    console.log("test: database karakters[1] " + this.karakters[1] )
    console.log("test: database karakters[1].Naam " + this.karakters[1].Naam )
  }
  
}
