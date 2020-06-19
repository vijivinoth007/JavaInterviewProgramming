import { Component, OnInit } from '@angular/core';
import { InterviwprblmService } from '../service/interviwprblm.service';

@Component({
  selector: 'app-deleteproblem',
  templateUrl: './deleteproblem.component.html',
  styleUrls: ['./deleteproblem.component.css']
})
export class DeleteproblemComponent implements OnInit {

  constructor(private  interviwprblmservice:InterviwprblmService) { }
  
  id : number
  module : string

  ngOnInit() 
  {
  }

  deleteaproblem()
  {
    this.interviwprblmservice.deleteaPrograms(this.id,this.module).subscribe();
  }




}
