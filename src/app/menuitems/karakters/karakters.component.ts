import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../../menuitemservice/menuitem.service';

@Component({
  selector: 'app-karakters',
  templateUrl: './karakters.component.html',
  styleUrls: ['./karakters.component.scss']
})
export class KaraktersComponent implements OnInit {

  constructor(private menuService : MenuitemService) { }

  ngOnInit( ) { this.getKarakters()
  }

  ngAfterViewInit() {
    this.setActive()
  }
  




  Karakterlijst
  private activeItem
  private activeKarakter = 0
  private karakterNameVar = "test"
  editMode = false
  viewMode = true

  //haal de karakters op uit het karakterbestand
  getKarakters() {
  
    this.menuService.getKarakters()
      .subscribe( menuItems => this.Karakterlijst = menuItems)    
  }

    //zet het eerste karakter in de lijst die standaard geladen wordt als het actieve item
  setActive() {
    this.activeItem = document.getElementById("Karakter0")
    this.activeItem.className = "active"
  }

  //kijk welk karakter nu actief is en geef deze weer in de html
  getKarakter(selectedKarakter) {
    this.activeKarakter = selectedKarakter


    if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Karakter" + selectedKarakter)
      this.activeItem.className = "active"
      console.log(selectedKarakter)
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
