const I = actor();

module.exports = {

  buttons: {
    register: '~Cadastrar',
    login: '~Entrar'
  },

  text: {
    title: '~Explore climas locais socialmente, com o Sowe',
    subtitle: '~Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa.'
  },

  validateTexts() {
    I.waitForElement(this.text.title, 5)
    I.waitForElement(this.text.subtitle, 5)
  },

  validateButtons() {
    I.waitForElement(this.buttons.register, 5)
    I.waitForElement(this.buttons.login, 5)
  },

  clickButtonRegister() {
    I.tap(this.buttons.register)
  },

  clickButtonLogin() {
    I.tap(this.buttons.login)
  }
}
