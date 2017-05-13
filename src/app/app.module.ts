import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { YouTubeSearchService } from './youtube-search.service';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    VideoListComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    YouTubeSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }