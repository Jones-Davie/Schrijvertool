import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../../menuitemservice/menuitem.service';

@Component({
  selector: 'app-wezens',
  templateUrl: './wezens.component.html',
  styleUrls: ['./wezens.component.scss']
})
export class WezensComponent implements OnInit {

  constructor(private menuService : MenuitemService) { }

  ngOnInit( ) { this.getWezens()
  }

  ngAfterViewInit() {
    this.setActive()
  }
  
  
  Wezenlijst
  private clicked = false
  private activeItem
  private activeWezen = "0"
  private wezenNameVar = "test"
  private editMode = false
  private viewMode = true

  //haal de wezens op uit het wezenbestand
  getWezens() {
  
    this.menuService.getWezens()
      .subscribe( menuItems => this.Wezenlijst = menuItems)
  }

      //zet het eerste karakter in de lijst die standaard geladen wordt als het actieve item
      setActive() {
        this.activeItem = document.getElementById("Wezen0")
        this.activeItem.className = "active"
      }

  //kijk welk Wezen nu actief is en geef deze weer in de html
  getWezen(selectedWezen) {
    this.activeWezen = selectedWezen


    if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Wezen" + selectedWezen)
      this.activeItem.className = "active"
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
