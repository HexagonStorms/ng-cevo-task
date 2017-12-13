import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'app-subArea',
    templateUrl: './subArea.component.html'
})
export class SubAreaComponent {
	
	constructor(private navigationService: NavigationService) {}
}