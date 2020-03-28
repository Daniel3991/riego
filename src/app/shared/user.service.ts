import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private serverUrl:string="https://viajaconmigo.herokuapp.com/";
 private token:string;
 
  constructor(private http:HttpClient) { }


getUsuario(){
  
  let headers=this.createRequestHeder();
  return this.http.get(this.serverUrl+"api/usuario", {headers});
}


private createRequestHeder(){
  let headers= new HttpHeaders({
    "Autorization":"Bearer "+getString("token"),
    "Content-Type" : "application/json"
  });
  return headers;
}

autenticar(data:any){
  let headers= new HttpHeaders({
    "Content-Type" : "application/json"

  });console.log(data);
 return this.http.post(`${this.serverUrl}api/usuario/autenticar`,data,{headers:headers})
}



/*
getUsuarios(){
  this.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTc5NDM5NGJhM2U5MTAwMTc4YmVhMTkiLCJpYXQiOjE1ODUwODIyNzIsImV4cCI6MTU4NTA5MTE3Mn0.2gIZzA6Gi_RnfX71zBwqfNOp4vJ8d90WRvrOFI-Yxio";
  let headers = this.createRequestHeder();
  return this.http.get(this.serverUrl+"api/usuario",{headers});
}*/


}
