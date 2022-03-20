import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";

export const userRoutes: Routes = [
    {
        path: 'user',
        children:[
            {
                path: '', component: UserComponent
            }
        ]
    }
];