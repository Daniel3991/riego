import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService} from "../shared/login.service";
import { setString}from "tns-core-modules/application-settings";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator"; 
import { EventData } from "tns-core-modules/data/observable"; 
import { Page } from "tns-core-modules/ui/page"; import { Image } from "tns-core-modules/ui/image";


@Component({
  selector: 'ns-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  user:User;
  isBusy: boolean = false;
  constructor(private routerExtensions:RouterExtensions, private loginServices:LoginService, private page:Page) {
    this.page.actionBarHidden = true;
    this.user=new User();
  }

  ngOnInit(): void {
  }

  ingresar(){
    this.isBusy=true;
    if(!this.user.email || !this.user.password) 
    {
        this.alert("debe ingresar un correo")
        return;
    }
    else{
    this.loginServices.autenticar({	correo:this.user.email,password:this.user.password})
    .subscribe( (result:any)=>{
      setString("token",result.token.access_token);
      this.isBusy=false;
      this.routerExtensions.navigate(["/home"],{clearHistory:true});
      console.log(result);
    }, (error)=>{
      this.isBusy=false;
     this.alert(error.error.message);
    });
  }}

  alert(message:string){
    return alert({
      title: "ALERTA",
      okButtonText: "ok",
      message:message})
  }

  onBusyChanged(args: EventData) {       
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;       
    console.log("indicator.busy changed to: " + indicator.busy); 
  }



}
