import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Complaint } from '../model/complaint';

@Component({
  selector: 'app-change-complaint-status',
  templateUrl: './change-complaint-status.component.html',
  styleUrls: ['./change-complaint-status.component.css']
})
export class ChangeComplaintStatusComponent implements OnInit {
  statusList:any = ['CLOSED']
  complaint : Complaint = new Complaint();
  complaintId : number;
  submitted = false;
  status : string;
  custStatus : FormControl;
  changeStatusForm : FormGroup;
  
  constructor(private router:Router,private route:ActivatedRoute,private complaintService :ClientService) { }
  ngOnInit(): void {
     this.complaint = new Complaint();
     this.complaintId = this.route.snapshot.params['complaintId'];
     this.custStatus = new FormControl();
     this.changeStatusForm = new FormGroup({
       'status':this.custStatus
     }); 
}

changeStatus(status : string){
 console.log(this.complaintId);
 console.log(status);
  this.complaintService.changeComplaintStatus(this.complaintId,status).subscribe(
    complaint => {
      this.complaint= complaint;
      this.goToComplaintDetails(this.complaint.complaintId);
      
    }, error => console.log(error)
  ); 
}
goToComplaintDetails(complaintId:number){
  this.router.navigate(['complaintId',complaintId]);
}

submit(){
  console.log("form value",this.changeStatusForm.value);
  console.log(this.custStatus);
  this.changeStatus(this.changeStatusForm.value);

   }
}

