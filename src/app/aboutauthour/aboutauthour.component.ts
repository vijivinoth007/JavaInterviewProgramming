import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, comment } from '../service/interviwprblm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutauthour',
  templateUrl: './aboutauthour.component.html',
  styleUrls: ['./aboutauthour.component.css']
})
export class AboutauthourComponent implements OnInit {

  email : string
  name : string
  comment : string
  dateandtime :string
  input :comment

  constructor(private interviwprblmservice:InterviwprblmService,private router:Router) { }

  ngOnInit() 
  {
    this.getAllComments();
  }

  getAllComments()
  {
    this.interviwprblmservice.getListofComments().subscribe(
      responce => {
        this.input=responce;
      }
    )
  }

  submitForm()
  {
    this.interviwprblmservice.addaComment(new comment(this.email,this.name,this.comment,"")).subscribe(
      responce => {
        this.input=responce;
      }
    )
    this.email='';
    this.name='';
    this.comment=''
  }

}
