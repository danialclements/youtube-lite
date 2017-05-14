import { Component } from '@angular/core';
import { IYouTubeSearchResult } from '../youtubeSearchResult';
import { AppStateService } from '../app-state.service';

@Component({
	selector: 'app-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.less']
})
export class VideoListComponent {
	results: IYouTubeSearchResult[];
	isSearching: boolean;
	selectedResult: IYouTubeSearchResult;
	constructor(private _appStateService: AppStateService) {
		this._appStateService.searchResults.subscribe(results => this.results = results);
		this._appStateService.isSearching.subscribe(isSearching => this.isSearching = isSearching);
	}
	getActiveClass(result: IYouTubeSearchResult) {
		return (result === this.selectedResult) ? 'active' : '';
	}
	onClickResult(searchResult: IYouTubeSearchResult) {
		// Set a local value so we can highlight which result is selectd
		this.selectedResult = searchResult;
		// Update app state with the selected result
		this._appStateService.setSelectedResult(searchResult);
	}
}