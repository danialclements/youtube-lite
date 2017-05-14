import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoControlsComponent } from './video-controls.component';
import { AppStateService } from '../services/app-state.service';
import { IYouTubeSearchResult } from '../youTubeSearchResult';

describe('VideoControlsComponent', () => {
  let component: VideoControlsComponent;
  let fixture: ComponentFixture<VideoControlsComponent>;
  let appStateService: any;
  let testData: IYouTubeSearchResult[] = [
    {
      id: "jasfie",
      publishedDate: "",
      title: 'Test Video 1',
      description: "This is a test video",
      thumbnailUrl: "http://nowhere.com/test.jpg",
      duration: "PT1H34M23S"
    }, {
      id: "fehajkf",
      publishedDate: "",
      title: 'Test Video 2',
      description: "This is a test video",
      thumbnailUrl: "http://nowhere.com/test.jpg",
      duration: "PT1H34M23S"
    }, {
      id: "feuanke",
      publishedDate: "",
      title: 'Test Video 3',
      description: "This is a test video",
      thumbnailUrl: "http://nowhere.com/test.jpg",
      duration: "PT1H34M23S"
    }
  ]

  function addTestData() {
    // Add test data
    appStateService.setSearchResults(testData);
    appStateService.setSelectedResult(testData[0]);
  }

  beforeEach(async(() => {
    appStateService = new AppStateService();

    // Spy on methods
    spyOn(appStateService.searchResults, "subscribe");
    spyOn(appStateService.selectedResult, "subscribe");

    TestBed.configureTestingModule({
      declarations: [VideoControlsComponent],
      providers: [{ provide: AppStateService, useValue: appStateService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to the searchResults observable in the appState service', () => {
    expect(appStateService.searchResults.subscribe.calls.count()).toEqual(1);
  });

  it('should subscribe to the selectedResult observable in the appState service', () => {
    expect(appStateService.selectedResult.subscribe.calls.count()).toEqual(1);
  });

  describe('when new search results are added', () => {
    beforeEach(() => addTestData());
    xit('should show the correct title for the selected video', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.center').textContent).toContain(testData[0].title);
    });
  });
});
