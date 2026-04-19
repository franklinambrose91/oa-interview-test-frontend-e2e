Feature: Advanced Dashboard Search Functionality
  As a user
  I want advanced search capabilities
  So that I can find journals with different search patterns

  Background:
    Given the user navigates to the dashboard

  Scenario: Search returns multiple matching results
    When the user searches for "Morbi"
    Then the search results should contain more than 1 journal

  Scenario: Search with partial author name match
    When the user searches for "Cannop"
    Then the search results should contain exactly 1 journal
    And the first result should be "Janine Cannop"

  Scenario: Search is case-insensitive for partial matches
    When the user searches for "RODOLPH"
    Then the search results should contain exactly 1 journal
    And the first result should be "Rodolph Fevers"