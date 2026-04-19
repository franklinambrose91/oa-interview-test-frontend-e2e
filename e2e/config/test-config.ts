/**
 * Test configuration constants
 * Centralized configuration for E2E tests
 */

export const TEST_CONFIG = {
  BASE_URL: 'http://localhost:4200',
  BACKEND_API_URL: 'http://localhost:8080/api/v1',
  
  // Timeouts (in milliseconds)
  TIMEOUTS: {
    ELEMENT_LOAD: 10000,      // Wait for elements to appear
    API_RESPONSE: 5000,        // Wait for API responses
    PAGE_LOAD: 10000,          // Wait for page to load
    DEFAULT: 5000,             // Default timeout
  },

  // Viewport settings
  VIEWPORT: {
    width: 1920,
    height: 1080,
  },
};