import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-menu',
	styleUrls: ['./app-menu.component.less'],
	templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {
	private debounceTimeout: number = 500;
	private currentTimeout: number;
	@Input() searchString: string;
	@Output() searchChanged: EventEmitter<string> = new EventEmitter();
	onChange(searchString): void {
		// Clear the current timer if one exists
		// This prevents the app from firing an API call every time the user types
		if (this.currentTimeout) {
			clearTimeout(this.currentTimeout);
			this.currentTimeout = null;
		}

		// Start a new timer
		this.currentTimeout = setTimeout(() => {
			this.searchChanged.emit(searchString);
		}, this.debounceTimeout);
	}
}