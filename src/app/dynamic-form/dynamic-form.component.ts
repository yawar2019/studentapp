import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  

  form!: FormGroup;
  formConfig = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      value: '',
      validators: {
        required: true,
        minLength: 2
      }
    },
    {
      name: 'lastname',
      label: 'Last Name',
      type: 'text',
      value: '',
      validators: {
        required: true,
        minLength: 2
      }
    },
    {
      name: 'country',
      label: 'Country',
      type: 'dropdown',
      value: '',
      options: [
        { key: 'us', label: 'United States' },
        { key: 'uk', label: 'United Kingdom' },
        { key: 'in', label: 'India' }
      ],
      validators: {
        required: true
      }
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      value: 'male',
      options: [
        { key: 'male', label: 'Male' },
        { key: 'female', label: 'Female' }
      ],
      validators: {
        required: true
      }
    }
  ];

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const group: { [key: string]: any } = {};
    
    this.formConfig.forEach(control => {
      const validators = [];
      if (control.validators?.required) {
        validators.push(Validators.required);
      }
      if (control.validators?.minLength) {
        validators.push(Validators.minLength(control.validators.minLength));
      }

      group[control.name] = [control.value || '', validators];//[validators.Required,Validators.minlength(3)]
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}



