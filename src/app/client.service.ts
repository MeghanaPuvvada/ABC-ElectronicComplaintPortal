import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
   
  constructor(private http:HttpClient) { }
  baseURL = 'http://localhost:8091/client/';
  saveClient(client: Client) : Observable<any> {
    return this.http.post("http://localhost:8091/client/save",client);
  }
  getClientbyClientId(clientId:any) : Observable<any>{
      return this.http.get("http://localhost:8091/client/clientId/"+clientId);
    }
    getEngineerbyEngineerId(engineerId: any) : Observable<any>{
      return this.http.get("http://localhost:8091/client/engineerId/"+engineerId);
    }
    getEngineerByDomain(domain: String): Observable<any> {
      return this.http.get("http://localhost:8091/client/engineerdomain/"+domain);
    }
    
    signIn(clientId:string,password:string):Observable<any>{
      let params=new HttpParams()
        .set('clientId',clientId)
        .set('password',password);
      return  this.http.get(this.baseURL+'/clientSignIn',{params});
    }
  }
 

