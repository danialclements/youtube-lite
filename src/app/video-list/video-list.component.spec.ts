import { TestBed, async } from '@angular/core/testing';
import { AppStateService } from '../app-state.service';

import { VideoListComponent } from './video-list.component';

describe('VideoListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoListComponent
      ],
      providers: [
        AppStateService
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(VideoListComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should display a list of videos', () => {

  })

  describe('when a video is clicked', () => {
	it('should trigger an event', () => {
		
	});
  });
});
