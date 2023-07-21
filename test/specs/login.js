/**
 * test with page objects
 */
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const LoginAssert = require('../pageobjects/login.assert')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('qa-assignment2', 'qa-Bynder2023!')
        browser.pause(5000)
        await LoginPage.logout()
    })
})

