import Common from "../utils/Common";
class FormsPage{
    private textView:string = "//android.widget.TextView";

    private get formsNavigation(){
        return $(this.textView+"[@text='Forms']");
    }

    private  get formsPageHeading(){
        return $("//android.widget.TextView[@text='Form components']");
    }

    private get inputField(){
        return $('~text-input');
    }

    private get inputResultField(){
        return $('~input-text-result');
    }

    private get toggleSwitch(){
        return $('~switch');
    }
    private get toggleSwitchResponse(){
        return $('~switch-text');
    }

    private get dropdown(){
        return $("//android.widget.EditText[@text='Select an item...']");
    }

    private get activeButton(){
        return $("//android.widget.TextView[@text='Active']");
    }

    private get inActiveButton(){
        return $("//android.widget.TextView[@text='Inactive']");
    }

    public async navigateToForm(){
        await this.formsNavigation.click();
        await driver.pause(5000);
        // expect(this.formsPageHeading.isExisting()).toBe(true); 
    }

    public async setInputfield(data: string |number, verify: boolean){ 
        await this.inputField.setValue(data);
        if(verify){
            expect(this.inputResultField.isExisting()).toBe(true); 
            const actualText = this.inputResultField.getText();
            expect(actualText).toBe(data);
        }
    }

    public async toggleSwith(toggleOn:boolean){
       
        let actualText = this.toggleSwitchResponse.getText();
        if((await actualText).includes("ON") && toggleOn){
            console.log("Switch is already on.");
        }else{
            console.log("Switch is off. Toggling it.");
            (await this.toggleSwitch).click();
            actualText = this.toggleSwitchResponse.getText();
            expect(actualText).toBe("Click to turn the switch ON");
        }
    }

    public async selectFromDropDown(option:string){
        if(!(await $("//android.widget.EditText[@text='"+option+"']")).isExisting()){
            (await this.dropdown).click();
            await driver.pause(2000);
            (await $("//android.widget.CheckedTextView[@text='"+option+"']")).click();
            expect((await $("//android.widget.EditText[@text='"+option+"']")).isExisting()).toBe(true);
        }else{
            console.log(option," is already Selected.");
        }

    }
    public async verifyWeAreOnFormsPage(){
        expect(this.formsPageHeading.isExisting()).toBe(true);  
    }
}


export default new FormsPage;