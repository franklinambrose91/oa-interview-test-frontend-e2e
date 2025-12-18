import { Page } from 'playwright';

export class ExamplePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('http://localhost:4200');
  }

}

