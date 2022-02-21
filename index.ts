import puppeteer from 'puppeteer';

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function puppeteerWorkflow(urlToTest: string) {
  const browser = await puppeteer.launch({
    ...(process.platform === 'linux'
      ? {
          executablePath: '/usr/bin/google-chrome-stable',
        }
      : {
          // If we're not on Linux, then maybe we're in development,
          // where we don't want a headless browser (we want to see what
          // is going on)
          headless: false,
        }),
  });
  const page = await browser.newPage();

  await page.goto(urlToTest);
  await wait(5000);
  await page.close();
  await browser.close();
}

puppeteerWorkflow('https://example.com');
