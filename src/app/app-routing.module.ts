import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
import { Window7Component } from '../app/window7/window7.component';
import { Window8Component } from '../app/window8/window8.component';
import { Window10Component } from '../app/window10/window10.component';
import { PowerpointComponent } from '../app/powerpoint/powerpoint.component';
import { WordComponent } from '../app/word/word.component';
import { ExcelComponent } from '../app/excel/excel.component';
import { ChatComponent } from '../app/chat/chat.component';
import { AccountComponent } from '../app/account/account.component';
import { SecurityComponent } from '../app/security/security.component';
import { PagenotfoundComponent } from '../app/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'window7', component: Window7Component},
  { path: 'window8', component: Window8Component},
  { path: 'window10', component: Window10Component},
  { path: 'powerpoint', component: PowerpointComponent},
  { path: 'word', component: WordComponent},
  { path: 'excel', component: ExcelComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'account', component: AccountComponent},
  { path: 'security', component: SecurityComponent},
  { path: '**' , component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
