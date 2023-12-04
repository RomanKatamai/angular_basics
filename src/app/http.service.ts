import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  addOrders(newOrders: Object) {
    return this.http.post('http://localhost:8080/api/order', newOrders)
  }
}
