const { I } = inject();

Given('I on the home screen', () => {
  I.waitForElement('~Explore climas locais socialmente, com o Sowe', 5)
});

Then('APP displays title and subtitle of HOME', () => {
  I.waitForElement('~Explore climas locais socialmente, com o Sowe', 5)
  I.waitForElement('~Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa.', 5)
});

Then('the REGISTER and ENTER buttons', () => {
  I.waitForElement('~Cadastrar', 5)
  I.waitForElement('~Entrar', 5)
  I.tap('~Cadastrar', 5)
});

Given('I on the CELL REGISTRATION screen', () => {
  I.waitForElement('~Você receberá um código de confirmação no número de telefone celular informado.', 10)
});

When('I fill in the PHONE field', () => {
  I.waitForElement('~insira o numero de celular', 10)
  I.fillField('~insira o numero de celular', '61982935040')
});

When('click on the forward button', () => {
  I.tap('~Botao Avancar')
});

Then('the APP displays the CONFIRMATION CODE screen', () => {
  // Does not display screen - BUG
});

Given('I on the FULL NAME screen', () => {
  I.waitForElement('~Cadastro', 5)
});

When('I fill in the FULL NAME field', () => {
  I.waitForElement('~Nome Completo', 5)
  I.fillField('~Insira o nome completo', 'Rafael Torres dos Santos')
  I.tap('~Botao Avancar')
});

Then('the APP displays the LOCATION screen', () => {
  I.waitForElement('~Localização', 5)
});

Given('I on the LOCATION screen', () => {
  I.waitForElement('~Localização', 5)
});

When('I view text about location', () => {
  I.waitForElement('~Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática.', 5)
});

When('I click the auto find button', () => {
  I.tap('~LOCALIZAÇÃO AUTOMÁTICA')
});

Then('the APP displays the SHARE LOCATION screen', () => {
  I.waitForElement('~Compartilhar a localização', 5)
});

Given('I on the SHARE LOCATION screen', () => {
  I.waitForElement('~Compartilhar a localização', 5)
});

When('I fill in the text about sharing location', () => {
  I.waitForElement('~Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.', 5)
});

When('click the yes button', () => {
  I.tap('~Sim')
});

Then('the APP displays the logged in HOME screen', () => {
  I.waitForElement('~Sowe', 5)
});
