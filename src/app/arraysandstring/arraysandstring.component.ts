import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, problem } from '../service/interviwprblm.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-arraysandstring',
  templateUrl: './arraysandstring.component.html',
  styleUrls: ['./arraysandstring.component.css']
})
export class ArraysandstringComponent implements OnInit {

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
    this.interviwprblmservice.getListofPrograms("arraysandstring").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getCollapse()
  {
    var containertemp = document.all;
    var inputstemp, index;
    
    inputstemp = document.getElementsByClassName("collapse")
    for (index = 0; index < inputstemp.length; ++index) 
    {
        $('div').removeClass("show");
    }

  }

  getExtend()
  {
    var containertemp = document.all;
    var inputstemp, index;
    
    inputstemp = document.getElementsByClassName("collapse")
    for (index = 0; index < inputstemp.length; ++index) 
    {
        $('div').addClass("show");
    }
  }
  
  

}
