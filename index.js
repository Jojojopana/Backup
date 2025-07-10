const puppeteer = require('puppeteer');

(async () => {
  const SECRET_KEY = process.env.SECRET_KEY || 'youthgrowthcomunity123';
  const URL = `https://youthgrowthcomunity.rf.gd/scheduler.php?key=${SECRET_KEY}`;

  console.log(`Opening: ${URL}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle2' });

  console.log('Page content:');
  console.log(await page.content());

  await browser.close();
})();
