import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { Login2Component } from './login2/login2.component';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: Login2Component },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "home", loadChildren:"./home/home.module#HomeModule"},
    { path: "camara", loadChildren:"./camara/camara.module#CamaraModule"}
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
