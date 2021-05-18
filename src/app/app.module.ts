import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveClientComponent } from './save-client/save-client.component';
import { GetClientByClientIdComponent } from './get-client-by-client-id/get-client-by-client-id.component';
import { GetEngineerByEngineerIdComponent } from './get-engineer-by-engineer-id/get-engineer-by-engineer-id.component';
import { GetEngineerByDomainComponent } from './get-engineer-by-domain/get-engineer-by-domain.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ChangeComplaintStatusComponent } from './change-complaint-status/change-complaint-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveClientComponent,
    GetClientByClientIdComponent,
    GetEngineerByEngineerIdComponent,
    GetEngineerByDomainComponent,
    SignInComponent,
    SignOutComponent,
    ChangeComplaintStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
