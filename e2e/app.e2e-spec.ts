import { MarkdownPreviewerPage } from './app.po';

describe('fcc-markdown-previewer App', function() {
  let page: MarkdownPreviewerPage;

  beforeEach(() => {
    page = new MarkdownPreviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
