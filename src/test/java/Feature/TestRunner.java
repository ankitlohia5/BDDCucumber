package Feature;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\Feature\\Test.feature",
glue = {"stepdefination"}, 
plugin = {"json:target/jsonReports/cucumber-report.json", "html:target/htmlReports"}, 
tags="@Regression")
public class TestRunner {

}
