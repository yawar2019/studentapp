import { Component } from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
SayHello()
{
  console.log('Hello i am from Child Component');
}

}
