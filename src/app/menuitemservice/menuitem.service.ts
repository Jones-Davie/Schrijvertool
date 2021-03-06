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

  getKarakters(): Observable<Entryclass[]> {
    return of( Karakterclassexample);
    
}

getWezens(): Observable<Entryclass[]> {
  return of( Wezensclassexample);
}


}
