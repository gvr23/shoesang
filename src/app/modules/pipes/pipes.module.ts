import {NgModule} from '@angular/core';
import {FilterPipe} from './filter.pipe';
import {DatePipe} from '@angular/common';

@NgModule({
  imports: [],
  providers: [DatePipe],
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class PipesModule {}
