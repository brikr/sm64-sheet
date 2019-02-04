import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {SheetService} from './sheet.service';

@Component({
  selector: 'uss-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  contents$?: Observable<{}>;
  players$?: Observable<string[]>;
  columns?: string[];

  constructor(
      private sheetService: SheetService,
  ) {}

  ngOnInit() {
    this.contents$ = this.sheetService.getSheetContents();
    this.players$ = this.sheetService.getPlayers();
    this.players$.subscribe(p => this.columns = ['xCAMTIME!!'].concat(p));
  }
}
