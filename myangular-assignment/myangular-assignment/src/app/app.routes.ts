import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'api-data', component: ApiDataComponent, title: 'API Data' },
  { path: 'form', component: FormComponent, title: 'Form' },
  { path: '**', redirectTo: '' }
];