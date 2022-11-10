import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [IntroductionComponent],
})
export class FeatureModule {}
