import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IntroductionComponent } from './feature/introduction/introduction.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule],
  declarations: [AppComponent, HelloComponent, IntroductionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
