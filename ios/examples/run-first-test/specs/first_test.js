var assert = require('assert');

describe('Facebook Verification', () => {
  it('Login the page', async () => {
    const allowButton = $(`//XCUIElementTypeButton[@name="Allow"]`);
    await allowButton.click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    const userName = $(`//XCUIElementTypeTextField[@name="username-field"]`);
    console.log(await userName.isDisplayed(),`******`);
    await userName.setValue('Bala');
    const passwordField = $(`//XCUIElementTypeSecureTextField[@name="password-field"]`);
    console.log(await passwordField.isDisplayed(),`***1***`);
    await passwordField.setValue(`Bala`);
    // const loginButton = $(`//XCUIElementTypeButton[@name="login-button"]`);
    // console.log(await loginButton.isDisplayed(),`***2***`);
    // await loginButton.click();
    const forgetButton = $(`//XCUIElementTypeStaticText[@name="Forgot Password?"]`);
    console.log(await forgetButton.isDisplayed(),'***3***');
    await forgetButton.click();
  });
});
