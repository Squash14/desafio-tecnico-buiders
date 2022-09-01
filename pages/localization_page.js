const I = actor();

module.exports = {

  texts: {
    title: '~Localização',
    subTitle: '~Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática.',
    titleModal: '~Compartilhar a localização',
    subTitleModal: '~Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.'
  },

  buttons: {
    localizacao: '~LOCALIZAÇÃO AUTOMÁTICA',
    yes: '~Sim',
    no: '~Não'
  },

  valiteTextLocalization() {
    I.waitForElement(this.texts.title, 5)
    I.waitForElement(this.texts.subTitle, 5)
    I.tap(this.buttons.localizacao)
  },

  clickYesModal() {
    I.waitForElement(this.texts.titleModal, 5)
    I.waitForElement(this.texts.subTitleModal, 5)
    I.tap(this.buttons.yes)
  },

  clickNoModal() {
    I.waitForElement(this.texts.titleModal, 5)
    I.waitForElement(this.texts.subTitleModal, 5)
    I.tap(this.buttons.no)
  }
}
