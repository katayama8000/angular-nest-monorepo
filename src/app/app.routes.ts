import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
