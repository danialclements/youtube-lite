import { TestBed, inject } from '@angular/core/testing';

import { AppStateService } from './services/app-state.service';

describe('AppStateService', () => {

  // Spec helper to check for observables
  function checkObservableProperty(propertyName) {
    it(`it should have a public Observable '${propertyName}' property`, inject([AppStateService], (service: AppStateService) => {
      expect(service[propertyName]).toBeDefined();
      expect(typeof service[propertyName].subscribe).toBe('function');
    }));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateService]
    });
  });

  it('should be created', inject([AppStateService], (service: AppStateService) => {
    expect(service).toBeTruthy();
  }));

  checkObservableProperty('isSearching');
  checkObservableProperty('searchResults');
  checkObservableProperty('searchTerms');
  checkObservableProperty('selectedResult');
  
});
