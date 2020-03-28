import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService} from "../shared/login.service";
import { setString}from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  user:User;
  constructor(private routerExtensions:RouterExtensions, private loginServices:LoginService) {
    this.user=new User();
  }

  ngOnInit(): void {
  }

  ingresar(){
    
    if(!this.user.email || !this.user.password) 
    {
        this.alert("debe ingresar un correo")
        return;
    }
    else{
    this.loginServices.autenticar({	correo:this.user.email,password:this.user.password})
    .subscribe( (result:any)=>{
      this.routerExtensions.navigate(["/home"],{clearHistory:true});
      setString("token",result.token.access_token);
      console.log(result);
    }, (error)=>{
     this.alert(error.error.message);
    });
  }}

  alert(message:string){
    return alert({
      title: "ALERTA",
      okButtonText: "ok",
      message:message})
  }
}
