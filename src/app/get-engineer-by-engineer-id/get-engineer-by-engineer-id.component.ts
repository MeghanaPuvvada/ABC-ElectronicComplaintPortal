import { Component, OnInit } from '@angular/core';
import { Engineer } from '../model/engineer';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-engineer-by-engineer-id',
  templateUrl: './get-engineer-by-engineer-id.component.html',
  styleUrls: ['./get-engineer-by-engineer-id.component.css']
})
export class GetEngineerByEngineerIdComponent implements OnInit {

  engineerId : number;
  engineer : Engineer;
  constructor(private clientService : ClientService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.engineerId = this.route.snapshot.params['engineerId'];
    console.log(this.engineerId);
    this.clientService.getEngineerbyEngineerId(this.engineerId).subscribe(
    selectedEngineer => {
      console.log(selectedEngineer);
      this.engineer = selectedEngineer;
    },error => console.log(error)
    );
  }

}
