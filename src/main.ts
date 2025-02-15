import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SimpleTemplateFormComponent } from './app/simple-template-form/simple-template-form.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { SimpleTemplateForm2Component } from './app/simple-template-form2/simple-template-form2.component';
import { FormbuilderComponent } from './app/formbuilder/formbuilder.component';
import { DynamicFormComponent } from './app/dynamic-form/dynamic-form.component';
import { LayoutComponent } from './app/layout/layout.component';
import { GetEmployeesServiceService } from './app/get-employees-service.service';
import { EmployeedetailsComponent } from './app/employeedetails/employeedetails.component';
import { LifeCycleExampleComponent } from './app/life-cycle-example/life-cycle-example.component';
import { ContactComponent } from './app/contact/contact.component';
import { MatUIExampleComponent } from './app/mat-uiexample/mat-uiexample.component';
import { SignalExampleComponent } from './app/signal-example/signal-example.component';
import { ExampleOnPipesComponent } from './app/example-on-pipes/example-on-pipes.component';
import { RxjsExampleComponent } from './app/rxjs-example/rxjs-example.component';
//import { ReactiveFormBuilderComponent } from './app/reactive-form-builder/reactive-form-builder.component';

bootstrapApplication(RxjsExampleComponent, appConfig)
  .catch((err) => console.error(err));
