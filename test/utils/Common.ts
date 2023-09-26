const Excel = require('exceljs');
// const path = require('path');

class Common {

    async pause(milliseconds: number) {
        await browser.pause(milliseconds);
    }

    /**
 * Helper function to wait for an element to be displayed on the page.
 *
 * @param {WebdriverIO.Element} element - The element to wait for.
 * @param {number} [timeout=10000] - The maximum time in milliseconds to wait for the element to be displayed.
 * @throws {Error} - Throws an error if the element is not displayed within the specified timeout.
 */
    async waitForElementDisplayed(element: WebdriverIO.Element, timeout = 20000) {
        await element.waitForDisplayed({ timeout });
    }

    /**
 * Checks if a toast message with the specified text is displayed on the screen.
 * This function attempts to find the toast message by inspecting the page source multiple times,
 * as toast messages might not be immediately available in the DOM when they appear.
 * The function will pause for a short duration between attempts to give time for the toast
 * to be fully rendered in the DOM.
 *
 * @param {string} toastText - The text of the toast message to check for.
 * @returns {boolean} - Returns `true` if the toast message is displayed, otherwise `false`.
 */
    async isToastMessageDisplayed(toastText: string) {
        const numberOfAttempts = 12; // Adjust the number of attempts as needed
        const waitTime = 200; // Adjust the wait time between attempts in milliseconds

        for (let i = 0; i < numberOfAttempts; i++) {
            await driver.pause(waitTime);
            const pageSource = await driver.getPageSource();
            if (pageSource.includes(toastText)) {
                console.log(`Toast message displayed ${i + 1}: ${toastText}`);
                return true;
            }
        }
        return false;
    }

    /**
* Reads data from an Excel file specified by the `filePath` and extracts values from the specified sheet.
*
* @param {string} filePath - The path of the Excel file to read data from.
* @param {string} sheetName - The name of the sheet in the Excel file to read data from.
* @returns {Array<string>} - An array of strings containing the extracted data from the Excel file.
*/
    async readDataFromExcel(filePath: string, sheetName: string) {
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(sheetName);

        const data: Array<string> = [];
        worksheet.eachRow((row: any, rowNumber: number) => {
            if (rowNumber > 1) { // Skip the header row
                data.push(row.getCell(1).value.toString()); // Assuming the mobile numbers are in the first column
            }
        });
        return data;
    }

    async varticalScroll(x: any, starty: any, endy: any) {
        await driver.touchAction([{ action: 'longPress', x: x, y: starty }, { action: 'moveTo', x: x, y: endy }, 'release']);
    }

}

export default new Common();