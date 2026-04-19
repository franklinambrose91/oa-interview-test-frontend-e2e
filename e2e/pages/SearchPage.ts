import { Page, Locator } from 'playwright';
import { TEST_CONFIG } from '../config/test-config';

/**
 * SearchPage - Page Object for the journal search functionality
 * Encapsulates all interactions with the search page
 */
export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly journalItems: Locator;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByLabel('Search journals');
    this.journalItems = page.locator('[matListItemTitle]');
    this.noResultsMessage = page.getByText('No journals!');
  }

  /**
   * Navigate to the dashboard
   */
  async goto() {
    await this.page.goto(TEST_CONFIG.BASE_URL);
    // Wait for initial journals to load
    await this.journalItems.first().waitFor({ 
      state: 'visible', 
      timeout: TEST_CONFIG.TIMEOUTS.ELEMENT_LOAD 
    });
  }

  /**
   * Search for journals by entering a search query
   * @param query The search term to enter
   */
  async searchFor(query: string) {
    await this.searchInput.fill(query);
    // Add delay to let Angular process the input
    await this.page.waitForTimeout(300);
  }

  /**
   * Get all visible journal titles (author names)
   * @returns Array of author names
   */
  async getVisibleJournalTitles(): Promise<string[]> {
    return await this.journalItems.allInnerTexts();
  }

  /**
   * Get count of visible journal items
   * @returns Number of journals currently displayed
   */
  async getResultCount(): Promise<number> {
    return await this.journalItems.count();
  }
}