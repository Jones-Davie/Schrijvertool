import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Entryclass} from '../Entryclass/Entryclass';
import { Karaktermodel } from '../Entryclass/Karaktermodel';
import { Wezensclassexample } from '../Entryclass/Wezensclassexample';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  constructor( private http : HttpClient) { }

  baseUrl = '../api/getkarakters'
  karakters: Karaktermodel[]

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  /*getKarakters() {
    return this.http.get('http://testomgeving.daviefaulhaber.nl/karakters.php/');
  }*/

  getKarakters(): Observable<Karaktermodel[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res) => {
        this.karakters = res['data']
        console.log(this.karakters)
        console.log(this.karakters[1])
        console.log(this.karakters[1].Naam)
        return this.karakters
    }),
    catchError(this.handleError));
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
