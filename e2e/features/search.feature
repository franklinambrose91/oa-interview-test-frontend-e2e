Feature: Dashboard Search Functionality
  As a user
  I want to search for journals on the dashboard
  So that I can quickly find specific articles

  Background:
    Given the user navigates to the dashboard

  Scenario: Search for an existing journal by author name
    When the user searches for "Konrad Nield"
    Then the search results should contain exactly 1 journal
    And the first result should be "Konrad Nield"

  Scenario: Search for a journal that does not exist
    When the user searches for "InvalidName12345"
    Then the search results should be empty

  Scenario: Search is case-insensitive
    When the user searches for "janine cannop"
    Then the search results should contain exactly 1 journal
    And the first result should be "Janine Cannop"