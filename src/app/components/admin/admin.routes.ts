import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

export const adminRoutes: Routes = [
    {
        path: '',
        children:[
            {
                path: '', 
                component: AdminComponent
            }
        ]
    }
];