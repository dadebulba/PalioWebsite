import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { FaqComponent } from './components/faq/faq.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from './components/modal';
import { GameComponent } from './pages/game/game.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { BracketComponent } from './components/bracket/bracket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoresComponent,
    FaqComponent,
    GameComponent,
    SubscriptionComponent,
    BracketComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
