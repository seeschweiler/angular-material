import { Ngmd01Page } from './app.po';

describe('ngmd01 App', () => {
  let page: Ngmd01Page;

  beforeEach(() => {
    page = new Ngmd01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
