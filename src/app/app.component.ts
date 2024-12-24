import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `     <p>{{title}}</p>
                  <h1>Great to see {{Hero}}</h1>
                  <button>click me</button>`,
  styles: 'p{color:gold}'
})
export class AppComponent {
  title = 'My First App';
  Hero='Shaktiman';
}
