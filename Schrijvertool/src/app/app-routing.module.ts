import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaraktersComponent } from './menuitems/karakters/karakters.component';
import { WezensComponent } from './menuitems/wezens/wezens.component';
import { OverzichtComponent } from './overzicht/overzicht.component'
import { NieuwkarakterComponent } from './menuitems/nieuwkarakter/nieuwkarakter.component';

const routes: Routes = [ {
  path: '',
    component: OverzichtComponent
},

{
  path: 'overzicht',
    component: OverzichtComponent
},

  {
    path: 'karakters',
    component: KaraktersComponent
  },

  {
    path: 'karakters/nieuw',
    component: NieuwkarakterComponent
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
