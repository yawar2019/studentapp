import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: '[app-mat-uiexample],.app-mat-uiexample,app-mat-uiexample',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  templateUrl: './mat-uiexample.component.html',
  styleUrl: './mat-uiexample.component.css'
})
export class MatUIExampleComponent {
  value = 'Clear me';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
