import { Component, OnInit, Input } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import 'codemirror/mode/clike/clike'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.code=``;
 }

  @Input() name: string;

  code : string;


      config = {
        lineNumbers: true,
        lineWrapping: true,
        theme: "eclipse",
        mode: "text/x-java"
      };


  constructor() { }


}
