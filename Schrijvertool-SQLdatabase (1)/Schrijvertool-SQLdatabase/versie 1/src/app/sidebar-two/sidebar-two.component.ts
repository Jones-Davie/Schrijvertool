import { Component, OnInit } from '@angular/core';
import { MenuitemService } from '../menuitemservice/menuitem.service';

@Component({
  selector: 'app-sidebar-two',
  templateUrl: './sidebar-two.component.html',
  styleUrls: ['./sidebar-two.component.scss']
})
export class SidebarTwoComponent implements OnInit {

  constructor(private menuService : MenuitemService) { }

  ngOnInit( ) {
    this.getMenuItems()
  }

  getMenuItems() {
   
    this.menuService.getEntries()
      .subscribe( menuItems => this.Entryclassexample = menuItems)
      console.log(this.Entryclassexample)
      console.log(this.Entryclassexample[0].Name + "test")
}


}
