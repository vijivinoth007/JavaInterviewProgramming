import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, problem } from '../service/interviwprblm.service';

@Component({
  selector: 'app-sortingandsearching',
  templateUrl: './sortingandsearching.component.html',
  styleUrls: ['./sortingandsearching.component.css']
})
export class SortingandsearchingComponent implements OnInit {

  
  input :problem;
  introduction = true;
  code : string;
  public number = 1;
  config = {
    lineNumbers: true,
    autoRefresh:true,
    lineWrapping: true,
    theme: "eclipse",
    mode: "text/x-java",
    viewportMargin : Infinity
    };
  constructor(private interviwprblmservice:InterviwprblmService) {
    this.interviwprblmservice=interviwprblmservice;
   }
  ngOnInit() {
    this.getProblems();
  }

  getProblems()
  {
    this.interviwprblmservice.getListofPrograms("sortingandsearching").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getCollapse()
  {
    var inputstemp, index;
    
    inputstemp = document.getElementsByClassName("codemirrorcollapse")
    for (index = 0; index < inputstemp.length; ++index) 
    {
      inputstemp[index].className="codemirrorcollapse collapse"
    }

  }

  getExtend()
  {
    var inputstemp, index;
    
    inputstemp = document.getElementsByClassName("codemirrorcollapse")
    for (index = 0; index < inputstemp.length; ++index) 
    {
      inputstemp[index].className="codemirrorcollapse collapse show"
    }
  }
  

}
