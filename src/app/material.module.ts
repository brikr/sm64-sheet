import {NgModule} from '@angular/core';
import {MatInputModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatTableModule,
  ],
  exports: [
    MatInputModule,
    MatTableModule,
  ],
})
export class MaterialModule {
}