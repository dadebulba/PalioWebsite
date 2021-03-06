import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'iscrizioni', component: SubscriptionComponent },
  { path: 'idrofobia', redirectTo: 'game/idrofobia'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
