import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NavigationService {
	private subject = new Subject<any>();
	
	sendMessage(message: string) {
        this.subject.next({ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
	
	category: number;
	area: number;
	subArea: number;
	child: number;
	
	// constructor(private router: Router) {}

	public navigateToCategory(categoryId) {
    	this.category = categoryId;
    	console.log(this);
    	// this.router.navigateByUrl(categoryId);
    }
    
    public navigateToArea(categoryId, areaId) {
	    this.category = categoryId;
	    // this.area = areaId;
	    // this.router.navigateByUrl(categoryId + "/" + areaId);
	};
	
	public navigateToSubArea(categoryId, areaId, subAreaId) {
	    this.category = categoryId;
	    this.area = areaId;
	    this.subArea = subAreaId;
	    // this.router.navigateByUrl(categoryId + "/" + areaId + "/" + subAreaId);
	};
	
	public navigateToChild(categoryId, areaId, subAreaId, childId) {
	    this.category = categoryId;
	    this.area = areaId;
	    this.subArea = subAreaId;
	    this.child = childId;
	    // this.router.navigateByUrl(categoryId + "/" + areaId + "/" + subAreaId + "/" + childId);
	};
	
	public getParams() {
        return this;
    }

}