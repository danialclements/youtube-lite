import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
	selector: 'app-menu',
	styleUrls: ['./app-menu.component.less'],
	templateUrl: './app-menu.component.html'
})
export class AppMenuComponent {
	private debounceTimeout: number = 500;
	private currentTimeout: number;
	searchTerms: string;
	constructor(private _appStateService: AppStateService) {}
	onClickLogo() {
		this._appStateService.setIsInitialLaunch(true);
	}
	onClickSearch() {
		this.setSearchTerms();
	}
	onClickClear() {
		this.searchTerms = "";
		this.setSearchTerms();
	}
	onInputKeypress(event: KeyboardEvent) {
		// Allow the user to press enter to search for terms
		if (event.code === 'Enter') {
			this.setSearchTerms();
		}
	}
	setSearchTerms() {
		this._appStateService.setSearchTerms(this.searchTerms);
	}
}