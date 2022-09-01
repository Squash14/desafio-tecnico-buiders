const I = actor();
const common_page = require('./common_page');

module.exports = {

  texts: {
    subTitle: '~Você receberá um código de confirmação no número de telefone celular informado.'
  },

  fields: {
    phone: '~insira o numero de celular'
  },

  validatePhone(phone) {
    I.waitForElement(this.texts.subTitle, 10)
    I.waitForElement(this.fields.phone, 10)
    I.fillField(this.fields.phone, phone)
    common_page.clickButtonAdvance()
  }
}
