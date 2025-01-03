import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SimpleTemplateFormComponent } from './app/simple-template-form/simple-template-form.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { SimpleTemplateForm2Component } from './app/simple-template-form2/simple-template-form2.component';
import { FormbuilderComponent } from './app/formbuilder/formbuilder.component';
//import { ReactiveFormBuilderComponent } from './app/reactive-form-builder/reactive-form-builder.component';

bootstrapApplication(ReactiveFormComponent, appConfig)
  .catch((err) => console.error(err));
