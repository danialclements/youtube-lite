import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { YouTubeSearchService } from './youtube-search.service';

TestBed.configureTestingModule({
  imports: [HttpModule],
  providers: [
    { provide: XHRBackend, useClass: MockBackend },
    YouTubeSearchService
  ]
});

describe('A YouTubeSearchService object', () => {
	describe('a getVideosMatchingString method', () => {
		it('should exist on the service', () => {
			inject([YouTubeSearchService], (service) => {
				expect(service.getVideosMatchingString).toBeDefined();
			});
		});
		
		it('should return an Observable<Array<IVideo>>', () => {
			inject([YouTubeSearchService], (service) => {

			});
		});
	});
});
