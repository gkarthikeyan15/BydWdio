Feature: Login and Logout Functionality
    As a user
    I want to be able to log in and log out of the website
    So that I can access my account and secure my information

Scenario: Successful login
    Given I am on the login page
    When I enter the username "qa-assignment2" and password "qa-Bynder2023!"
    And I click on the "Login" button
    Then I should be logged in and redirected to the home page

Scenario: Unsuccessful login with incorrect password
    Given I am on the login page
    When I enter the username "qa-assignment2" and password "incorrect-password"
    And I click on the "Login" button
    Then I should see an error message indicating invalid credentials

Scenario: Unsuccessful login with invalid username
    Given I am on the login page
    When I enter an invalid username and the correct password "qa-Bynder2023!"
    And I click on the "Login" button
    Then I should see an error message indicating invalid credentials

Scenario: Logout when already logged in
    Given I am logged in to the website
    When I click on the "Logout" button
    Then I should be logged out and redirected to the login page

Scenario: Attempting to access a protected page without login
    Given I am not logged in
    When I try to access a protected page
    Then I should be redirected to the login page

Scenario: Remember me functionality
    Given I am on the login page
    When I check the "Remember me" checkbox
    And I enter the username "qa-assignment2" and password "qa-Bynder2023!"
    And I click on the "Login" button
    Then I should be logged in and redirected to the home page
    And the next time I visit the website, I should still be logged in

