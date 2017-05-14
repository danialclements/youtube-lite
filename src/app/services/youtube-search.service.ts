import { Injectable } from '@angular/core';
import { IYouTubeSearchResult } from '../youTubeSearchResult';

import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class YouTubeSearchService {
	private apiKey: string = 'AIzaSyDqBbZ4g7Nk8E09Xs_xYD8ZjSedP1gJ3DM';
	private urlRoot: string = "https://www.googleapis.com/youtube/v3"

	private maxResults: any = 25;
	private getContentDetailsParams(): URLSearchParams {
		const params = new URLSearchParams();
		params.set('part', 'contentDetails');
		params.set('key', this.apiKey);
		return params;
	}
	private getSearchParams(): URLSearchParams {
		const params = new URLSearchParams();
		params.set('part', 'snippet');
		params.set('key', this.apiKey);
		params.set('maxResults', this.maxResults);
		params.set('type', 'video');
		return params;
	}
	constructor(private _http: Http) {}
	private transformResponse(response: Response): IYouTubeSearchResult[] {
		const json = response.json(),
			results = <IYouTubeSearchResult[]> [];

		if (json.items && json.items.length) {
			json.items.forEach((item) => {
				results.push({
					id: item.id.videoId,
					publishedDate: item.snippet.publishedAt,
					title: item.snippet.title,
					description: item.snippet.description,
					thumbnailUrl: item.snippet.thumbnails.default.url,
					duration: null
				});
			});
		}

		return results;
	}
	private getContentDetailsForVideos(searchResults: IYouTubeSearchResult[]) {
		let ids = searchResults.map((result) => result.id),
			url = `${this.urlRoot}/videos`,
			params = this.getContentDetailsParams();
		
		// Add the ids to the request
		params.set('id', ids.toString());
		
		return this._http.get(url, { search: params })
				.map((response: Response) => {
					let json = response.json(),
						items = json.items;

					if (items && items.length) {
						items.forEach((item) => {
							let result = searchResults.find(searchResult => searchResult.id === item.id);
							result.duration = item.contentDetails.duration;
						});
					}
					return searchResults;
				});
	}
	public getVideosMatchingString(query:string): Observable<IYouTubeSearchResult[]>{
		const url = `${this.urlRoot}/search`
		const params = this.getSearchParams();
		
		// Add query parameter
		params.set('q', query);

		return this._http
			.get(url, { search: params })
			.map(this.transformResponse)
			.flatMap(this.getContentDetailsForVideos.bind(this));
	}
}