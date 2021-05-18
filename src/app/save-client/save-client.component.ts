import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';


@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: ['./save-client.component.css']
})
export class SaveClientComponent implements OnInit {

  client : Client = new Client();
  submitted = false;

  constructor(private clientService : ClientService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  saveClient() {
    this.clientService.saveClient(this.client).subscribe(result =>{
      console.log(result);
      this.client = new Client();
      alert("client added successfully");
    },error=>console.log(error));
  }
  onSubmit(){
    this.submitted = true;
    this.saveClient();
  }
 

}
