import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';
import {DefaultComponent} from "./default.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: RegisterComponent, children: [
                {path: 'personal', component: DefaultComponent},
                {path: 'professional', component: DefaultComponent},
                {path: 'health', component: DefaultComponent},
                {path: 'experience', component: DefaultComponent},
                {path: 'education', component: DefaultComponent},
                {path: 'documents', component: DefaultComponent}]
        }
    ])],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
