import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AppLayout} from './layout/app-layout/app-layout.component';
import {JournalList} from './ui/journal-list/journal-list.component';
import {JournalsService} from './core/journals.service';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {iif, startWith, switchMap} from 'rxjs';

@Component({
  selector: 'iw-root',
  imports: [AppLayout, JournalList, AsyncPipe, MatFormField, MatLabel, MatInput, ReactiveFormsModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly journalService = inject(JournalsService);

  protected readonly searchControl = new FormControl('', { nonNullable: true })

  protected readonly journals$ = this.searchControl.valueChanges.pipe(
    startWith(this.searchControl.value),
    switchMap((searchTerm) =>
      iif(
        () => searchTerm === '',
        this.journalService.getJournals(),
        this.journalService.searchJournals(searchTerm),
      ),
    ),
  );
}
