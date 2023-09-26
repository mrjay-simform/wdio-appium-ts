//npm run wdio wdio.conf.ts --spec forms.e2e.ts
import PO from '../../pageobjects/forms.page.js'
describe('Test user is able to interact with form screen', () => {
    it.only('should able to navigate to the forms page ', async () => {
        await driver.pause(5000);
        await console.log("App started.");
        await PO.navigateToForm();
        await console.log("App navigation complete.");
    })
    it.only('should able to add data in input field and verify text is reflecting.', async () => {
        await driver.pause(5000);
        await console.log("App started.");
        await PO.navigateToForm();
        await console.log("App navigation complete.");
        await PO.setInputfield("Hello World", true);
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
    // it('should able to click/open popup from active button', async() => {

    // })
    // it('should able to verify message from popup.', async() => {

    // })

})