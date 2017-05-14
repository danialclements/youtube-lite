import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { IYouTubeSearchResult } from '../youTubeSearchResult';

@Component({
  selector: 'app-video-controls',
  templateUrl: './video-controls.component.html',
  styleUrls: ['./video-controls.component.less']
})
export class VideoControlsComponent {
  selectedResult: IYouTubeSearchResult;
  searchResults: IYouTubeSearchResult[] = [];

  constructor(private _appStateService: AppStateService) { 
    this._appStateService.selectedResult.subscribe((selectedResult) => this.selectedResult = selectedResult);
    this._appStateService.searchResults.subscribe((searchResults) => this.searchResults = searchResults);
  }
  canGoBack(): boolean {
    return this.getPreviousVideo() !== this.selectedResult;
  }
  canGoForward(): boolean {
    return this.getNextVideo() !== this.selectedResult;
  }
  getNextVideo(): IYouTubeSearchResult {
    const currentIndex = this.searchResults.indexOf(this.selectedResult);
    return (currentIndex < this.searchResults.length - 1) ? this.searchResults[currentIndex + 1] : this.selectedResult;
  }
  getPreviousVideo(): IYouTubeSearchResult {
    const currentIndex = this.searchResults.indexOf(this.selectedResult);
    return (currentIndex > 0) ? this.searchResults[currentIndex - 1] : this.selectedResult;
  }
  goBackward():void {
    if (this.canGoBack()) {
      this._appStateService.setSelectedResult(this.getPreviousVideo());
    }
  }
  goForward():void {
    if (this.canGoForward()) {
      this._appStateService.setSelectedResult(this.getNextVideo());
    }
  }
  onClickGoBackward():void {
    this.goBackward();
  }
  onClickGoForward():void {
    this.goForward();
  }
}
