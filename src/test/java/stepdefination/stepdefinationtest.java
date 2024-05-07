package stepdefination;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.And;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.HashMap;

import Baseclass.RetryAnalyzer;
import Baseclass.baseclass;
import demo.POM.BrowserStackHomePage;
import demo.POM.BrowserStackSignUpPage;

public class stepdefinationtest extends baseclass {
	private BrowserStackHomePage homePage;
	private BrowserStackSignUpPage signUpPage;

	@Given("^Launch an application$")
	public void launchApplication() throws IOException {
		initializeDriver();
	}

	@When("^I navigate to homepage$")
	public void navigateToHomepage() throws Exception {
		BrowserStackHomePage bs = launchapplicationandnavigate();
		bs.veryHeader();
		bs.clickOnGetStarted();
		takeSnapShot("Start Page");
	}

	@Then("^Provide user details (.+), (.+), (.+)$")
	public void provideUserDetails(String fullName, String email, String password) throws Exception {
		BrowserStackSignUpPage bp = enterDetails();
		bp.veryHeader();
		bp.enterFullName(fullName);
		bp.enterBusinessEmail(email);
		bp.enterPasswrod(password);
		takeSnapShot("SignupPageagain");
		
	}
}
