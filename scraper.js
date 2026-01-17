const { connect } = require('puppeteer-real-browser');
const fs = require('fs')

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function start(){
    const { browser, page } = await connect({
        headless: false,
        args: [],
        customConfig: {},
        turnstile: false,
        connectOption: {},
        disableXvfb: false,
        ignoreAllFlags: false,
    });

    const uname = "SnoozeBooy";
    const pword = "538538538";

    const url = "https://x.com/i/flow/login";
    await page.goto(url);
    // await page.waitForNetworkIdle({ idleTime: 1500 });

    // Force focus before typing
    

    // Small delay to avoid layout shift stealing focus
    await new Promise(r => setTimeout(r, 3000));
    await page.focus('input[name="text"]');
    for (const char of uname) {
        const delay = 500 + Math.random() * 400; // 80–200ms
        const error = getRandomInteger(0,10);
        if(error % 3 == 0){
            await page.type('input[name="text"]', 'a', { delay });
            await page.keyboard.press('Backspace', { delay });
        }
        await page.type('input[name="text"]', char, { delay });
    }

    await new Promise(r => setTimeout(r, 1000));
    await page.keyboard.press('Enter');
    


    await page.evaluate(() => {
        const btn = document.querySelector('div[role="button"]');
        if (btn) btn.click();
        else console.log("Didn't find")
    });

    // Press the Next button
    // await page.evaluate(() =>
    //     page.click('div[role="button"]')
    // );
    // await page.waitForNetworkIdle({ idleTime: 1500 });
    // ///////////////////////////////////////////////////////////////////////////////////
    // // Sometimes twitter suspect suspicious activties, so it ask for your handle/phone Number
    // const extractedText = await page.$eval("*", (el) => el.innerText);
    // if (extractedText.includes("Enter your phone number or username")) {
    //     await page.waitForSelector("[autocomplete=on]");
    //     await page.type("input[autocomplete=on]", uname);
    //     await page.evaluate(() =>
    //         document.querySelectorAll('div[role="button"]')[1].click()
    //     );
    //     await page.waitForNetworkIdle({ idleTime: 1500 });
    // }
    // ///////////////////////////////////////////////////////////////////////////////////
    // // Select the password input
    // await page.waitForSelector('[autocomplete="current-password"]');
    // await page.type('[autocomplete="current-password"]', pword, { delay: 50 });
    // // Press the Login button
    // await page.evaluate(() =>
    //     document.querySelectorAll('div[role="button"]')[2].click()
    // );
    // await page.waitForNetworkIdle({ idleTime: 2000 });

    // // Either close the browser and kill the fun, OR make a baby bot to tweet instead of you
    // await browser.close();

    // // await page.type('input[placeholder="Phone, email, or username"]', uname);
    // // await page.click('div[placeholder="Next"]')
    // // await page.type('input[placeholder="Password"]', pword);


}

start();