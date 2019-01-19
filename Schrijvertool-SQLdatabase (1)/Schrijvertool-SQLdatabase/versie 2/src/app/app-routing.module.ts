import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaraktersComponent } from './menuitems/karakters/karakters.component';
import { WezensComponent } from './menuitems/wezens/wezens.component';

const routes: Routes = [ {
    path: '',
    component: KaraktersComponent
  },

  {
    path: 'karakters',
    component: KaraktersComponent
  },

  {
    path: 'wezens',
    component: WezensComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
