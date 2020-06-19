import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, problem } from '../service/interviwprblm.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-top10programmes',
  templateUrl: './top10programmes.component.html',
  styleUrls: ['./top10programmes.component.css']
})
export class Top10programmesComponent implements OnInit {

  constructor(private interviwprblmservice:InterviwprblmService) {
    this.interviwprblmservice=interviwprblmservice;
   }
 public input : problem;
  ngOnInit() 
  {
    this.method();
  }

  config = {
    lineNumbers: true,
    autoRefresh:true,
    lineWrapping: true,
    theme: "eclipse",
    mode: "text/x-java",
    viewportMargin : Infinity
    };

  method()
  {
    this.interviwprblmservice.getAllPrograms().subscribe(
      responce => {
        this.input=responce;
      }
    )  }

}
