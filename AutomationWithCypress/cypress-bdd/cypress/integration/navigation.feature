Feature: navigation
 As a fan
 In order to get information on my team
 I want to interact with the stats page

@focus
Scenario: can navigate to standings page
 Given I am on the nba stats page
  When I click the "Standings" menu
  Then I should see overall information for all teams
  And I want to wait 15000 for milliseconds


Scenario Outline: can search for a player 
 Given I am on the nba stats page
  When I search and select for a "<player>"
  Then I should be directed to the players "<page>"
 Examples: 
 |  player  | page|
 | Stephen Curry| Stephen Curry|
 | LeBron James | LeBron James|
 
 