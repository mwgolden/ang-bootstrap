import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalShelterDataService {

  constructor(
		private http: HttpClient
	) { }
	getAnimalShelterIntake(): Observable<any>{
		const url = 'https://www.dallasopendata.com/resource/7h2m-3um5.json'
		return this.http.get<any>(url)
	}
}
