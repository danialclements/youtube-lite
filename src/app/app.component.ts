import { Component, OnInit } from '@angular/core';
import { IYouTubeSearchResult } from './youtubeSearchResult';
import { YouTubeSearchService } from './youtube-search.service';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  results: IYouTubeSearchResult[] = [];
  selectedResult: IYouTubeSearchResult;
  searchString: string;
  isSearching: boolean = false;
  errorMessage: string = "";
  constructor(private _youTubeSearchService: YouTubeSearchService, private _appStateService: AppStateService) { 
    // Subscribe to changes to search terms and issue a search
    this._appStateService.searchTerms.subscribe(searchTerms => this.searchVideos(searchTerms));
  }
  searchVideos(terms: string = ""): void {

    // Ensure we have something to search for
    if (terms.trim()) {
      this._appStateService.setIsSearching(true);

      // Search the service for current search terms
      this._youTubeSearchService.getVideosMatchingString(terms)
        .subscribe(
        results => this._appStateService.setSearchResults(results),
        error => this.errorMessage = error
        );
    }
  }
}