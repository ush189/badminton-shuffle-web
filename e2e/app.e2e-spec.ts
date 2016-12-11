import { BadmintonShufflePage } from './app.po';

describe('badminton-shuffle App', function() {
  let page: BadmintonShufflePage;

  beforeEach(() => {
    page = new BadmintonShufflePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
