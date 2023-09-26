import Common from "../utils/Common";
class FormsPage {
    private textView: string = "//android.widget.TextView";

    private get formsNavigation() {
        return $(this.textView + "[@text='Forms']");
    }

    private get formsPageHeading() {
        return $("//android.widget.TextView[@text='Form components']");
    }

    private get inputField() {
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }

    private get inputResultField() {
        return $('//android.widget.TextView[@content-desc="input-text-result"]');
    }

    private get toggleSwitch() {
        return $('//android.widget.Switch[@content-desc="switch"]');
    }
    private get toggleSwitchResponse() {
        return $('//android.widget.TextView[@content-desc="switch-text"]');
    }

    private get dropdown() {
        return $("//android.widget.EditText[@text='Select an item...']");
    }

    private get activeButton() {
        return $("//android.widget.TextView[@text='Active']");
    }

    private get inActiveButton() {
        return $("//android.widget.TextView[@text='Inactive']");
    }

    public async navigateToForm() {
        await this.formsNavigation.click();
        await driver.pause(5000);
        // expect(this.formsPageHeading.isExisting()).toBe(true); 
    }

    public async setInputfield(data: string | number, verify: boolean) {

        await this.inputField.waitForExist()
        await console.log("Input Element found");
        (await this.inputField).click();
        await this.inputField.setValue(data);
        await driver.hideKeyboard();
        if (verify) {
            await driver.pause(3000);
            const actualText = (await this.inputResultField).getValue();
            await console.log("Actual Text is " + actualText);
            // expect(actualText).toBe(data);
        }

    }

    public async toggleSwith(toggleOn: boolean) {
        await driver.pause(3000);
        let actualText = await this.toggleSwitchResponse.getText();
        console.log("###### This response: ", actualText);
        if ((await actualText).includes("ON") && toggleOn) {
            console.log("Switch is already on.");
            (await this.toggleSwitch).click();
        } else {
            console.log("Switch is off. Toggling it.");
            (await this.toggleSwitch).click();
            actualText = await this.toggleSwitchResponse.getText();
            console.log(actualText);
            // expect(actualText).toBe("Click to turn the switch ON");
        }
    }

    public async selectFromDropDown(option: string) {
        console.log("Selecting options");
        await driver.pause(3000);
        (await this.dropdown).click();
        await driver.pause(2000);
        (await $("//android.widget.CheckedTextView[@text='" + option + "']")).click();
        
        //   expect((await $("//android.widget.EditText[@text='" + option + "']")).isExisting()).toBe(true);

    }
    public async verifyWeAreOnFormsPage() {
        //expect(this.formsPageHeading.isExisting()).toBe(true);
    }


    // Define a custom function to scroll down until the element is found
public async scrollDownToElement(elementSelector: string, maxScrollAttempts: number = 5): Promise<void> {
    let scrollAttempts = 0;
    let element: any | undefined;
  
    while (!element && scrollAttempts < maxScrollAttempts) {
      try {
        // Try to find the element
        element = await $(elementSelector);
      } catch (error) {
        // Element not found, scroll down
        await browser.touchAction([
          { action: 'press', x: 100, y: 800 },
          { action: 'wait', ms: 1000 }, // Adjust wait time as needed
          { action: 'moveTo', x: 100, y: 400 },
          { action: 'release' },
        ]);
  
        // Increment scroll attempts
        scrollAttempts++;
      }
    }
  
    if (!element) {
      throw new Error(`Element with selector '${elementSelector}' not found after scrolling.`);
    }
  }
}


export default new FormsPage;