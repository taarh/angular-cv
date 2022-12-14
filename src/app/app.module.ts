import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IntroductionComponent } from './feature/introduction/introduction.component';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  imports: [BrowserModule, FormsModule, FeatureModule],
  declarations: [AppComponent, HelloComponent, IntroductionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
