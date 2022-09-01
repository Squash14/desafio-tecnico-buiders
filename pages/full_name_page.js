const I = actor();
const common_page = require('./common_page');

module.exports = {

  texts: {
    subTitle: {ios: 'element ios here', android: '~Nome Completo'}
  },

  fields: {
    fullName: {ios: 'element ios here', android: '~Insira o nome completo'}
  },

  validateFullName(fullName) {
    common_page.validateTextTitle()
    I.waitForElement(this.texts.subTitle, 5)
    I.fillField(this.fields.fullName, fullName)
    common_page.clickButtonAdvance()
  }
}
