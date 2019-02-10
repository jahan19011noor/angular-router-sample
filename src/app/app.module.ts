import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log("Routes: ", JSON.stringify(router.config, replacer, 2));
  }
}
