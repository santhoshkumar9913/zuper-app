import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { JobDataService } from 'src/app/services/job-data.service';
import { Job } from 'src/app/types/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent {
  job_data: Job | any;
  job_details: { label: string; key: string }[] = [
    {
      label: 'Job Title',
      key: 'job_title',
    },
    {
      label: 'Customer',
      key: 'customer',
    },
    {
      label: 'Priority',
      key: 'priority',
    },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: 'Jobs tags',
      key: 'job_tags',
    },
  ];

  constructor(
    private _headerService: HeaderService,
    public _jobService: JobDataService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._route.params.subscribe((params) => {
      console.log(params['id']);
      this._jobService.getJobById(params['id']!).subscribe((data) => {
        if (data == null) {
          this._router.navigate(['404']);
          return;
        }
        this.job_data = data;
      });
    });
    this._headerService.setTitle('Job Details');
  }
}
