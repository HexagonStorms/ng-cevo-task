import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent {

	constructor(private navigationService: NavigationService) {}
}