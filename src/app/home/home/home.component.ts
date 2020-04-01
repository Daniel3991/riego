import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { User }from "../../model/user";
import { UserService }from "../../shared/user.service";
import { clear } from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerExtension:RouterExtensions, private userService:UserService) { }

  usuarios:Array<User>
  ngOnInit(): void {
    this.userService.getUsuario().subscribe((result: any)=>{
      console.log(result);
      this.usuarios=result.usuarios;
    })
  
  }

salir(){
  clear();
  this.routerExtension.navigate(["/login"],{clearHistory:true});
}


}

