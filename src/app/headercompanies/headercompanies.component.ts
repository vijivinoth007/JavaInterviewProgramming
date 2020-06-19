import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headercompanies',
  templateUrl: './headercompanies.component.html',
  styleUrls: ['./headercompanies.component.css']
})
export class HeadercompaniesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  config = {
    lineNumbers: true,
    autoRefresh:true,
    lineWrapping: true,
    theme: "eclipse",
    mode: "text/x-java",
    viewportMargin : Infinity
    };

}
