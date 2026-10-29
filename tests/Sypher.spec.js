import{test, expect} from "@playwright/test";
const franchise=process.env.Franchise;
const product=process.env.Product;
test('Sypher',async({page})=>{
    console.log(franchise);
    console.log(product);
})