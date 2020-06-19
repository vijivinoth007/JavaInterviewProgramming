import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, problem } from '../service/interviwprblm.service';

@Component({
  selector: 'app-updateproblem',
  templateUrl: './updateproblem.component.html',
  styleUrls: ['./updateproblem.component.css']
})
export class UpdateproblemComponent implements OnInit {

  constructor(private interviwprblmservice:InterviwprblmService) { }

  id :number;
  question: string;
  explanation: string;
  answer:string;
  output :string;
  module: string;
  input :problem;
  

  ngOnInit() 
  {
  }

  Addaproblem()
  {
    console.log("trying to add a problem"+this.module);
    this.interviwprblmservice.addaPrograms(this.module,new problem(this.id,this.question,this.explanation,this.answer,this.output)).subscribe();  
  }
  

}
