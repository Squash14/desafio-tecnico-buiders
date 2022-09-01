Feature: Registration BDD - GHERKIN
  I as user
  I would like to register my current location in the APP
  To display the current address and weather data for the region on the interface

  Scenario: Registration with success
    Given I on the home screen
    Then APP displays title and subtitle of HOME
    And the REGISTER and ENTER buttons
    Given I on the CELL REGISTRATION screen
    When I fill in the PHONE field
    And click on the forward button
    Then the APP displays the CONFIRMATION CODE screen
    Given I on the FULL NAME screen
    When I fill in the FULL NAME field
    And click on the forward button
    Then the APP displays the LOCATION screen
    Given I on the LOCATION screen
    When I view text about location
    And I click the auto find button
    Then the APP displays the SHARE LOCATION screen
    Given I on the SHARE LOCATION screen
    When I fill in the text about sharing location
    And click the yes button
    Then the APP displays the logged in HOME screen