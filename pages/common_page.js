const I = actor();

module.exports = {

  texts: {
    title: {ios: 'element ios here', android: '~Cadastro'}
  },

  buttons: {
    advance: {ios: 'element ios here', android: '~Botao Avancar'}
  },

  validateTextTitle() {
    I.waitForElement(this.texts.title, 5)
  },

  clickButtonAdvance() {
    I.tap(this.buttons.advance)
  }
}
