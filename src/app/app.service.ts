import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
export interface Product { id: number, name: string, price: number }
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api = inject(HttpClient);
  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.api.get<Product[]>(environment.apiUrl + '/products');
  }
}
