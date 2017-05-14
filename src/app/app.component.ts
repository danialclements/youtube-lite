import { Component, OnInit } from '@angular/core';
import { IYouTubeSearchResult } from './youtubeSearchResult';
import { YouTubeSearchService } from './services/youtube-search.service';
import { AppStateService } from './services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  results: IYouTubeSearchResult[] = [];
  selectedResult: IYouTubeSearchResult;
  searchString: string;
  isSearching: boolean = false;
  isInitialLaunch: boolean
  errorMessage: string = "";
  constructor(private _youTubeSearchService: YouTubeSearchService, private _appStateService: AppStateService) { 
    // Subscribe to changes to search terms and issue a search
    this._appStateService.searchTerms.subscribe(searchTerms => this.searchVideos(searchTerms));
    this._appStateService.isInitialLaunch.subscribe(isInitalLaunch => this.isInitialLaunch = isInitalLaunch);
  }
  ngOnInit() {
    this.isInitialLaunch = this._appStateService.getIsInitalLaunch();
  }
  searchVideos(terms: string = ""): void {
    if (this.isInitialLaunch) {
      this._appStateService.setIsInitialLaunch(false);
    }

    // Ensure we have something to search for
    if (terms.trim()) {
      this._appStateService.setIsSearching(true);

      // Search the service for current search terms
      this._youTubeSearchService.getVideosMatchingString(terms)
        .subscribe(
          (results) => {
            this._appStateService.setIsSearching(false);
            this._appStateService.setSearchResults(results);
          },
          (error) => {
            this._appStateService.setIsSearching(false);
            this.errorMessage = error;
          }
        );
    }
  }
}
