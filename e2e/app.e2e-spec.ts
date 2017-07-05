import { JokesPage } from './app.po';

describe('jokes App', () => {
  let page: JokesPage;

  beforeEach(() => {
    page = new JokesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
