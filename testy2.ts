import {Builder, Capabilities} from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from 'mocha-webdriver';

describe('testDrugi', function () {
    it('should say something', async function() {
        this.timeout(20000);
        await driver.get('file:///home/greg/Documents/WWW_2020/index.html');

        expect(await driver.find('#sTo').getText()).to.include('londyn');
        await driver.find('#name_form').sendKeys('Jan');
        await driver.find('#surname_form').sendKeys('Kowalski');
        await driver.find('button').doClick();
    });
})