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

  getKarakters() {
   

    this.menuService.getKarakters()
      .subscribe( menuItems => this.Karakterexample = menuItems)
      console.log(this.Karakterexample)
      console.log(this.Karakterexample[0].Name + "test")

      if (this.activeItem != null) {
      this.activeItem.className="inactive"
      console.log("deactivate aangeroepen")
      }

      this.activeItem = document.getElementById("Karakters")
      console.log(this.activeItem)
      this.activeItem.className = "active"
      
}

setInactive () {
  document.getElementById
}


}
