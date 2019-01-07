import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { KaraktersComponent } from './menuitems/karakters/karakters.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WezensComponent } from './menuitems/wezens/wezens.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    KaraktersComponent,
    WezensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
