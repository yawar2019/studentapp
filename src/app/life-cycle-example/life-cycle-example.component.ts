
import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input, 
  SimpleChanges 
} from '@angular/core';
import { LifeCycleExampleChildComponent } from '../life-cycle-example-child/life-cycle-example-child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle-example',
  imports: [LifeCycleExampleChildComponent,CommonModule,FormsModule],
  template: `
    <h1>Angular Lifecycle Hooks Example</h1>
    <input [(ngModel)]="message" placeholder="Type a message" />
    <button (click)="toggleChild()">Show/Hide Child</button>
   
    <app-life-cycle-example-child *ngIf="showChild" [childMessage]="message"></app-life-cycle-example-child>
  
    `,
  styleUrl: './life-cycle-example.component.css'
})
export class LifeCycleExampleComponent {
  message = 'Hello from Parent!';
  showChild = true;
  abc=false;
  toggleChild() {
    this.showChild = !this.showChild; // Show or hide the child component
    this.abc = !this.abc; // Show or hide the child component
  }
}


 

