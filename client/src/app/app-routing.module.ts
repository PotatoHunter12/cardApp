import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrTarotComponent } from './fr-tarot/fr-tarot.component';
import { HomeComponent } from './home/home.component';
import { LustikComponent } from './lustik/lustik.component';
import { PokerComponent } from './poker/poker.component';
import { RummyComponent } from './rummy/rummy.component';
import { TarotGameComponent } from './tarot/tarot-game/tarot-game.component';
import { TarotComponent } from './tarot/tarot.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarot', component: TarotComponent },
  { path: 'tarot-game', component: TarotGameComponent },
  { path: 'fr-tarot', component: FrTarotComponent },
  { path: 'rummy', component: RummyComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'lustik', component: LustikComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
