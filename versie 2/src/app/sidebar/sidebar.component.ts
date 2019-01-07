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

  private activeItem;
  private sidebarEntry;

  getKarakters() {
   

    this.menuService.getKarakters()
      .subscribe( menuItems => this.sidebarEntry = menuItems)

      if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Karakters")
      this.activeItem.className = "active"

      
      console.log(this.menuService.activeMenu + "test")
      
}

getWezens() {
   

  this.menuService.getWezens()
    .subscribe( menuItems => this.sidebarEntry = menuItems)

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
