

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@id="inputEmail"]');
    }

    get inputPassword () {
        return $('//input[@id="inputPassword"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get userMenuButton() {
        // return $('//a[class="admin-dropdown profile"]');
        return $('//li[@class="touch-block"]//a');
    }

    get logoutButton(){
        return $('//i[@class="fa fa-power-off"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logout () {
        await this.userMenuButton.click();
        await this.logoutButton.click();  
    }

    async checkWaveLogoDisplayed(){
        const logoWave = $('//img[@src="https://d1ra4hr810e003.cloudfront.net/visual/accountlogo/C63D0E08-B7D2-4B08-ABB54052F41999E0/small-24E1EF7E-4C3B-4DE1-BD3D66D65B4A1F0A.png"]');
        assert(logoWave.isDisplayed(), 'Logo is not displayed');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
