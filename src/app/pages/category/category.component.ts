import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
	category: number;
	message: any;
	subscription: Subscription;
	
	constructor(private navigationService: NavigationService) {
		console.log(this.navigationService);
		this.subscription = this.navigationService.getMessage().subscribe(message => { this.message = message; });
		this.category = this.navigationService.category;
		console.log(this);
	}
	
	 ngOnInit() {
	 	console.log('hell fucking low');
	 }
	 
	 ngAfterViewInit() {
	 	console.log('fucking kill me');
	 }
	
}