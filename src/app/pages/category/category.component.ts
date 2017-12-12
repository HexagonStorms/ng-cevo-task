import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent {
	
	constructor(private navigationService: NavigationService) {}
	
	routes = this.navigationService.routes;
}