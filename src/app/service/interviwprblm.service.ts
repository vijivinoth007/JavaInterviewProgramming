import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviwprblmService {

  constructor(private http:HttpClient) {

   }

   getAllPrograms()
   {
       console.log("calling getListofPrograms method");
       return this.http.get<problem>(`http://localhost:8080/allproblems`);
       ///ec2-3-136-85-153.us-east-2.compute.amazonaws.com
   }

   getListofPrograms(name)
   {
       console.log("calling getListofPrograms method");
       return this.http.get<problem>(`http://localhost:8080/problem/${name}`);
       ///ec2-3-136-85-153.us-east-2.compute.amazonaws.com
   }
   
   addaPrograms(name : string,tempproblem : problem)
   {
       console.log("calling addaPrograms method !!");
       return this.http.post<problem>(`http://localhost:8080/problem/${name}`,tempproblem);
   }

   deleteaPrograms(id :number,name: String)
   {
       console.log("calling delete method !!");
       return this.http.delete<problem>(`http://localhost:8080/problem/${name}/${id}`)
   }

   addaComment(tempproblem : comment)
   {
       console.log("calling addacomment method!!");
       return this.http.post<comment>(`http://localhost:8080/comment`,tempproblem);
   }

   getListofComments()
   {  
       console.log("calling getListofComments method");
       return this.http.get<comment>(`http://localhost:8080/comment`);
   }

   getListofSubComments(time:String,name:String)
   {
       console.log("calling getListofComments method");
       return this.http.get<Newcomment>(`http://localhost:8080/subcomments/${time}/${name}`);
   }

   getListofNewComments(pagename:String)
   {
       console.log("calling getListof New Comments method");
       return this.http.get<Newcomment>(`http://localhost:8080/Newcommentget/${pagename}`);
   }

   addaNewComment(tempproblem : Newcomment)
   {
       console.log("calling addacomment method!!");
       return this.http.post<Newcomment>(`http://localhost:8080/Newcommentpost`,tempproblem);
   }

   addaSubComment(tempproblem : Newcomment)
   {
       console.log("calling addacomment method!!");
       return this.http.post<Newcomment>(`http://localhost:8080/Newsubcommentpost`,tempproblem);
   }



  
}


export class Newcomment
{
  constructor(private pagename:String,private sno:Number,private name:String,private email:String,private comments:String,private timestamp:String)
  {

  }

}

export class comment
{
  constructor(private emailid:String,private name:String,private comment:String,private dataandtime:String)
  {

  }

}

export class problem{
  constructor(private id:Number,private question:String,private expl:String,private answer:String,private output:String)
  {

  }
}