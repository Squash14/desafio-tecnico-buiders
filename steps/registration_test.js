Feature('Registration TDD - RGR');

const {I} = inject();
const name = require('../Utils/name.js');
var faker = require('faker-br');

BeforeSuite(() => {
    console.log('BeforeSuite')
});

Before(() => {
    console.log('Before')
});

AfterSuite(() => {
    console.log('AfterSuite')
});

After(() => {
    console.log('After')
});

Scenario('Registration with success', async ({full_name_page, home_page, home_login_page, localization_page, phone_page}) => {

    const fullName = name.getName();
    var phoneNumber = faker.phone.phoneNumber();

    I.runOnAndroid(() => {
        console.log('Android here!!!!')
    });

    home_page.validateTexts()
    home_page.validateButtons()
    home_page.clickButtonRegister()
    phone_page.validatePhone(phoneNumber)
    full_name_page.validateFullName(fullName)
    localization_page.valiteTextLocalization()
    localization_page.clickYesModal()
    home_login_page.validateTexts()
});
