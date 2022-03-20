import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";

export const userRoutes: Routes = [
    {
        path: '',
        children:[
            {
                path: '', 
                component: UserComponent
            }
        ]
    }
];