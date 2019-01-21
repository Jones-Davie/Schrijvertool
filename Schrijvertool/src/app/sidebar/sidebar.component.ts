import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../menuitemservice/menuitem.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private menuService : MenuitemService, route: ActivatedRoute) {   
   
  }


  ngOnInit( ) {
  }

  ngAfterViewInit() {
    this.initSidebar()
  }

  
  private activeItem;
  private sidebarEntry : string
  private checkSlash

  initSidebar() {
    this.sidebarEntry = window.location.pathname
    this.sidebarEntry = this.sidebarEntry.substring(1)
    this.sidebarEntry = this.sidebarEntry.charAt(0).toUpperCase() + this.sidebarEntry.slice(1);

    if (this.sidebarEntry.includes("/") == true){
      this.checkSlash = this.sidebarEntry.indexOf('/')
      this.checkSlash = this.sidebarEntry.length - this.checkSlash
      this.sidebarEntry = this.sidebarEntry.substring(0, this.sidebarEntry.length-this.checkSlash)
    }
    
    this.activeItem = document.getElementById(this.sidebarEntry)
    this.activeItem.className = "active"
    
  }


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
