import { Component } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
	selector: 'app-menu',
	styleUrls: ['./app-menu.component.less'],
	templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {
	private debounceTimeout: number = 500;
	private currentTimeout: number;
	constructor(private _appStateService: AppStateService) {}
	onChange(searchString): void {
		// Clear the current timer if one exists
		// This prevents the app from firing an API call every time the user types
		if (this.currentTimeout) {
			clearTimeout(this.currentTimeout);
			this.currentTimeout = null;
		}

		// Start a new timer
		this.currentTimeout = setTimeout(() => {
			// Update app state with new terms so subscribers can react
			this._appStateService.setSearchTerms(searchString)
		}, this.debounceTimeout);
	}
}