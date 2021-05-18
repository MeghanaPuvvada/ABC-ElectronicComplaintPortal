import { Component, OnInit } from '@angular/core';
import { Engineer } from '../model/engineer';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-engineer-by-domain',
  templateUrl: './get-engineer-by-domain.component.html',
  styleUrls: ['./get-engineer-by-domain.component.css']
})
export class GetEngineerByDomainComponent implements OnInit {

  domain: String;
  engineer : Engineer;
  constructor(private clientService : ClientService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.domain = this.route.snapshot.params['domain'];
    this.clientService.getEngineerByDomain(this.domain).subscribe(
      selectedClient => {
        console.log(selectedClient);
        this.domain=selectedClient;
      },error => console.log(error)
    );
  }

}
