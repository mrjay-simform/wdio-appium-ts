//npm run wdio wdio.conf.ts --spec forms.e2e.ts
import PO from '../../pageobjects/forms.page.js'
import Actions from '../../utils/Actions.js';
import Gestures from '../../utils/Gestures.js';
describe('Test user is able to interact with form screen', () => {
    it('should able to navigate to the forms page ', async () => {
        await driver.pause(5000);
        await console.log("App started.");
        await PO.navigateToForm();
        await console.log("App navigation complete.");
    })
    it('should able to add data in input field and verify text is reflecting.', async () => {
        await driver.pause(5000);
        await console.log("App started.");
        await PO.navigateToForm();
        await console.log("App navigation complete.");
        await PO.setInputfield("Hello World", false);
    })
    it('should able to toggle switch and message is changing to ON and off', async () => {
        await driver.pause(5000);
        await console.log("App started.");
        await PO.navigateToForm();
        await console.log("App navigation complete.");

        await PO.toggleSwith(true);
    })
    it('should able to select values from drop down', async () => {
        await driver.pause(5000);
        await console.log("App started.");
        await PO.navigateToForm();
        await console.log("App navigation complete.");

        await PO.selectFromDropDown("Appium is awesome");
    })
    it.only('should able to click/open popup from active button', async() => {
        await driver.pause(3000);
        (await $("//android.widget.TextView[@text='Swipe']")).click();
        await driver.pause(3000);
    
        //Refrence: https://developer.android.com/reference/android/support/test/uiautomator/UiScrollable
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollTextIntoView("You found me!!!")').click();
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView("COMPATIBLE")').click();
    
        // Gestures.checkIfDisplayedWithSwipeUp(await $("//android.widget.TextView[@text='You found me!!!']"),10);

        await driver.pause(3000);
        // await Actions.swipe("up");
    })
    // it('should able to verify message from popup.', async() => {

    // })



    
})