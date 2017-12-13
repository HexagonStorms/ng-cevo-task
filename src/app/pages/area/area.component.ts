import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html'
})
export class AreaComponent {
	
	constructor(private navigationService: NavigationService) {}
}