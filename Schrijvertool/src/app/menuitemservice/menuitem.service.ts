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

  getKaraktersNieuw() {
    return this.http.get('http://localhost:3000/karakters/nieuw');
}


saveKarakter( Karaktermodel: Karaktermodel) {
  return this.http.post('http://localhost:3000/karakters/nieuw', Karaktermodel);
}

deleteKarakter( karakterNaam) {
  console.log("reached: delete Karakter " + karakterNaam)
  return this.http.delete('http://localhost:3000/karakters/' + karakterNaam);
}

editKarakter(Karaktermodel:Karaktermodel) {
  return this.http.post('http://localhost:3000/karakters', Karaktermodel)
}


getWezens(): Observable<Entryclass[]> {
  return of( Wezensclassexample);
}



}
