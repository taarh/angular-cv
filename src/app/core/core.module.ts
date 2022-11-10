import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Identity } from './identity';

@NgModule({
  imports: [CommonModule],
  declarations: [Identity],
  exports: [Identity],
})
export class CoreModule {}
