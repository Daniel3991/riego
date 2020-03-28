import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private serverUrl:string="https://viajaconmigo.herokuapp.com/";
 constructor(private http:HttpClient) { }


autenticar(data:any){
  let headers= new HttpHeaders({
    "Content-Type" : "application/json"

  });console.log(data);
 return this.http.post(`${this.serverUrl}api/usuario/autenticar`,data,{headers:headers})
}





}
