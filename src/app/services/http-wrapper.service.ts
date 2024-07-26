import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environment } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  apiUrl = Environment.apiUrl;
  headers!: {
    headers: HttpHeaders;
  };

  constructor(
    public http: HttpClient,
  ) {}

  getRaw(url: string, headers?: HttpHeaders | {
      [header: string]: string | string[];
  }): Observable<any> {
    return this.http.get(url, { ...new HttpHeaders(), ...headers })
  }

  get(url: string, headers?: any): Observable<any> {
    return this.http.get(this.apiUrl + url, { ...this.headers, ...headers })
  }

  post(url: string, data: any = null): Observable<any> {
    return this.http.post(this.apiUrl + url, data, this.headers);
  }

  put(url: string, data: any = null): Observable<any> {
    return this.http.put(this.apiUrl + url, data, this.headers);
  }

  patch(url: string, data: any = null): Observable<any> {
    return this.http.patch(this.apiUrl + url, data, this.headers);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(this.apiUrl + url, this.headers);
  }
}