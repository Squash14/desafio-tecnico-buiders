const I = actor();

module.exports = {

  fields: {
    celular: '~insira o numero de celular',
    nomeCompleto: '~Insira o nome completo'
  },

  buttons: {
    cadastrar: '~Cadastrar',
    avancar: '~Botao Avancar',
    sim: '~Sim',
    nao: '~Não'
  },

  validateLocalizacao(celular, nomeCompleto) {
    I.waitForElement(this.buttons.cadastrar, 10)
    I.tap(this.buttons.cadastrar)
    I.waitForElement(this.fields.celular, 10)
    I.fillField(this.fields.celular, celular)
    I.tap(this.buttons.avancar)
    I.waitForElement(this.fields.nomeCompleto, 10)
    I.fillField(this.fields.nomeCompleto, nomeCompleto)
    I.tap(this.buttons.avancar)
  }
}
