const I = actor();

module.exports = {

  buttons: {
    logout: {ios: 'element ios here', android: '~Botão Sair'}
  },

  text: {
    title: {ios: 'element ios here', android: '~Sowe'}
  },

  menu: {
    district: {ios: 'element ios here', android: '~Bairro do Clima Bom'},
    uf: {ios: 'element ios here', android: '~Sorocaba, SP'}
  },

  validateTexts() {
    I.waitForElement(this.text.title, 10)
  },

  clickButtonLogout() {
    I.tap(this.buttons.logout)
  },

  validateMenu() {
    I.waitForElement(this.text.district, 5)
    I.waitForElement(this.text.uf, 5)
  }
}
