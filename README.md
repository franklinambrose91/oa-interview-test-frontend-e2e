# Interview

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

When you first clone this repository, run `npm install` to install the dependencies and `npx playwright install` to install the e2e testing framework.

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

End-to-end tests validate the dashboard search functionality using Playwright and Cucumber.

### Prerequisites
- Backend API running on `http://localhost:8080`
- Frontend running on `http://localhost:4200`

### Test Scenarios

**Basic Search** (`e2e/features/search.feature`)
- Search for existing journals by author name
- Search for non-existent journals (empty results)
- Case-insensitive search

**Advanced Search** (`e2e/features/search-advanced.feature`)
- Multiple matching results
- Partial author name matching
- Case-insensitive partial matching

### Running Tests

Run all tests:
```bash
npm run e2e
```
Run a specific feature:
```bash
npx cucumber-js e2e/features/search.feature
npx cucumber-js e2e/features/search-advanced.feature
```

What Changed
New Files:
e2e/config/test-config.ts - Centralized configuration (URLs, timeouts, viewport settings)
e2e/features/search-advanced.feature - Advanced search test scenarios

Updated Files:
e2e/pages/SearchPage.ts - Page Object for journal search functionality
e2e/step_definitions/search.steps.ts - Step definitions for all test scenarios
e2e/support/hooks.ts - Test setup/teardown with centralized configuration

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
