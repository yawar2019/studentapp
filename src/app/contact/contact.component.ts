import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
user={
  id:"",
  name:""
}

pagfilter={
  page:"",
  search:""
}
fragmentDetail:string|null="";
  constructor(private route:ActivatedRoute)
{
  console.log("constructor called");
}


  ngOnInit(): void {
  //  this.user={
  //   id:this.route.snapshot.params['id'],
  //   name:this.route.snapshot.params['name']
  //  }
  console.log("ngOninit called");
   console.log(this.route.snapshot.queryParams);


   this.route.params.subscribe((data)=>{
    this.user={
      id:data['id'],
      name:data['name']
     }

   })


   this.route.queryParams.subscribe((data)=>{
    this.pagfilter={
      page:data['page'],
      search:data['search']
    }

   })

   this.route.fragment.subscribe((data)=>{
this.fragmentDetail=data;    
 
   })


  }



}
