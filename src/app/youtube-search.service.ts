import { Injectable } from '@angular/core';
import { IYouTubeSearchResult } from './youTubeSearchResult';

import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class YouTubeSearchService {
	private apiKey: string = 'AIzaSyDqBbZ4g7Nk8E09Xs_xYD8ZjSedP1gJ3DM';
	private apiUrlRoot: string = 'https://www.googleapis.com/youtube/v3/search';
	private maxResults: any = 25;
	private getDefaultParams(): URLSearchParams {
		const params = new URLSearchParams();
		params.set('part', 'snippet');
		params.set('key', this.apiKey);
		params.set('maxResults', this.maxResults);
		return params;
	}
	constructor(private _http: Http) {}
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
		const params = this.getDefaultParams();
		
		// Add query parameter
		params.set('q', query);

		return this._http.get(this.apiUrlRoot, { search: params })
			.map(this.transformResponse);
	}
}