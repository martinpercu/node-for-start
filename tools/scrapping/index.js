const puppeteer = require('puppeteer');

(async () => {
    // all our code
    console.log('Lauch Browser');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var title_1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1')
        console.log(h1.innerHTML);
        return h1.innerHTML
    })

    console.log(title_1);


    console.log('Close browser');
    browser.close();
    console.log('Browser closed');
})();