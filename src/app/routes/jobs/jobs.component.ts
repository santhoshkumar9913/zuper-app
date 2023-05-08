import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';
import { JobDataService } from 'src/app/services/job-data.service';
import { Job } from 'src/app/types/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  displayedColumns: string[] = [
    'job_title',
    'customer',
    'priority',
    'assigned_to',
    'status',
  ];
  jobs$: Observable<Job[]> | undefined;

  constructor(
    private _headerService: HeaderService,
    public _jobService: JobDataService
  ) {
    this._headerService.setTitle('Jobs');
  }
  ngOnInit() {
    this.jobs$ = this._jobService.getJobsByStatus(
      this._jobService.currentJobStatus
    ).pipe(
      tap((data) => {
        this._headerService.jobsCount = data.length.toString();
      }),
    );
  }
  ngOnDestroy() {
    this._headerService.jobsCount = '';
  }
}
