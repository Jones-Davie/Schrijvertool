import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../menuitemservice/menuitem.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private menuService : MenuitemService) { }

  ngOnInit( ) {
  }

  ngAfterViewInit() {
    this.getOverzicht()
  }

  private activeItem;
  private sidebarEntry;

  getOverzicht() {
    if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Overzicht")
      this.activeItem.className = "active"
  }

  getKarakters() {
   
      if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Karakters")
      this.activeItem.className = "active"
      
}

getWezens() {
   

    if (this.activeItem != null) {
    this.activeItem.className="inactive"
    }

    this.activeItem = document.getElementById("Wezens")
    this.activeItem.className = "active"
}

setInactive () {
  document.getElementById
}


}
