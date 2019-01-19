import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entryclass} from '../Entryclass/Entryclass';
import { Karakterclassexample } from '../Entryclass/Karakterclassexample';
import { Wezensclassexample } from '../Entryclass/Wezensclassexample';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

public activeMenu;

  constructor( private http : HttpClient) { }

  getKarakters() {
    console.log("reached: get karakters")
    return this.http.get('http://localhost:3000/karakters');
    
}

getOverzicht() {
  console.log("reached: get overzicht")
  return this.http.get('http://localhost:3000/karakters');
}

getWezens(): Observable<Entryclass[]> {
  return of( Wezensclassexample);
}


}
