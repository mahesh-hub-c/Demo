const data = require('../data/testData.json');
export class HomePage {
    constructor(page) {
        this.page = page;
        this.search = page.locator('#twotabsearchtextbox');
        this.url = 'https://www.amazon.in/';
        this.hamburger = page.locator('.hm-icon');
        this.language = page.locator(".icp-nav-link-inner");
        this.account = page.locator("#nav-link-accountList");
        this.close = page.locator(".nav-sprite.hmenu-close-icon").nth(0);
        this.cart = page.locator('#nav-cart');
        this.continue = page.getByRole('button', { name: 'Continue shopping' });
        this.option = page.getByRole('button', { name: 'Mobiles, Computers' });
        this.monitors = page.getByText('Monitors').nth(0);
        this.products = page.locator("div[role='listitem'] div[class='sg-col-inner']");
        this.productContainer=page.locator("div[class='listitem']");
    }
    async launchURL() {
        await this.page.goto(this.url);
    }

    async searchFor() {
        await this.search.highlight();
        await this.search.fill(data.searchKeyword);
        await this.search.press('Backspace')
        await this.search.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.goBack();


    }
    async clickHamburger() {
        await this.hamburger.highlight();
        await this.hamburger.click();
        await this.option.highlight();
        await this.option.click();
        // await this.monitors.highlight();
        // await this.monitors.scrollIntoViewIfNeeded();
        // await this.monitors.click();
        await this.close.click();
    }
    async clickLanguage() {
        await this.language.highlight();
        await this.language.click();
        await this.page.goBack();
    }
    async clickAccount() {
        await this.account.highlight();
        await this.account.hover();
        await this.account.click();
        await this.page.goBack();
    }
    async addShirtsToCart(count) {
        await this.search.fill(data.newSreachKeyword);
        await this.search.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
        let addedCount = 0;
        const products=await this.products.all();
        console.log(products.length);
        for (let i = 0; i < products.length; i++) {
            const priceCount = await this.productContainer.locator(".a-price-whole").count();
            let price;
            if(priceCount>0){
                 price = (await this.productContainer.locator(".a-price-whole").textContent()).replace(/,/g,"");
                 console.log(price);
                 
            }
            const addTocart = await this.productContainer.getByRole('button', { name: 'Add to cart' });
            const addToCartAvailable=await this.productContainer.getByRole('button', { name: 'Add to cart' }).count();
            const container = this.page.locator('.a-popover.a-popover-modal.a-declarative');
            const productName = await this.productContainer.locator("div[class='sg-col-inner'] h2");
            // console.log(await productName);
            // const intPrice = parseInt(await price);
            // if (intPrice < 1000 && addToCartAvailable>0) {
            //     addedCount++
            //     //console.log(await productName.textContent());
            //     console.log(intPrice);
            //     await addTocart.click();
            //     await container.getByRole('button', { name: 'Add to cart' }).highlight();
            //     await container.getByRole('button', { name: 'Add to cart' }).click();
            //     if (addedCount > 5) {
            //         break;
            //     }
            // }
        }

    }
    async clickCart() {
        await this.cart.highlight();
        await this.cart.click();
    }
}