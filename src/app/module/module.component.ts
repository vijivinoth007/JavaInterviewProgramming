import { Component, OnInit, Renderer2 } from '@angular/core';
import {InterviwprblmService, problem} from '../service/interviwprblm.service';
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/display/autorefresh'
import { EventEmitterService } from '../event-emitter.service';


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  introduction = true;
  code : string;
  public number = 1;
  config = {
    lineNumbers: true,
    autoRefresh:true,
    lineWrapping: true,
    theme: "eclipse",
    mode: "text/x-java",
    readOnly : true,
    viewportMargin : Infinity
    };
  constructor(private interviwprblmservice:InterviwprblmService,private eventEmitterService: EventEmitterService) {
    this.interviwprblmservice=interviwprblmservice;
   }
 public input : problem;
  ngOnInit() {

    this.introduction=true;
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {   
        this.getproblem(name);    
      });    
      var containertemp = document.all;
      var inputstemp, index;
      
      inputstemp = document.getElementsByTagName('div');
      for (index = 0; index < inputstemp.length; ++index) 
      {
          $('span').removeClass("highlight");
      }

    }

    this.getAlLproblems();
  }

  getproblem(name:string)
  {
    window.scrollTo(0,0);

    console.log("asdasdhbaskjdb");
    if (name.localeCompare("ArraysandString") == 0)
    {
      this.getArrayStringProblems();
    }
    else if (name.localeCompare("LinkedList") == 0)
    {
      this.getLinkedListProblems();
    }
    else if (name.localeCompare("TreesandGraph") == 0)
    {
      this.getTreeAndGraphproblems();
    }
    else if (name.localeCompare("SortingandSearching") == 0)
    {
      this.getSortingAndSearchingProblems();
    }
    else if (name.localeCompare("Recursion") == 0)
    {
      this.getRecursionProblems();
    }
    else if (name.localeCompare("Design") == 0)
    {
      this.getDesignProblems();
    }
    else if (name.localeCompare("DynamicProblems") == 0)
    {
      this.getDynamicProblems();
    }
    else if (name.localeCompare("OtherProblems") == 0)
    {
      this.getOtherProblems();
    }
    else if (name.localeCompare("AllProblems") == 0)
    {
      this.getAlLproblems();
    }

  }


  getAlLproblems()
  {
    this.interviwprblmservice.getAllPrograms().subscribe(
      responce => {
        this.input=responce;
        this.introduction=true;
      }
    )
  }


  getTreeAndGraphproblems()
  {
    this.interviwprblmservice.getListofPrograms("treesandgraph").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getArrayStringProblems()
  {
    this.interviwprblmservice.getListofPrograms("arraysandstring").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getLinkedListProblems()
  {
    this.interviwprblmservice.getListofPrograms("linkedlist").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  } 

  getSortingAndSearchingProblems()
  {
    this.interviwprblmservice.getListofPrograms("sortingandsearching").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getRecursionProblems()
  {
    this.interviwprblmservice.getListofPrograms("recursion").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getDesignProblems()
  {
    this.interviwprblmservice.getListofPrograms("design").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getDynamicProblems()
  {
    this.interviwprblmservice.getListofPrograms("dynamicproblem").subscribe(
      responce => {
        this.input=responce;
        this.introduction=false;
      }
    )
  }

  getOtherProblems()
  {
    this.interviwprblmservice.getListofPrograms("otherproblem").subscribe(
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