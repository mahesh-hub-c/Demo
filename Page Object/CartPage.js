export class CartPage{
    constructor(page){
        this.page=page;
        this.submit=page.getByText(' Proceed to Buy ');
    }
    async clickSubmit(){
        await this.submit.click();
    }
}