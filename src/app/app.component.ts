import { Component, OnInit } from '@angular/core';
import { IYouTubeSearchResult } from './youtubeSearchResult';
import { YouTubeSearchService } from './youtube-search.service';


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
  constructor(private _youTubeSearchService: YouTubeSearchService) { }
  searchVideos(terms: string = ""): void {

    // Ensure we have something to search for
    if (terms.trim()) {
      this.isSearching = true;

      // Search the service for current search terms
      this._youTubeSearchService.getVideosMatchingString(terms)
        .subscribe(
        results => this.results = results,
        error => this.errorMessage = error
        );
    }
  }
  onSearchChanged(searchTerms: string): void {
    this.searchVideos(searchTerms);
    console.log(`Searching for: ${searchTerms}`);
  }
  onResultSelected(result) {
    this.selectedResult = result;
    console.log('you clicked on a result', result);
  }
}
