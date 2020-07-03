Feature: Navigate and Login Smartos Website Successfully
    Scenario: Create a new user successfully with input all fields with macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen
        Given I login successfully to Dana train Page with dispatch account
        When I click on dispatch arrival and departure
        And I click on Create dispatch button
        And I choose propertie for dispatch
        And I input from number for dispatch
        And I input source number for dispatch
        And I input publisher for dispatch
        And I input title for dispatch
        And I input content for dispatch
        And I choose people handling for dispatch
        And I choose the file attach for dispatch
        And I click on Create dispatch button to save dispatch
        Then I verify create a new dispatch successfully with macbook-15 screen
        And I verify user logout successfully with dispatch account
        And I login successfully to Dana train Page with manager account to check the dispatch have sent

    