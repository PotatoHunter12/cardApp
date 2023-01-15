import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarotComponent } from './tarot/tarot.component';
import { HomeComponent } from './home/home.component';
import { FrTarotComponent } from './fr-tarot/fr-tarot.component';
import { RummyComponent } from './rummy/rummy.component';
import { PokerComponent } from './poker/poker.component';
import { LustikComponent } from './lustik/lustik.component';

@NgModule({
  declarations: [
    AppComponent,
    TarotComponent,
    HomeComponent,
    FrTarotComponent,
    RummyComponent,
    PokerComponent,
    LustikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
