import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Window7Component } from './window7/window7.component';
import { Window8Component } from './window8/window8.component';
import { Window10Component } from './window10/window10.component';
import { MainComponent } from './main/main.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { WordComponent } from './word/word.component';
import { ExcelComponent } from './excel/excel.component';
import { ChatComponent } from './chat/chat.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    Window7Component,
    Window8Component,
    Window10Component,
    MainComponent,
    PowerpointComponent,
    WordComponent,
    ExcelComponent,
    ChatComponent,
    AccountComponent,
    SecurityComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
