//IMAGE VARIABLES
var pressStart : Texture2D; //Texture for title screen
var multiPlayerImage : Texture2D; //Texture for "Fight!" button
var trainingImage : Texture2D; //Texture for "Training" button
var optionsImage : Texture2D; //Texture for "Options" button
var extrasImage : Texture2D; //Texture for "Extras" button
var backImage : Texture2D; //Texture for the back button
var musicImage : Texture2D; //Texture that will be used to display "Music" in Options
var soundImage : Texture2D; //Texture that will be used to display "Sound" in Options
var controlsImage : Texture2D; //Texture that will be used to display "Controls" in Options
var showdownLogo : Texture2D; //Texture for the logo
var extrasAchievementsImage : Texture2D; //Texture for the Achievements Extras Menu Button
var extrasChallengesImage : Texture2D; //Texture for the Challenges Extras Menu Button
var extrasExhibitsImage : Texture2D; //Texture for the Exhibits Extras Menu Button
var extrasNotificationsImage : Texture2D; //Texture for the Notifications Extras Menu Button
var extrasGalleryImage : Texture2D; //Texture for the Gallery Extras Menu Button
var extrasStatisticsImage : Texture2D; //Texture for the Statistics Extras Menu Button
var extrasSoundTestImage : Texture2D; //Texture for the Sound Test Extras Menu Button
var extrasCreditsImage : Texture2D; //Texture for the Credits Extras Menu Button 

//--Achievement Images--
//----Locked Achievements----
var lockedAchievementImageBT : Texture2D;
var lockedAchievementImageBC : Texture2D;
var lockedAchievementImageBB : Texture2D;
var lockedAchievementImageSF : Texture2D;
var lockedAchievementImageH : Texture2D;
var lockedAchievementImageSS : Texture2D;
var lockedAchievementImageKoKT : Texture2D;
var lockedAchievementImageKoKK : Texture2D;
var lockedAchievementImageKoMT : Texture2D;
var lockedAchievementImageKoMK : Texture2D;
var lockedAchievementImageFaI : Texture2D;
var lockedAchievementImageBR : Texture2D;
var lockedAchievementImageHA : Texture2D;
var lockedAchievementImageR : Texture2D;
var lockedAchievementImageRO : Texture2D;
var lockedAchievementImageNaD : Texture2D;
var lockedAchievementImageGyW : Texture2D;
var lockedAchievementImageCbtB : Texture2D;
var lockedAchievementImageISE : Texture2D;
var lockedAchievementImageAP : Texture2D;
//----Unlocked Achievements----
var unlockedAchievementImageBT : Texture2D;
var unlockedAchievementImageBC : Texture2D;
var unlockedAchievementImageBB : Texture2D;
var unlockedAchievementImageSF : Texture2D;
var unlockedAchievementImageH : Texture2D;
var unlockedAchievementImageSS : Texture2D;
var unlockedAchievementImageKoKT : Texture2D;
var unlockedAchievementImageKoKK : Texture2D;
var unlockedAchievementImageKoMT : Texture2D;
var unlockedAchievementImageKoMK : Texture2D;
var unlockedAchievementImageFaI : Texture2D;
var unlockedAchievementImageBR : Texture2D;
var unlockedAchievementImageHA : Texture2D;
var unlockedAchievementImageR : Texture2D;
var unlockedAchievementImageRO : Texture2D;
var unlockedAchievementImageNaD : Texture2D;
var unlockedAchievementImageGyW : Texture2D;
var unlockedAchievementImageCbtB : Texture2D;
var unlockedAchievementImageISE : Texture2D;
var unlockedAchievementImageAP : Texture2D;


//AUDIO VARIABLES
var audio1 : AudioSource; //Creates an Audio Source which will be used for Music
var audio2 : AudioSource; //Creates an Audio Source which will be used for SFX
//var audio3 : AudioSource; //Creates an Audio Source which will be used for Voices
var mainMenuTheme: AudioClip; //Variable for Main Menu Music
var startToMain : AudioClip; //Variable for Start Menu Sound
var mainMenuClick : AudioClip; //Variable for clicking a Main Menu button
var backClick : AudioClip; //Variable for clicking the Back button

//SETTING VARIABLES
var locationColor : Color; //Color recorded to test for Alpha later
static var menu : int = 0; //Creates a Public Variable for the menu sections
var leftMouseCheck : int = 0; 
static var musicVolume : float = 1; //Creates a public variable to record Music Volume levels 
static var soundVolume : float = 1; //Creates a public variable to record Sound Volume levels
static var extrasMenu : int = 0; //Creates a public variable for Extras menu sections
var widgetsEarned : int = 0; //Total widgets earned
var widgetsSpent : int = 0; //Total widgets spent
var widgetsRemaining : int = (widgetsEarned - widgetsSpent); //Widgets that can be spent

//STATS VARIABLES
var numberKOs = 0; //Number of KOs
var numberTKOs = 0; //Number of TKOs
var numberSDs = 0; //Number of Self Destructs
var favoriteChar : String = "N/A"; //Name of the most-used character
var numberFightsComplete = 0; //Counts all fights that were completed
var numberFightsAborted = 0; //Counts all fights that were ended before completion
var numberFightsWStock = 0; //Counts all fights that involved stock
var numberFightsOStock = 0; //Counts all fights with only stock
var numberFightsWTime = 0; //Counts all fights that involved time
var numberFightsOTime = 0; //Counts all fights with only time
var numberFightsWWidgets = 0; //Counts all fights that involved widgets
var numberFightsOWidgets = 0; //Counts all fights with only widgets
var numberFightsAll = 0; //Counts all fights with all three types
var numberFightsOTahu = 0; //Counts all fights using only Tahu
var numberFightsOKopaka = 0; //Counts all fights using only Kopaka
var numberFightsBCharacters = 0; //Counts all fights with both Characters
var numberFightsTrueShowdown = 0; //Counts all 1v1 FFA fights with Tahu and Kopaka
var numberFightsSTeams = 0; //Counts all 2v2 team matches where the teams have two of the same character
var pressedStartAmount = 0; //Records how many times the player has pressed start
pressedStartAmount = PlayerPrefs.GetInt("Start Amount");
var pressedFightAmount = 0; //Records how many times the player pressed the Fight button
var pressedTrainingAmount = 0; //Records how many times the player pressed the Training button
var pressedExtrasAmount = 0; //Records how many times the player pressed the Extras button
var pressedOptionsAmount = 0; //Records how many times the player pressed the Options button
var pressedAchievementsAmount = 0; //Records how many times the player pressed the Achievements button
pressedAchievementsAmount = PlayerPrefs.GetInt("Achievement Amount");
var pressedChallengesAmount = 0; //Records how many times the player pressed the Challenges button
pressedChallengesAmount = PlayerPrefs.GetInt("Challenges Amount");
var pressedExhibitsAmount = 0; //Records how many times the player pressed the Exhibits button
pressedExhibitsAmount = PlayerPrefs.GetInt("Exhibits Amount");
var pressedNotificationsAmount = 0; //Records how many times the player pressed the Notifications Button
pressedNotificationsAmount = PlayerPrefs.GetInt("Notifications Amount");
var pressedGalleryAmount = 0; //Records how many times the player pressed the Gallery button
pressedGalleryAmount = PlayerPrefs.GetInt("Gallery Amount");
var pressedSoundTestAmount = 0; //Records how many times the player pressed the Sound Test button
pressedSoundTestAmount = PlayerPrefs.GetInt("Sound Test Amount");
var pressedStatisticsAmount = 0; //Records how many times the player pressed the Statistics Button
pressedStatisticsAmount = PlayerPrefs.GetInt("Statistics Amount");
var pressedCreditsAmount = 0; //Records how many times the player pressed the Credits Button
pressedCreditsAmount = PlayerPrefs.GetInt("Credits Amount");

function OnGUI () {
	
//Start Menu
if (menu == 0)
	{
	if(GUI.Button (Rect(0,0,Screen.width,Screen.height),pressStart, "label"))	
		{
			menu = 1;
			audio2.PlayOneShot(startToMain);
			pressedStartAmount++;
			PlayerPrefs.SetInt("Start Amount",pressedStartAmount);
		}
	if (Input.GetKeyDown(ControlSetup.acceptButton))
		{
			menu = 1;
			audio2.PlayOneShot(startToMain);
			pressedStartAmount++;
			PlayerPrefs.SetInt("Start Amount",pressedStartAmount);
		}
	}
	
//Main Menu	
if (menu == 1)
	{
	GUI.Label (Rect (Screen.width*.05,Screen.height*.15,Screen.width*.425,Screen.height*.375), multiPlayerImage); //Creates a label with the "multiPlayerImage" texture [necessary for functional code below]
		
	GUI.Label (Rect (Screen.width*.525,Screen.height*.15,Screen.width*.425,Screen.height*.375), trainingImage); //Creates a label with the "trainingImage" texture [necessary for the functional code below]

	GUI.Label (Rect (Screen.width*.05,Screen.height*.575,Screen.width*.425,Screen.height*.375), extrasImage); //Creates a label with the "extrasImage" texture [necessary for the functional code below]		
						
	GUI.Label (Rect (Screen.width*.525,Screen.height*.575,Screen.width*.425,Screen.height*.375), optionsImage); //Creates a label with the "optionsImage" texture [necessary for the functional code below]
		
	
	GUI.Label (Rect (Screen.width*.4,0,Screen.width*.2,Screen.height*.15), showdownLogo); //Displays the Showdown logo at the top of the screen
	
	}
	
//Options Menu
if (menu == 2)
	{
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),backImage)) //Creates back button
		{
			menu = 1;
			audio2.PlayOneShot(backClick);
		}
	musicVolume = GUI.HorizontalSlider(Rect(Screen.width*.25, Screen.height*.2, Screen.width*.5,Screen.height*.05), musicVolume, 0, 1); //Creates a slider to change the Music Volume
	soundVolume = GUI.HorizontalSlider(Rect(Screen.width*.25, Screen.height*.35, Screen.width*.5,Screen.height*.05), soundVolume, 0, 1); //Creates a slider to change the Sound Volume
	GUI.Box (Rect(Screen.width*.05, Screen.height*.15, Screen.width*.15, Screen.height*.1), musicImage); //Displays the image label for the Music volume
	GUI.Box (Rect(Screen.width*.05, Screen.height*.3, Screen.width*.15, Screen.height*.1), soundImage); //Displays the image label for the the Sound volume
	GUI.Box (Rect(Screen.width*.8, Screen.height*.15, Screen.width*.15, Screen.height*.1), ((Mathf.Round(musicVolume*100))) + "%"); //Determines and displays the percentage of the Music volume
	GUI.Box (Rect(Screen.width*.8, Screen.height*.3, Screen.width*.15, Screen.height*.1), ((Mathf.Round(soundVolume*100))) + "%"); //Determines and displays the percentage of the Sound volume
	if (GUI.Button(Rect(Screen.width*.25,Screen.height*.5,Screen.width*.5,Screen.height*.45), controlsImage)) //Creates the "Controls" button
		{
			menu = 3;
		}
	}

//Extras Menu
if (menu == 5)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage)) //Creates back button
		{
			menu = 1;
			audio2.PlayOneShot(backClick);
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.425,Screen.height*.175), extrasAchievementsImage)) //Creates achievement button [should be changed to the same style "button" as the main menu]
		{
			menu = 6;
			extrasMenu = 1;
			pressedAchievementsAmount++;
			PlayerPrefs.SetInt("Achievements Amount", pressedAchievementsAmount);
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.325,Screen.width*.425,Screen.height*.175), extrasChallengesImage)) //Creates challenges button [see above]
		{
			//menu = 6;
			//extrasMenu = 2;
			pressedChallengesAmount++;
			PlayerPrefs.SetInt("Challenges Amount", pressedChallengesAmount);
			print("Coming Soon");
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.55,Screen.width*.425,Screen.height*.175), extrasExhibitsImage)) //Creates exhibits button [see above]
		{
			//menu = 6;
			//extrasMenu = 3;
			pressedExhibitsAmount++;
			PlayerPrefs.SetInt("Exhibits Amount", pressedExhibitsAmount);
			print("Coming Soon");
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.775,Screen.width*.425,Screen.height*.175), extrasNotificationsImage)) //Creates notifications button [see above]
		{
			menu = 6;
			extrasMenu = 4;
			pressedNotificationsAmount++;
			PlayerPrefs.SetInt("Notifications Amount", pressedNotificationsAmount);
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.1,Screen.width*.425,Screen.height*.175), extrasGalleryImage)) //Creates gallery button [see above]
		{
			//menu = 6;
			//extrasMenu = 5;
			pressedGalleryAmount++;
			PlayerPrefs.SetInt("Gallery Amount", pressedGalleryAmount);
			print("Coming Soon");
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.325,Screen.width*.425,Screen.height*.175), extrasSoundTestImage)) //Creates sound test button [see above]
		{
			//menu = 6;
			//extrasMenu = 6;
			pressedSoundTestAmount++;
			PlayerPrefs.SetInt("Sound Test Amount", pressedSoundTestAmount);
			print("Coming Soon");
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.55,Screen.width*.425,Screen.height*.175), extrasStatisticsImage)) //Creates statistics button [see above]
		{
			menu = 6;
			extrasMenu = 7;
			pressedStatisticsAmount++;
			PlayerPrefs.SetInt("Statistics Amount", pressedStatisticsAmount);
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.775,Screen.width*.425,Screen.height*.175), extrasCreditsImage)) //Creates credits button [see above]
		{
			menu = 6;
			extrasMenu = 8;
			pressedCreditsAmount++;
			PlayerPrefs.SetInt("Credits Amount", pressedCreditsAmount);
			if (pressedCreditsAmount == 1)
				{
					Achievements.achieve[20] = 1; //Unlocks 20th achievement
					widgetsEarned = widgetsEarned + 5; //Adds 5 widgets to total widgets
				}
		}
}

if (menu == 6)
{

//Achievements Menu
if (extrasMenu == 1)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage)) //creates back button
		{
			menu = 5;
			extrasMenu = 0;
			audio2.PlayOneShot(backClick);
		}
	
	GUI.Label(Rect(Screen.width*.15,10,Screen.width*.175,Screen.height/15),"Unlocked: " + Achievements.achieveComplete);
	GUI.Label(Rect(Screen.width*.325,10,Screen.width*.175,Screen.height/15),"Percentage: " + (Mathf.Round(Achievements.achievePercent*100)));
	GUI.Label(Rect(Screen.width*.5,10,Screen.width*.175,Screen.height/15),"Widgets Earned: " + widgetsEarned);
	GUI.Label(Rect(Screen.width*.675,10,Screen.width*.175,Screen.height/15),"Widgets Remaining: " + widgetsRemaining);
	
	//Locked
	if (Achievements.achieve[1] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.225,Screen.height*.17), lockedAchievementImageBT);
		}
	if (Achievements.achieve[2] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.1,Screen.width*.225,Screen.height*.17), lockedAchievementImageBC);
		}
	if (Achievements.achieve[3] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.1,Screen.width*.225,Screen.height*.17), lockedAchievementImageBB);
		}
	if (Achievements.achieve[4] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.1,Screen.width*.225,Screen.height*.17), lockedAchievementImageSF);
		}
	if (Achievements.achieve[5] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.27,Screen.width*.225,Screen.height*.17), lockedAchievementImageH);
		}
	if (Achievements.achieve[6] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.27,Screen.width*.225,Screen.height*.17), lockedAchievementImageSS);
		}
	if (Achievements.achieve[7] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.27,Screen.width*.225,Screen.height*.17), lockedAchievementImageKoKT);
		}
	if (Achievements.achieve[8] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.27,Screen.width*.225,Screen.height*.17), lockedAchievementImageKoKK);
		}
	if (Achievements.achieve[9] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.44,Screen.width*.225,Screen.height*.17), lockedAchievementImageKoMT);
		}
	if (Achievements.achieve[10] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.44,Screen.width*.225,Screen.height*.17), lockedAchievementImageKoMK);
		}
	if (Achievements.achieve[11] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.44,Screen.width*.225,Screen.height*.17), lockedAchievementImageFaI);
		}
	if (Achievements.achieve[12] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.44,Screen.width*.225,Screen.height*.17), lockedAchievementImageBR);
		}
	if (Achievements.achieve[13] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.61,Screen.width*.225,Screen.height*.17), lockedAchievementImageHA);
		}
	if (Achievements.achieve[14] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.61,Screen.width*.225,Screen.height*.17), lockedAchievementImageR);
		}
	if (Achievements.achieve[15] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.61,Screen.width*.225,Screen.height*.17), lockedAchievementImageRO);
		}
	if (Achievements.achieve[16] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.61,Screen.width*.225,Screen.height*.17), lockedAchievementImageNaD);
		}
	if (Achievements.achieve[17] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.78,Screen.width*.225,Screen.height*.17), lockedAchievementImageGyW);
		}
	if (Achievements.achieve[18] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.78,Screen.width*.225,Screen.height*.17), lockedAchievementImageCbtB);
		}
	if (Achievements.achieve[19] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.78,Screen.width*.225,Screen.height*.17), lockedAchievementImageISE);
		}
	if (Achievements.achieve[20] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.78,Screen.width*.225,Screen.height*.17), lockedAchievementImageAP);
		}
	
	//Unlocked
	if (Achievements.achieve[1] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.225,Screen.height*.17), "Unlocked: Basic Training");
		}
	if (Achievements.achieve[2] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.1,Screen.width*.225,Screen.height*.17), "Unlocked: Boot Camp");
		}
	if (Achievements.achieve[3] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.1,Screen.width*.225,Screen.height*.17), "Unlocked: Basic Brawler");
		}
	if (Achievements.achieve[4] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.1,Screen.width*.225,Screen.height*.17), "Unlocked: Specialized Fighter");
		}
	if (Achievements.achieve[5] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.27,Screen.width*.225,Screen.height*.17), "Unlocked: Handsy");
		}
	if (Achievements.achieve[6] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.27,Screen.width*.225,Screen.height*.17), "Unlocked: Splintered Shields");
		}
	if (Achievements.achieve[7] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.27,Screen.width*.225,Screen.height*.17), "Unlocked: KO King: Tahu");
		}
	if (Achievements.achieve[8] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.27,Screen.width*.225,Screen.height*.17), "Unlocked: KO King: Kopaka");
		}
	if (Achievements.achieve[9] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.44,Screen.width*.225,Screen.height*.17), "Unlocked: KO Master: Tahu");
		}
	if (Achievements.achieve[10] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.44,Screen.width*.225,Screen.height*.17), "Unlocked: KO Master: Kopaka");
		}
	if (Achievements.achieve[11] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.44,Screen.width*.225,Screen.height*.17), "Unlocked: Fire and Ice");
		}
	if (Achievements.achieve[12] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.44,Screen.width*.225,Screen.height*.17), "Unlocked: Bragging Rights");
		}
	if (Achievements.achieve[13] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.61,Screen.width*.225,Screen.height*.17), "Unlocked: Heart Attack");
		}
	if (Achievements.achieve[14] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.61,Screen.width*.225,Screen.height*.17), "Unlocked: Reconciliation");
		}
	if (Achievements.achieve[15] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.61,Screen.width*.225,Screen.height*.17), "Unlocked: Restraining Order");
		}
	if (Achievements.achieve[16] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.61,Screen.width*.225,Screen.height*.17), "Unlocked: Negate and Destroy");
		}
	if (Achievements.achieve[17] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.78,Screen.width*.225,Screen.height*.17), "Unlocked: Gives you Winnngggs");
		}
	if (Achievements.achieve[18] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.78,Screen.width*.225,Screen.height*.17), "Unlocked: Can't Burst this Bubble");
		}
	if (Achievements.achieve[19] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.78,Screen.width*.225,Screen.height*.17), "Unlocked: IT'S SUPER EFFECTIVE!");
		}
	if (Achievements.achieve[20] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.78,Screen.width*.225,Screen.height*.17), "Unlocked: Appreciative Player");
		}
		
	}
	
//Challenges Menu
if (extrasMenu == 2)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
			audio2.PlayOneShot(backClick);
		}
	
	}
	
//Exhibit Menu
if (extrasMenu == 3)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
			audio2.PlayOneShot(backClick);
		}
	
	}
	
//Notifications Menu
if (extrasMenu == 4)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
			audio2.PlayOneShot(backClick);
		}
			
	}
	
//Gallery Menu
if (extrasMenu == 5)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
				audio2.PlayOneShot(backClick);
			}
		
	}
	
//Sound Test Menu
if (extrasMenu == 6)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
				audio2.PlayOneShot(backClick);
			}
		
	}
	
//Statistics Menu
if (extrasMenu == 7)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
				audio2.PlayOneShot(backClick);
			}
		GUI.Box(Rect(100,100,50,50), "" + pressedStartAmount);
		
		GUI.Box(Rect(150,100,50,50), "" + pressedAchievementsAmount);
	
	}
	
//Credits Menu
if (extrasMenu == 8)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
				audio2.PlayOneShot(backClick);
			}
			
	} 
	
	
	
	}
}

function Update () {
	
	
var locationX: int = Input.mousePosition.x; //Sets "LocationX" to be where the mouse is on the x-axis
var locationY: int = Input.mousePosition.y; //Sets "LocationY" to be where the mouse is on the y-axis

//NOTE: These following spaces start with the bottom-left corner rather than the top-left!
var multiPlayerButton = Rect (Screen.width*.05,Screen.height*.475,Screen.width*.425,Screen.height*.375); //Creates the space for "Fight!" (later used to track if the mouse is in this space)
var trainingButton = Rect (Screen.width*.525,Screen.height*.475,Screen.width*.425,Screen.height*.375); //Same as above for "Training"
var extrasButton = Rect (Screen.width*.05,Screen.height*.05,Screen.width*.425,Screen.height*.375); //Same as above for "Extras"
var optionsButton = Rect (Screen.width*.525,Screen.height*.05,Screen.width*.425,Screen.height*.375); //Same as above for "Options"

		
if (menu == 1) //If it is the main menu
{
if (multiPlayerButton.Contains (Input.mousePosition)) //If the "Fight!" space contains the mouse 
	{
	print("This Place");
	locationU = (locationX - (Screen.width*.05)) / (Screen.width*.425); //locationU [this is the U-coordinate on the texture] = ((X-Axis mouse position - Left-most side of space)/ Total Width of Space) [Based off of texture of the labels of the same name]
	locationV = (locationY - (Screen.height*.475)) / (Screen.height*.375); //location V [this is the V-coordinate on the texture] = ((Y-Axis mouse position - Up-most part of space)/ Total Height of Space)
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton))) //If the space is clicked or the accept button is clicked...
		{
			locationColor = multiPlayerImage.GetPixelBilinear (locationU,locationV); //Test the pixel color of the location on the texture
			if (locationColor.a > 0) //If the alpha value of the color is not 0 (clear)...
				{
				menu = 7; //Go to the Character Select Screen
				audio2.PlayOneShot(mainMenuClick); //Plays the sound
				pressedFightAmount++; //Adds to the number of times the player has been in the Fight! menu
				}
		}
	}
	
if (trainingButton.Contains (Input.mousePosition)) //Essentially the same instructions as above, but for "Training" values
	{
	print("Here too");
	locationU = (locationX - (Screen.width*.525)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.475)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = trainingImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 8;
				audio2.PlayOneShot(mainMenuClick); //Plays the sound
				pressedTrainingAmount++;
					
				if (pressedTrainingAmount == 1)
					{
					Achievements.achieve[1] = 1; //Unlocks first achievement
					widgetsEarned = widgetsEarned + 5; //This may need adjustment, although functional
					}
				if (pressedTrainingAmount == 5)
					{
					Achievements.achieve[2] = 1; //Unlocks second achievement
					widgetsEarned = widgetsEarned + 15; //This may need adjustment, although functional
					}
							
				}
		}
	}
	
if (extrasButton.Contains (Input.mousePosition)) //Same as above but for "Extras" values
	{
	print("Here as well");
	locationU = (locationX - (Screen.width*.05)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.05)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = extrasImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 5;
				audio2.PlayOneShot(mainMenuClick); //Plays the sound
				pressedExtrasAmount++;
				}
		}
	}
	
if (optionsButton.Contains (Input.mousePosition)) //Same as above but for "Options" values
	{
	print("Over Here");
	locationU = (locationX - (Screen.width*.525)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.05)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = optionsImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 2;
				audio2.PlayOneShot(mainMenuClick); //Plays the sound
				pressedOptionsAmount++;
				}
		}
	}
	

}
		
	audio1.volume = musicVolume; //Sets the volume of the first audio component to the value given by the slider
	audio2.volume = soundVolume; //Sets the volume of the second audio component to the value given by the slider
}

function Start () {
	audio1.loop = true; //Makes the music loop
	audio1.clip = mainMenuTheme; //Plays the main menu theme
	audio1.Play ();
	
}


/* To-Do List

-Create Statistics Section
-Create Statistics Recording [Find more to make for these] {Will also help with fixing achievement changes}
-Figure out how to stop skipping menus 100% [all cases]

*/ 