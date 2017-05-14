/// <reference types="youtube" />
import { Component, Input } from '@angular/core';
import { IYouTubeSearchResult } from '../youTubeSearchResult';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent {
  player: YT.Player;
  selectedResult: IYouTubeSearchResult;
  constructor(private _appStateService: AppStateService) {
    this._appStateService.selectedResult.subscribe(this.onChangeSelectedResult.bind(this));
  }
  onChangeSelectedResult(result: IYouTubeSearchResult) {
    this.selectedResult = result;

    if (this.player) {
      this.player.loadVideoById(result.id);
    }
  }
  onStateChange(event) {
    console.log('player state changed', event)
  }
  savePlayer(player: YT.Player) {
    this.player = player;
    console.log('Creating player', player);
  }
}
