const { connect } = require('puppeteer-real-browser');
const fs = require('fs')

async function start(){
    const { browser, page } = await connect({
        headless: false,
        args: [],
        customConfig: {},
        turnstile: true,
        connectOption: {},
        disableXvfb: false,
        ignoreAllFlags: false,
    });

    const uname = "Littlebitch2003";
    const pword = "538538538";

    const url = "https://x.com/i/flow/login";

    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.type('input[placeholder="Phone, email, or username"]', uname);

    await page.type('input[placeholder="Password"]', uname);
}

start();