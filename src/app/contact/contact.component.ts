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
  constructor(private route:ActivatedRoute)
{

}


  ngOnInit(): void {
   this.user={
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name']
   }

  }



}
