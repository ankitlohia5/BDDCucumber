$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Test.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Verify the fucntionality of user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.step({
  "name": "I navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "name": "Provide user details \u003cfullname\u003e, \u003cemail\u003e, \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fullname",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "TestUser1",
        "testuser1@gmail.com",
        "password"
      ]
    },
    {
      "cells": [
        "TestUser2",
        "testuser2@gmail.com",
        "password2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Verify the fucntionality of user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationtest.launchApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationtest.navigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Provide user details TestUser1, testuser1@gmail.com, password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationtest.provideUserDetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Verify the fucntionality of user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Launch an application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationtest.launchApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to homepage",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationtest.navigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Provide user details TestUser2, testuser2@gmail.com, password2",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationtest.provideUserDetails(String,String,String)"
});
formatter.result({
  "status": "passed"
});
});