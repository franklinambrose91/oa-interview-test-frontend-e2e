import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { TEST_CONFIG } from '../config/test-config';

Given('the user navigates to the dashboard', async function (this: CustomWorld) {
  await this.searchPage.goto();
});

When('the user searches for {string}', async function (this: CustomWorld, query: string) {
  await this.searchPage.searchFor(query);
});

Then('the search results should contain exactly {int} journal', async function (this: CustomWorld, expectedCount: number) {
  // Get all title texts and filter out "No journals!"
  const titles = await this.searchPage.getVisibleJournalTitles();
  const journalTitles = titles.filter(title => title !== 'No journals!');
  expect(journalTitles).toHaveLength(expectedCount);
});

Then('the search results should contain more than {int} journal', async function (this: CustomWorld, minimumCount: number) {
  // Get all title texts and filter out "No journals!"
  const titles = await this.searchPage.getVisibleJournalTitles();
  const journalTitles = titles.filter(title => title !== 'No journals!');
  expect(journalTitles.length).toBeGreaterThan(minimumCount);
});

Then('the first result should be {string}', async function (this: CustomWorld, expectedTitle: string) {
  // Get all title texts and filter out "No journals!"
  const titles = await this.searchPage.getVisibleJournalTitles();
  const journalTitles = titles.filter(title => title !== 'No journals!');
  expect(journalTitles[0]).toContain(expectedTitle);
});

Then('the search results should be empty', async function (this: CustomWorld) {
  // Get all title texts and filter out "No journals!"
  const titles = await this.searchPage.getVisibleJournalTitles();
  const journalTitles = titles.filter(title => title !== 'No journals!');
  
  // Verify no journal results
  expect(journalTitles).toHaveLength(0);
  
  // Verify the empty state message is visible
  await expect(this.searchPage.noResultsMessage).toBeVisible({ 
    timeout: TEST_CONFIG.TIMEOUTS.ELEMENT_LOAD 
  });
});