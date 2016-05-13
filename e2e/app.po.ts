export class Angular2StartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-start-app h1')).getText();
  }
}
