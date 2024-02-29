var assert = require('assert');

describe('Search Happymod Functionality', () => {
  it('can find search results', async () => {
    // await new Promise(resolve => setTimeout(resolve, 10000));
const buttonSelector = $(`//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]`);
await buttonSelector.click();
const gameButton = $(`//android.widget.TextView[@text="Game"]`);
await gameButton.click();
const gameVerify = await $(`//android.widget.TextView[@resource-id="com.happymod.apk:id/item_home_title_text"]`).getText();
console.log(gameVerify,`!!!!!Game**`);
expect(gameVerify).toEqual(`Recommended game mods`);
//await new Promise(resolve => setTimeout(resolve, 10000));
const paidButton = await $(`//android.widget.TextView[@resource-id="com.happymod.apk:id/paid"]`);
console.log(`************1************`);
await paidButton.click();
console.log(`************2************`)
const newCollection = $(`//android.widget.TextView[@text="New"]`);
await newCollection.click();
const backButton = $(`//android.widget.ImageView[@resource-id="com.happymod.apk:id/iv_black"]`);
await backButton.click();
const buttonApp = $(`//android.widget.TextView[@text="App"]`);
await buttonApp.click();
const searchButton = $(`//android.widget.TextView[@resource-id="com.happymod.apk:id/search_input_parent"]`);
await searchButton.click();
const searchButton1 = $(`//android.widget.EditText[@resource-id="com.happymod.apk:id/commit_et"]`);
console.log(await searchButton1.isDisplayed(),`******`);
await searchButton1.setValue(`Instagram`);
const searchButton2 = $(`//android.widget.ImageView[@resource-id="com.happymod.apk:id/imageview_search"]`);
console.log(await searchButton2.isDisplayed(),`!!!!!!`);
await searchButton2.click();

//await new Promise(resolve => setTimeout(resolve, 10000));
// const InstagramButton = $(`//android.widget.TextView[@resource-id="com.happymod.apk:id/app_name" and @text="Instagram"]`);
// await new Promise(resolve => setTimeout(resolve, 10000));
// await InstagramButton.click();

// const downloadButton = $(`//android.widget.FrameLayout[@resource-id="com.happymod.apk:id/fl_download"]/android.widget.ImageView`);
// await downloadButton.click();

//verfiy instagram
// const instagramMessage = await $(`//android.widget.TextView[@resource-id="com.happymod.apk:id/app_name" and @text="Instagram"]`).getText();
// console.log(instagramMessage,`!!!!!Instagram**`);
// expect(instagramMessage).toEqual(`Instagram`);







    
    // if (await continueButton.isVisible()){
    //   await continueButton.click();
    // }
    // const user = await $(`(//android.widget.FrameLayout[@resource-id="com.facebook.katana:id/(name removed)"])[2]/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText`);
    // await user.setValue(`9626868774`);
    // const password = await $(`(//android.widget.FrameLayout[@resource-id="com.facebook.katana:id/(name removed)"])[2]/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup`);
    // //await password.click();
    // document.getElementById('00000000-0000-802f-ffff-ffff0000005c').setAttribute('value','test');
    // //await password.setValue(`Bala@efm`);
    // const loginButton = await $(`//android.view.View[@content-desc="Log in"]`);
    // await loginButton.click();

    // await $(`//android.widget.Button[@resource-id="com.microsoft.todos:id/sign_in_button"]`).click();
    // const next = await $(`//android.widget.Button[@resource-id="idSIButton9"]`);
    // //await new Promise(resolve => setTimeout(resolve, 20000));
    // await next.waitForDisplayed();
    // console.log(await next.isDisplayed(),`******`);
    // await next.click();
    // await new Promise(resolve => setTimeout(resolve, 10000));


  });
});
