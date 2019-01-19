import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../../menuitemservice/menuitem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-karakters',
  templateUrl: './karakters.component.html',
  styleUrls: ['./karakters.component.scss']
})
export class KaraktersComponent implements OnInit {

  constructor(
    private menuService : MenuitemService,
    private http:HttpClient) { }

  ngOnInit( ) { this.getKarakters()
  }

  ngAfterViewInit() {

  }
  
  Karakterlijst
  private activeItem
  private activeKarakter
  private showKarakter = false
  private editMode = false
  private viewMode = true

  //haal de karakters op uit het karakterbestand
  getKarakters(): void {
    this.menuService.getKarakters().
    subscribe(karakters1 => this.Karakterlijst = karakters1)
  }

  //kijk welk karakter nu actief is en geef deze weer in de html
  getKarakter(selectedKarakter) {
    
    this.activeKarakter = selectedKarakter

    if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Karakter" + selectedKarakter)
      this.activeItem.className = "active"
      this.showKarakter=true
  }

  //kijk of de gebruiker wil aanpassen of niet, switch tussen edit en normal mode
  switchEditMode() {

    if (this.editMode == false) {
      
      this.editMode = true
      this.viewMode = false
    }

    else {
      this.editMode = false
      this.viewMode = true
    }

  }

}
