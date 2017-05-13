import { Component, Input } from '@angular/core';
import { IYouTubeSearchResult } from '../youTubeSearchResult';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent {
  @Input() selectedResult: IYouTubeSearchResult;
}
