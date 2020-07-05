import { Component, OnInit } from '@angular/core';
import { InterviwprblmService, comment, Newcomment } from '../service/interviwprblm.service';
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
  input : comment
  inputval : Newcomment
  subcommandvalue :String
  subcommand :Newcomment
  subcommanddateandtime : String
  subcommandname : String
  pagename  :String



  constructor(private interviwprblmservice:InterviwprblmService,private router:Router) { }

  ngOnInit() 
  {
    console.log("router name is   "+window.location.href)
    this.getAllComments();
    this.getAllSubComments();
  } 

  getAllComments()
  {

    this.pagename =window.location.href.replace('https://javainterviewprogramming.com/','start');

    this.interviwprblmservice.getListofNewComments(this.pagename).subscribe(
      responce => {
        this.inputval=responce;
      }
    )
  }

  getAllSubComments()
  {
    this.interviwprblmservice.getListofSubComments(this.subcommanddateandtime,this.subcommandname).subscribe(
      responce => {
        this.subcommand=responce;
      }
    )
    this.subcommanddateandtime='';
    this.subcommandname='';
  }

  submitForm()
  {
    this.pagename =window.location.href.replace('https://javainterviewprogramming.com/','start');

    this.interviwprblmservice.addaNewComment(new Newcomment(this.pagename ,9,this.name,this.email,this.comment,'')).subscribe(

      responce => {
        this.inputval=responce;
      }
    )
    this.email='';
    this.name='';
    this.comment='';
  }

  submitReplyComment(time:String)
  {
    console.log(time);
     {
    this.interviwprblmservice.addaSubComment(new Newcomment(time,9,"Ananymous user",'',this.subcommandvalue,'')).subscribe(
      responce => {
        this.subcommand=responce;
      }
    )
    this.subcommandvalue='';
  }

  }

}
