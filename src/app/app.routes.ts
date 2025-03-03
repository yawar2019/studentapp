import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { AppguardServiceService } from './appguard-service.service';
import { AppDeactiveGuardService } from './app-deactive-guard.service';
import { ParentComponent } from './ViewChild/parent/parent.component';

export const routes: Routes = [
    {
path:'',
component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent,
        //canActivate: [AppguardServiceService],
       // canActivateChild: [AppguardServiceService],
       canDeactivate: [AppDeactiveGuardService],
        children:[
            {
                path:':id/:name',
                component:UserComponent
                
            }]
    },
    {
        path:'ParentComponent',
        component:ParentComponent
    },
    {
        path:'contact/:id/:name',
        component:ContactComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];

// http://localhost:4200/contact/1/Saritha
// {
//     path:'contact/:id/:name',
//     component:ContactComponent
// },  //id=1 and name=Saritha