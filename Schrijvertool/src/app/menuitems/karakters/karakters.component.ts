import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../../menuitemservice/menuitem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Karaktermodel } from '../../Entryclass/Karaktermodel';
import { Karaktermodelnieuw } from '../../Entryclass/Karaktermodelnieuw'
import { delay } from 'q';

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

  Karakterlijst
  private activeItem
  private activeKarakter
  private showKarakter = false
  private editMode = false
  private viewMode = true
  private creationMode = false
  private karakterModel
  private karakterModelnieuw

  //haal de karakters op uit het karakterbestand
  getKarakters(): void {
    this.menuService.getKarakters().
    subscribe(karakters1 => this.Karakterlijst = karakters1)
  }

  //kijk welk karakter nu actief is en geef deze weer in de html
  getKarakter(selectedKarakter) {
    
    if (this.creationMode == true) {
      this.creationMode = false
      this.viewMode = true
    }

    this.activeKarakter = selectedKarakter

    if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Karakter" + selectedKarakter)
      this.activeItem.className = "active"
      this.showKarakter=true
  }

  //open formulier om karakter te maken
  switchCreationMode() {
    this.karakterModel = new Karaktermodelnieuw ('','','','','')
    this.editMode = false
    this.viewMode = false
    this.creationMode = true
    
    if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }
    
    this.activeItem = document.getElementById("nieuwKarakter")
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

    this.karakterModel = this.Karakterlijst[this.activeKarakter]
  }

  //voeg karakter toe
  async saveKarakter() {
    console.log(this.karakterModelnieuw.Naam)
    this.menuService.saveKarakter(this.karakterModelnieuw).subscribe()
    
    await delay(300) //roep delay functie aan zodat database bijgewerkt kan worden
    
    this.getKarakters()
  }

  //wacht x miliseconden om te zorgen dat de functie later uit wordt gevoerd
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
   }

  async editKarakter() {
    console.log('test edit karakter.naam: ' + this.karakterModel.Naam)
    this.editMode = false
    this.viewMode = true
    this.menuService.editKarakter(this.karakterModel).subscribe()
    
    await delay(300)

    this.getKarakters()

   }
}
