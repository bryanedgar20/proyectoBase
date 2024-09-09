import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoVO } from '../vo/PedidoVO';

@Injectable({
  providedIn: 'root'
})
export class ExamenFinalService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private apiUrl = 'http://localhost:8081';  // URL del web service

  constructor(private http: HttpClient) { }

  // Método para obtener datos (GET)
  getDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listPedidos`);
  }

  saveDatos(obj:PedidoVO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl+'/savePedido', obj, { headers });
  }
}
