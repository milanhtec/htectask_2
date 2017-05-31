import { HtectaskPage } from './app.po';

describe('htectask App', () => {
  let page: HtectaskPage;

  beforeEach(() => {
    page = new HtectaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
