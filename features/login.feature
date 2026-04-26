Feature: Login Test

  Scenario Outline: Login with different credentials
    Given I navigate to practice test automation login page
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should verify the "<result>"

    Examples:
      | username  | password     | result                                                  |
      | student   | Password123  | Congratulations student. You successfully logged in!    |