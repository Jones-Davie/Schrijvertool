import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entryclass} from '../Entryclass/Entryclass';
import { Karaktermodel } from '../Entryclass/Karaktermodel';
import { Wezensclassexample } from '../Entryclass/Wezensclassexample';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  constructor( private http : HttpClient) { }

  getKarakters() {
    return this.http.get('http://localhost:3000/karakters');
}

saveKarakter( Karaktermodel: Karaktermodel) {
  return this.http.post('http://localhost:3000/karakters/nieuw', Karaktermodel);
}

editKarakter(Karaktermodel:Karaktermodel) {
  console.log('reached: edit Karakter')
  console.log( 'test Karaktermodel: ' + Karaktermodel)
  console.log( 'test karakternaam: ' + Karaktermodel.Naam)
  return this.http.post('http://localhost:3000/karakters', Karaktermodel)
}


getWezens(): Observable<Entryclass[]> {
  return of( Wezensclassexample);
}



}
