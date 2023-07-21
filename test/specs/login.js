/**
 * test with page objects
 */
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.login('qa-assignment2', 'qa-Bynder2023!')
        browser.pause(4000);
        
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})

