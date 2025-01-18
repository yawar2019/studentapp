import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user={
    id:"",
    name:""
  }

   constructor(private route:ActivatedRoute)
  {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.user={
        id:data['id'],
        name:data['name']
       }
  
     })
  }

}
