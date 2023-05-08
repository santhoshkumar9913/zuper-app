import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { JobDataService } from 'src/app/services/job-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  count_by_job_status: { [key: string]: number } = {};
  constructor(
    private _headerService: HeaderService,
    public _jobService: JobDataService
  ) {
    this._headerService.setTitle('Dashboard');
    this._jobService.getjobscounts().subscribe((data) => {
      this.count_by_job_status = data;
    });
  }

  onJobsclick(job_status: string) {
    this._jobService.currentJobStatus =  job_status;
  }
}
