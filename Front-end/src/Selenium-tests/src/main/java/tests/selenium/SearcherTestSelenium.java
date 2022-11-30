package tests.selenium;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

import java.time.Duration;
import java.util.List;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.Select;

public class SearcherTestSelenium {

	private static final int TIME_TO_WAIT = 500;
	private static final int NUM_TEAMS = 10;
	private static final int INDEX_TEAM10 = 9;
	private static final String SCORE_CLASSNAME = "words";
	private static final String URL = "http://localhost:3000";
	private static WebDriver driver = null;
	
	@BeforeClass 
	public static void startSelenium(){
	    driver = new EdgeDriver();
	}
	
	@AfterClass
	public static  void closeSelenium() {
	    driver.quit();
	}
	
	@Test
	public void checkSearcher() 
	{
		String mainTitle="Atexis Company";
		String login="Login";
		String signup="Sign up";
		String titleSearch="Searcher:";
		String from="From:";
		String to="To:";
		String Typeoftrip="Type of trip:";
		String layOver="LayOver:";
		String luggage="Luggage:";
		String NPeople="NºPeople:";
		String empty="";
		String one="1";
		String oneway="One-way";
	
		
		driver.get(URL);
		
		//Testing TitlePage
		String title = driver.getTitle();
		assertEquals(mainTitle, title);
		
		//Testing TitleCompany
		WebElement titleCompany = driver.findElement(By.className("title"));
		assertEquals(mainTitle.toUpperCase(),titleCompany.getText().toUpperCase());
		
		//Testing Links
		List<WebElement> links = driver.findElements(By.className("link"));
		assertEquals(login,links.get(0).getText());
		assertEquals(signup,links.get(1).getText());
		
		//Testing Searcher title
		WebElement searcher = driver.findElement(By.className("Searcher"));
		assertEquals(titleSearch.toUpperCase(),searcher.getText());
		
		//Testing Searcher components
		List<WebElement> searcherLabels = driver.findElements(By.className("searcher-label"));
		assertEquals(from,searcherLabels.get(0).getText());
		assertEquals(to,searcherLabels.get(1).getText());
		assertEquals(Typeoftrip,searcherLabels.get(2).getText());
		assertEquals(layOver,searcherLabels.get(3).getText());
		assertEquals(luggage,searcherLabels.get(4).getText());
		assertEquals(NPeople,searcherLabels.get(5).getText());
		
		List<WebElement> selecters = driver.findElements(By.className("selecter"));
		
		Select origins = new Select(selecters.get(0));
		assertEquals(empty,origins.getFirstSelectedOption().getText());
		assertTrue(origins.getOptions().get(0).isSelected());
		
		Select destinations = new Select(selecters.get(1));
		assertEquals(empty,destinations.getFirstSelectedOption().getText());
		assertTrue(destinations.getOptions().get(0).isSelected());
		
		Select people = new Select(selecters.get(2));
		assertEquals(one,people.getFirstSelectedOption().getText());
		assertTrue(people.getOptions().get(0).isSelected());
		
		Select type = new Select(driver.findElement(By.className("type")));
		assertEquals(oneway,type.getFirstSelectedOption().getText());
		assertTrue(type.getOptions().get(0).isSelected());
		
		List<WebElement>checkboxes = driver.findElements(By.className("checkbox"));
		assertFalse(checkboxes.get(0).isSelected());
		assertFalse(checkboxes.get(1).isSelected());
		
		
		driver.manage().timeouts().implicitlyWait(Duration.ofMillis(TIME_TO_WAIT));
		
		
	}
	
	@Test
	public void checkSearcherHome() 
	{
		String mainTitle="Atexis Company";
		String login="Login";
		String signup="Sign up";
	
		WebDriver driver = new EdgeDriver();
		driver.get(URL+"/home");
		
		//Testing TitlePage
		String title = driver.getTitle();
		assertEquals(mainTitle, title);
		
		//Testing TitleCompany
		WebElement titleCompany = driver.findElement(By.className("title"));
		assertEquals(titleCompany.getText().toUpperCase(),mainTitle.toUpperCase());
		
		//Testing Links
		List<WebElement> links = driver.findElements(By.className("link"));
		assertEquals(login,links.get(0).getText());
		assertEquals(signup,links.get(1).getText());
		
		
		
		driver.manage().timeouts().implicitlyWait(Duration.ofMillis(TIME_TO_WAIT));
		
		driver.quit();
	}
}
