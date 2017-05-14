import { Component, Input } from '@angular/core';
import { IYouTubeSearchResult } from '../youTubeSearchResult';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent {
  selectedResult: IYouTubeSearchResult;
  constructor(private _appStateService: AppStateService) {
    this._appStateService.selectedResult.subscribe(selectedResult => this.selectedResult = selectedResult);
  }
}
