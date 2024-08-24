import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule],
	templateUrl: './nav-bar.component.html',
  	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
	selectedType: string = '';
  
	constructor(private router: Router) {}
  
	navigateTo(path: string): void {
	  this.router.navigate([path]);
	}
  
	onTypeFilterChange(category: string, type: string): void {
	  this.selectedType = type;
	  this.router.navigate(['/products-' + category], { queryParams: { type: this.selectedType } });
	}
  }