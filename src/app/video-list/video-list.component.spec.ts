import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { VideoListComponent } from './video-list.component';
import { AppStateService } from '../services/app-state.service';
import { MessageComponent } from '../message/message.component';
import { VideoDurationPipe } from '../pipes/video-duration.pipe';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoListComponent,
        MessageComponent,
        VideoDurationPipe
      ],
      providers: [
        AppStateService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoListComponent);
  }));

  function getFixture() {
    return TestBed.createComponent(VideoListComponent);
  }

  it('should create the component', async(() => {
    const fixture = getFixture();
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  // it('should display a list of videos', () => {
  //   const fixture = getFixture();
  //    fixture.detectChanges();
  //    const compiled = fixture.debugElement.nativeElement;
  //    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // });

  describe('when a video is clicked', () => {
    it('should trigger an event', () => {
      
    });
  });
});
