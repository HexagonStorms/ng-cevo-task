import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { AreaComponent } from './pages/area/area.component';
import { SubAreaComponent } from './pages/subArea/subArea.component';
import { ChildComponent } from './pages/child/child.component';

import { NavigationService } from "./services/navigation.service";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: ':categoryId',
        component: CategoryComponent
    },
    {
        path: ':categoryId/:areaId',
        component: AreaComponent
    },
    {
        path: ':categoryId/:areaId/:subAreaId',
        component: SubAreaComponent
    },
    {
        path: ':categoryId/:areaId/:subAreaId/:childId',
        component: ChildComponent
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CategoryComponent,
        AreaComponent,
        SubAreaComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        NavigationService,
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
