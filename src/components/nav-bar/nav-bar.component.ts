import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule],
	templateUrl: './nav-bar.component.html',
  	styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {}