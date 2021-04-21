import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
     return this.http.post('https://putsreq.com/7GEAWTrz7Pej77T0UEqF',userSettings)
   // return of(userSettings);
  }

  getSubsriptionType(): Observable<string[]>{
    return of(['Monthly', 'Annual','Lifetime'])
  }
}
