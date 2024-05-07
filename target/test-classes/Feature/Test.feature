Feature: Title of your feature

  @Regression
  Scenario Outline: To Verify the fucntionality of user details
    Given Launch an application
    When I navigate to homepage
    Then Provide user details <fullname>, <email>, <password>
    
   Examples:
   |fullname| email | password|
   | TestUser1 | testuser1@gmail.com | password |
   | TestUser2 | testuser2@gmail.com | password2 |
   
   
    
  
    