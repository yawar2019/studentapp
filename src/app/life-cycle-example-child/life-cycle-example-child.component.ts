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

@Component({
  selector: 'app-life-cycle-example-child',
  imports: [],
  template: `
    <h2>Child Component</h2>
    <p>Message from Parent: {{ childMessage }}</p>
  `,
  styleUrl: './life-cycle-example-child.component.css'
})
export class LifeCycleExampleChildComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked, 
    OnDestroy 
{
  @Input() childMessage = '';

  constructor() {
    console.log('1. Constructor: Child component is being created.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges: Input property changed:', changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit: Child component is initialized.');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck: Change detection is running.');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit: Projected content has been initialized.');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked: Projected content has been checked.');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit: Child component’s view has been initialized.');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked: Child component’s view has been checked.');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy: Child component is being destroyed.');
  }
}
