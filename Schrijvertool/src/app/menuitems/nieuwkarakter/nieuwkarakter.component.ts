import { Component, OnInit } from '@angular/core';
import { Karaktermodel } from '../../Entryclass/Karaktermodel';
import { Karaktermodelnieuw } from '../../Entryclass/Karaktermodelnieuw'
import { MenuitemService } from '../../menuitemservice/menuitem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'q';

@Component({
  selector: 'app-nieuwkarakter',
  templateUrl: './nieuwkarakter.component.html',
  styleUrls: ['./nieuwkarakter.component.scss']
})
export class NieuwkarakterComponent implements OnInit {

  constructor(private menuService : MenuitemService,
    private http:HttpClient) { }

  ngOnInit() {
  }


  private karakterModel = new Karaktermodel ('','','','','') 
  private karakterModelnieuw



   //voeg karakter toe
   saveKarakter() {
    this.menuService.saveKarakter(this.karakterModel).subscribe()
  }

}
