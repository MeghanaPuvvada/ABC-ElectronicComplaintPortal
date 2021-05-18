import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveClientComponent } from './save-client/save-client.component';
import { ChangeComplaintStatusComponent } from './change-complaint-status/change-complaint-status.component';
import { GetEngineerByEngineerIdComponent } from './get-engineer-by-engineer-id/get-engineer-by-engineer-id.component';
import { GetClientByClientIdComponent } from './get-client-by-client-id/get-client-by-client-id.component';
import { GetEngineerByDomainComponent } from './get-engineer-by-domain/get-engineer-by-domain.component';

const routes: Routes = [
  {path : '',redirectTo : 'complaint',pathMatch : 'full'},
  {path : 'client/saveClient',component:SaveClientComponent},
  {path : 'changeStatus',component:ChangeComplaintStatusComponent},
  {path : 'client/:clientId',component : GetClientByClientIdComponent},
  {path : 'engineer/:engineerId',component : GetEngineerByEngineerIdComponent},
  {path : 'engineer/:domain',component:GetEngineerByDomainComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
