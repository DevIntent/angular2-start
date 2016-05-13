import { Angular2StartPage } from './app.po';

describe('angular2-start App', function() {
  let page: Angular2StartPage;

  beforeEach(() => {
    page = new Angular2StartPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-start works!');
  });
});
