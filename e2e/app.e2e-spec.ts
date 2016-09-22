import { Ng2I18nExamplePage } from './app.po';

describe('ng2-i18n-example App', function() {
  let page: Ng2I18nExamplePage;

  beforeEach(() => {
    page = new Ng2I18nExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
