import { RoterAppPage } from './app.po';

describe('roter-app App', () => {
  let page: RoterAppPage;

  beforeEach(() => {
    page = new RoterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
