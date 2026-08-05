import{test,expect} from '@playwright/test';
import { HomePage } from '../Page Object/HomePage.js';
import { CartPage } from '../Page Object/CartPage.js';
const data=require('../data/testData.json');
// test('beforeEach',()=>{
//     
// })

test('Amazon',async({page})=>{
    const homePage=new HomePage(page);
    const cartPage=new CartPage(page);
    await homePage.launchURL();

    // await homePage.searchFor();
    // await homePage.clickHamburger();

    // await homePage.clickLanguage();
    // await homePage.clickCart();
    // await homePage.clickAccount();
    await homePage.addShirtsToCart();
    //await cartPage.clickSubmit();
//    await page.close();
   
});

