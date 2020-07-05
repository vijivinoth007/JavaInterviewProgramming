import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, problem } from '../service/interviwprblm.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

 
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
    this.interviwprblmservice.getListofPrograms("design").subscribe(
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
