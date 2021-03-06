import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { YouTubeSearchService } from './services/youtube-search.service';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoControlsComponent } from './video-controls/video-controls.component';
import { AppStateService } from './services/app-state.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { MessageComponent } from './message/message.component';
import { VideoDurationPipe } from './pipes/video-duration.pipe';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoControlsComponent,
    MessageComponent,
    VideoDurationPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule
  ],
  providers: [
    YouTubeSearchService,
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }