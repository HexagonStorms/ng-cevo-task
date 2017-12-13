import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})
export class ChildComponent {
	constructor(private navigationService: NavigationService) {}
}