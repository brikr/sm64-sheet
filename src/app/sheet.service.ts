import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

const API_URL = 'https://api.sheety.co/19fcbbac-0b55-427c-9b71-cfd2d63cdea8';
const NON_PLAYER_COLUMNS = [
  'xCAMTIME!!',
  'idealRun',
  'rTARecord',
  'heldBy',
];

@Injectable({providedIn: 'root'})
export class SheetService {
  constructor(
      private httpClient: HttpClient,
  ) {}

  getSheetContents(): Observable<Array<{}>> {
    return this.httpClient.get<Array<{}>>(API_URL);
  }

  getPlayers(): Observable<string[]> {
    return this.getSheetContents().pipe(
        switchMap((response: Array<{}>) => {
          let keys = Object.keys(response[0]);
          keys = keys.filter(k => !NON_PLAYER_COLUMNS.includes(k));
          return of(keys);
        }),
    );
  }
}
