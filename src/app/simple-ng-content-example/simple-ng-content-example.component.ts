import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-simple-ng-content-example',
  imports: [],
  templateUrl: './simple-ng-content-example.component.html',
  styleUrl: './simple-ng-content-example.component.css'
})
export class SimpleNgContentExampleComponent implements  AfterContentInit, 
    AfterContentChecked {
  ngAfterContentInit(): void {
   console.log("contnet init")
  }
  ngAfterContentChecked(): void {
    console.log("contnet checked")

  }

}
