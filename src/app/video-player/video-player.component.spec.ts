import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';
import { VideoControlsComponent } from '../video-controls/video-controls.component';
import { AppStateService } from '../app-state.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VideoPlayerComponent,
        VideoControlsComponent
      ],
      providers: [
        AppStateService
      ],
      imports: [
        YoutubePlayerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
