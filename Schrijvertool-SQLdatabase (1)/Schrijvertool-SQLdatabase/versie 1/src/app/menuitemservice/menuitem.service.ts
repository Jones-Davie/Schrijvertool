import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Karakterclass} from '../Karakterclass/Karakterclass';
import { Karakterclassexample } from '../Karakterclass/Karakterclassexample';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  constructor() { }

  getKarakters(): Observable<Karakterclass[]> {
    console.log("Karakter entry aangeroepen")
    return of( Karakterclassexample);
}
}
