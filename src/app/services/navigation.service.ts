import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class NavigationService {
	category: any;
	area: any;
	subArea: any;
	child: any;
		
	constructor(private router: Router) {}

	public navigateToCategory(categoryId) {
		this.category = categoryId;
    	this.router.navigate(['/'+categoryId]);
    }
    
    public navigateToArea(categoryId, areaId) {
	    this.category = categoryId;
	    this.area = areaId;
    	this.router.navigate(['/'+categoryId, areaId]);
	};
	
	public navigateToSubArea(categoryId, areaId, subAreaId) {
	    this.category = categoryId;
	    this.area = areaId;
	    this.subArea = subAreaId;
	    this.router.navigate(['/'+categoryId, areaId, subAreaId]);
	};
	
	public navigateToChild(categoryId, areaId, subAreaId, childId) {
	    this.category = categoryId;
	    this.area = areaId;
	    this.subArea = subAreaId;
	    this.child = childId;
	    this.router.navigate(['/'+categoryId, areaId, subAreaId, childId]);
	};
}