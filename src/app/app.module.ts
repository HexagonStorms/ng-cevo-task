import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AreaComponent } from './area/area.component';
import { SubAreaComponent } from './subArea/subArea.component';
import { ChildComponent } from './child/child.component';

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
    providers: [],
    // entryComponents: [
    //     HomeComponent,
    //     CategoryComponent,
    //     AreaComponent,
    //     SubAreaComponent,
    //     ChildComponent
    // ],
    bootstrap: [AppComponent]
})
export class AppModule { }
