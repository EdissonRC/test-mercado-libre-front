import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string, headers?: HttpHeaders){
    return this.httpClient.get<T>(url, { headers });
  };
}
