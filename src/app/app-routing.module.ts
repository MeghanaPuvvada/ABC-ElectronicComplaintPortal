import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveClientComponent } from './save-client/save-client.component';
import { GetEngineerByEngineerIdComponent } from './get-engineer-by-engineer-id/get-engineer-by-engineer-id.component';
import { GetClientByClientIdComponent } from './get-client-by-client-id/get-client-by-client-id.component';
import { GetEngineerByDomainComponent } from './get-engineer-by-domain/get-engineer-by-domain.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path : '',redirectTo : 'complaint',pathMatch : 'full'},
  {path : 'save',component:SaveClientComponent},
  {path : 'client/:clientId',component : GetClientByClientIdComponent},
  {path : 'engineerId/:engineerId',component : GetEngineerByEngineerIdComponent},
  {path : 'engineerdomain/:domain',component:GetEngineerByDomainComponent},
  {path : 'signIn',component:SignInComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
