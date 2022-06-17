import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Intervention } from './intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  private baseURL = "http://localhost:8080/api/v1/interventions";

  constructor(private httpClient: HttpClient) { }
  
  getInterventionsList(): Observable<Intervention[]>{
    return this.httpClient.get<Intervention[]>(`${this.baseURL}`);
  };

  createIntervention(intervention: Intervention): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,intervention)
  }

  getInterventionById(id: number): Observable<Intervention>{
    return this.httpClient.get<Intervention>(`${this.baseURL}/${id}`);
  }


  updateIntervention(id: number, intervention: Intervention): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, intervention);
  }

  deleteIntervention(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getInterventionByIntervenant(intervenant: string): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/intervenant?intervenant=${intervenant}`)
  }
}
