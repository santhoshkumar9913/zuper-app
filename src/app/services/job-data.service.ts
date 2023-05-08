import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
// import uuid
import { v4 as uuidv4 } from 'uuid';
import { Job } from '../types/job';

@Injectable({
  providedIn: 'root',
})
export class JobDataService {
  jobs: Job[] = [
    {
      id: uuidv4(),
      job_id: 1,
      status: 'CONFIRMED',
      assigned_to: [
        {
          id: '1',
          name: 'vijay',
          image_url: 'https://dummyimage.com/250/000000/fffff"',
          designation: 'SF Team',
        },
      ],
      job_title: 'Job 1',
      priority: 'HIGH',
      customer: 'Customer 1',
      job_tags: ['tag1', 'tag2'],
    },
    {
      id: uuidv4(),
      job_id: 2,
      status: 'ON_MY_WAY',
      assigned_to: [
        {
          id: '1',
          name: 'vijay',
          image_url: 'https://dummyimage.com/250/000000/fffff"',
          designation: 'SF Team',
        },
        {
          id: '2',
          name: 'ajay',
          image_url: 'https://dummyimage.com/250/000000/fffff"',
          designation: 'SF Team',
        },
      ],
      job_title: 'Job 2',
      priority: 'MEDIUM',
      customer: 'Customer 2',
      job_tags: ['tag1', 'tag2'],
    },
    {
      id: uuidv4(),
      job_id: 3,
      status: 'CONFIRMED',
      assigned_to: [{
        id: '1',
        name: 'vijay',
        image_url: 'https://dummyimage.com/250/000000/fffff"',
        designation: 'SF Team',
      }],
      job_title: 'Job 3',
      priority: 'LOW',
      customer: 'Customer 3',
    },
    {
      id: uuidv4(),
      job_id: 4,
      status: 'STARTED',
      assigned_to: [
        {
          id: '1',
          name: 'raghav',
          image_url: 'https://dummyimage.com/250/000000/fffff"',
          designation: 'SF Team',
        },
      ],
      job_title: 'Job 4',
      priority: 'HIGH',
      customer: 'Customer 4',
    },
    {
      id: uuidv4(),
      job_id: 5,
      status: 'STARTED',
      assigned_to: [
        {
          id: '1',
          name: 'ajay',
          image_url: 'https://dummyimage.com/250/000000/fffff"',
          designation: 'SF Team',
        },
      ],
      job_title: 'Job 5',
      priority: 'MEDIUM',
      customer: 'Customer 5',
    },
    {
      id: uuidv4(),
      job_id: 6,
      status: 'COMPLETED',
      assigned_to: [
        {
          id: '1',
          name: 'ranjith',
          image_url: 'https://dummyimage.com/250/000000/fffff"',
          designation: 'SF Team',
        }
      ],
      job_title: 'Job 6',
      priority: 'LOW',
      customer: 'Customer 6',
      job_tags: ['tag1', 'tag2'],
    },
  ];

  currentJobStatus: string = '';

  jobs$ = new BehaviorSubject<Job[]>(this.jobs);

  constructor() {
    this.jobs$.next(this.jobs);
  }

  getJobs(): Observable<Job[]> {
    return this.jobs$;
  }

  getJobsByStatus(status: string): Observable<Job[]> {
    if (status === '') {
      return this.jobs$;
    }
    return this.jobs$.pipe(
      map((jobs) => {
        return jobs.filter((job) => job.status === status);
      })
    );
  }

  getJobById(id: string): Observable<Job | null> {
    return this.jobs$.pipe(
      map((jobs) => {
        console.log(jobs);
        console.log(id);
        return jobs.find((job) => job.id === id) || null;
      })
    );
  }

  getjobscounts(): Observable<{ [key: string]: number }> {
    return this.jobs$.pipe(
      map((jobs) => {
        return jobs.reduce<{ [key: string]: number }>((counts, job) => {
          counts[job.status] = counts[job.status] || 0;
          counts[job.status]++;
          return counts;
        }, {});
      })
    );
  }
}
