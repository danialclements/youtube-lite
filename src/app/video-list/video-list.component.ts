import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IYouTubeSearchResult } from '../youtubeSearchResult';

@Component({
	selector: 'app-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.less']
})
export class VideoListComponent {
	@Input() results: IYouTubeSearchResult[];
	@Input() isSearching: false;
	selectedResult: IYouTubeSearchResult;
	@Output() onResultSelected: EventEmitter<IYouTubeSearchResult> = new EventEmitter();
	onClickResult(searchResult: IYouTubeSearchResult) {
		this.selectedResult = searchResult;
		this.onResultSelected.emit(searchResult);
	}
}