import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoLabelPipe } from './pipes/tipo-label.pipe';

@NgModule({
  imports: [CommonModule, TipoLabelPipe],
  exports: [TipoLabelPipe],
})
export class SharedModule {}
