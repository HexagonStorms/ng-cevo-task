import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class NavigationService {
	routes: any;
	
	constructor(private router: Router) {}

	public navigateToCategory(categoryId) {
    	this.routes.category = categoryId;
    	this.router.navigateByUrl(categoryId);
    }
    
    public navigateToArea(categoryId, areaId) {
	    this.routes.category = categoryId;
	    this.routes.area = areaId;
	    this.router.navigateByUrl(categoryId + "/" + areaId);
	};
	
	public navigateToSubArea(categoryId, areaId, subAreaId) {
	    this.routes.category = categoryId;
	    this.routes.area = areaId;
	    this.routes.subArea = subAreaId;
	    this.router.navigateByUrl(categoryId + "/" + areaId + "/" + subAreaId);
	};
	
	public navigateToChild(categoryId, areaId, subAreaId, childId) {
	    this.routes.category = categoryId;
	    this.routes.area = areaId;
	    this.routes.subArea = subAreaId;
	    this.routes.child = childId;
	    this.router.navigateByUrl(categoryId + "/" + areaId + "/" + subAreaId + "/" + childId);
	};

}