import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLevelDirective } from './directives/custom-level.directive';

@NgModule({
  declarations: [CustomLevelDirective],
  imports: [CommonModule],
  exports: [CustomLevelDirective],
})
export class SharedModule {}
