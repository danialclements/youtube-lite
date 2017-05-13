import { Injectable } from '@angular/core';
import { IYouTubeSearchResult } from './youTubeSearchResult';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class YouTubeSearchService {
	private apiKey: string = 'AIzaSyDqBbZ4g7Nk8E09Xs_xYD8ZjSedP1gJ3DM';
	private apiUrlRoot: string = 'https://www.googleapis.com/youtube/v3/search';
	constructor(private _http: Http) {}
	private buildSearchUrlWithQuery(query:string):string {
		return `${this.apiUrlRoot}?part=snippet&q=${query}&key=${this.apiKey}`
	} 
	private transformResponse(response: Response) {
		const json = response.json(),
			results = <IYouTubeSearchResult[]> [];

		if (json.items && json.items.length) {
			json.items.forEach((item) => {
				results.push({
					id: item.id.videoId,
					publishedDate: item.snippet.publishedAt,
					title: item.snippet.title,
					description: item.snippet.description,
					thumbnailUrl: item.snippet.thumbnails.default.url
				});
			});
		}

		return results;
	}
	public getVideosMatchingString(query:string): Observable<IYouTubeSearchResult[]>{
		const url = this.buildSearchUrlWithQuery(query);
		return this._http.get(url)
				.map(this.transformResponse);
	}
}