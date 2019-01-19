import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { KaraktersComponent } from './menuitems/karakters/karakters.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WezensComponent } from './menuitems/wezens/wezens.component';
import { OverzichtComponent } from './overzicht/overzicht.component';

import { FormsModule } from '@angular/forms';
import { NieuwkarakterComponent } from './nieuwkarakter/nieuwkarakter.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    KaraktersComponent,
    WezensComponent,
    OverzichtComponent,
    NieuwkarakterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
