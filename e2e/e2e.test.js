import puppeteer from 'puppeteer';

jest.setTimeout(20000);

describe('Popuper form', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitFor('.widget-window');
    await page.waitFor('.widget-button');
  });

  afterAll(async () => {
    await browser.close();
  });
});
