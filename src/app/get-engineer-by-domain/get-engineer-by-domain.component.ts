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
    console.log(this.domain);
    this.clientService.getEngineerByDomain(this.domain).subscribe(
      selectedEngineer => {
        console.log(selectedEngineer);
        this.domain=selectedEngineer;
      },error => console.log(error)
    );
  }
  // getEngineerDetails(domain:string){
  //   this.router.navigate(['engineer/domain',domain])
  // }

}
