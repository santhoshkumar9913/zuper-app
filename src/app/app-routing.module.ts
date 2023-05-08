import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { JobsComponent } from './routes/jobs/jobs.component';
import { JobDetailsComponent } from './routes/job-details/job-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'jobs/:id/details',
    component: JobDetailsComponent,
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
