Feature: stats
 As a fan
 In order to compare stats of teams
 I want interact with the filter functions

Scenario: can do some filtering
 Given I am on the traditional page for players
  When I filter teams to "Atlanta Hawks" and "VS Denver Nuggets"
  Then It should filter to "Atlanta Hawks" and "VS Denver Nuggets"
