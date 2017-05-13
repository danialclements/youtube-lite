import { YoutubeLitePage } from './app.po';

describe('youtube-lite App', () => {
  let page: YoutubeLitePage;

  beforeEach(() => {
    page = new YoutubeLitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
