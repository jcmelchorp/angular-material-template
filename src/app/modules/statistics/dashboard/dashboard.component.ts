import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Summary } from '../models/summary.interface';
import { Global } from '../models/global.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public summary: Summary;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this._apiService
      .sendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.summary = res.body;
        console.log(this.summary);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
  afterViewInit() {}
}
