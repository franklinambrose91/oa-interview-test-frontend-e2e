import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';
import { ExamplePage } from '../pages/ExamplePage';
import { SearchPage } from '../pages/SearchPage';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  examplePage!: ExamplePage;
  searchPage!: SearchPage;
}

setWorldConstructor(CustomWorld);