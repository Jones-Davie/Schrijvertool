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
  
  private Karakterlijst
  private activeItem
  
  getKarakters() {
  
    this.menuService.getKarakters()
      .subscribe( menuItems => this.Karakterlijst = menuItems)

      if (this.activeItem != null) {
      this.activeItem.className="inactive"
      }

      this.activeItem = document.getElementById("Karakters")
      this.activeItem.className = "active"
      console.log(this.Karakterlijst + " test")
      
      console.log(this.menuService.activeMenu + "test")
      
  }
}
