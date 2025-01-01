import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SimpleTemplateFormComponent } from './app/simple-template-form/simple-template-form.component';

bootstrapApplication(SimpleTemplateFormComponent, appConfig)
  .catch((err) => console.error(err));
