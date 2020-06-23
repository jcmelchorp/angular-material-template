import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Summary } from '../models/summary.interface';
import { Global } from '../models/global.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { Countries } from '../models/countries.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  world = faGlobeAmericas;
  summary: Summary;
  global: Global;
  countries: Countries[];
  country: Countries;
  date: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoading: boolean = true;
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this._apiService
      .sendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.summary = res.body;
        this.global = this.summary.Global;
        this.countries = this.summary.Countries;
        //this.country = this.countries.find((x) => x.slug == 'mexico');
        this.country = this.countries[109];
        this.date = this.summary.Date;
        console.log(this.country);
        this.isLoading = !this.isLoading;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
