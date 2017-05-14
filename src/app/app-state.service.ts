import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IYouTubeSearchResult } from './youTubeSearchResult';

@Injectable()
export class AppStateService {
  // Define private subjects
  private _isSearching = new BehaviorSubject<boolean>(false);
  private _searchResults = new BehaviorSubject<IYouTubeSearchResult[]>([]);
  private _searchTerms = new BehaviorSubject<string>("");
  private _selectedResult = new BehaviorSubject<IYouTubeSearchResult>(null)

  // Define Public accessors as observables
  isSearching = this._isSearching.asObservable();
  searchResults = this._searchResults.asObservable();
  searchTerms = this._searchTerms.asObservable();
  selectedResult = this._selectedResult.asObservable();

  // Define methods to alter the values of the subjects
  setIsSearching(isSearching: boolean) {
    this._isSearching.next(isSearching);
  }
  setSearchResults(searchResults: IYouTubeSearchResult[]) {
    this._searchResults.next(searchResults);
  }
  setSearchTerms(searchTerms:string) {
    this._searchTerms.next(searchTerms);
  }
  setSelectedResult(selectedResult: IYouTubeSearchResult) {
    this._selectedResult.next(selectedResult);
  }
}
