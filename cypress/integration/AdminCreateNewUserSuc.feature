Feature: Navigate and Login Smartos Website Successfully
    Scenario: Create a new user successfully with input all fields on macbook-15 screen
        Given I navigate to Smartos website with macbook-15 screen 1
        Given I login successfully to Dana train Page
        When I click on user page
        And I click on create button to create a new user
        And I choose image for user
        And I input username for Van Thu account
        And I input fullname for Van Thu account
        And I input email for Van Thu account
        And I input department for Van Thu account
        And I input position for Van Thu account
        And I input password for Van Thu account
        And I choose access create notification
        And I click on create button to save a new user
        Then I verify create a new user successfully with macbook-15 screen
        And I logout user successfully in the mac size
        Then I login with user's account create recently successfully with macbook-15 sreen 

    Scenario: Create a new user successfully with input all fields on samsung-s10 screen
        Given I navigate to Smartos website with samsung-s10 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I click on create button to create a new user
        And I choose image for user
        And I input username for Giam Doc account
        And I input fullname for Giam Doc account
        And I input email for Giam Doc account
        And I input department for Giam Doc account
        And I input position for Giam Doc account
        And I input password for Giam Doc account
        And I choose access create notification
        And I click on create button to save a new user in phone size
        Then I verify create a new user successfully with samsung-s10 screen
        And I logout user successfully in the phone size
        Then I login with user's account create recently successfully with samsung-s10 screen

    Scenario: Create a new user successfully with input all fields on iphone-6 screen
        Given I navigate to Smartos website with iphone-6 screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I click on create button to create a new user
        And I choose image for user
        And I input username for Truong Phong account
        And I input fullname for Truong Phong account
        And I input email for Truong Phong account
        And I input department for Truong Phong account
        And I input position for Truong Phong account
        And I input password for Truong Phong account
        And I choose access create notification
        And I click on create button to save a new user in phone size
        Then I verify create a new user successfully with iphone-6 screen
        And I logout user successfully in the phone size
        Then I login with user's account create recently successfully with iphone-6 screen

    Scenario: Create a new user successfully with input all fields on iphone-6 plus screen
        Given I navigate to Smartos website with iphone-6 plus screen
        Given I login successfully to Dana train Page
        When I click on home icon
        And I click on create button to create a new user
        And I choose image for user
        And I input username for Nhan Vien account
        And I input fullname for Nhan Vien account
        And I input email for Nhan Vien account
        And I input department for Nhan Vien account
        And I input position for Nhan Vien account
        And I input password for Nhan Vien account
        And I choose access create notification
        And I click on create button to save a new user in phone size
        Then I verify create a new user successfully with iphone-6 plus screen
        And I logout user successfully in the phone size
        Then I login with user's account create recently successfully with iphone-6 plus screen
        And I verify write data to excel file successfully
        And I verify save file with format json file successfully
