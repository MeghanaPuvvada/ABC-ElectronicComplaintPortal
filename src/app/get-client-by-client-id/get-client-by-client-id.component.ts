import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-get-client-by-client-id',
  templateUrl: './get-client-by-client-id.component.html',
  styleUrls: ['./get-client-by-client-id.component.css']
})
export class GetClientByClientIdComponent implements OnInit {

  clientId : String;
  client : Client;
  constructor(private clientService : ClientService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['clientId'];
    console.log(this.clientId);
    this.clientService.getClientbyClientId(this.clientId).subscribe(
      selectedClient => {
        console.log(selectedClient);
        this.client=selectedClient;
        console.log(this.client);
      },error => console.log(error)
    );
  }


}
