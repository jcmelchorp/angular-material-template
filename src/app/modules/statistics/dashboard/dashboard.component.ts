import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Summary } from '../models/summary.interface';
import { Global } from '../models/global.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { Countries } from '../models/countries.interface';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color, MultiDataSet, SingleDataSet } from 'ng2-charts';

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
  mexico: Countries;
  date: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoading: boolean = true;
  isCircleLoading: boolean = true;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public mexicoPieOptions: ChartOptions = {
    responsive: true,
  };
  public mexicoPieLabels: Label[] = ['Muertes', 'Confirmados', 'Recuperados'];
  public mexicoPieData: SingleDataSet = [0, 0, 0];
  public mexicoPieType: ChartType = 'pie';
  public mexicoPieLegend = false;
  public mexicoPiePlugins = [];

  public globalPieOptions: ChartOptions = {
    responsive: true,
  };
  public globalPieLabels: Label[] = ['Muertes', 'Confirmados', 'Recuperados'];
  public globalPieData: SingleDataSet = [0, 0, 0];
  public globalPieType: ChartType = 'pie';
  public globalPieLegend = false;
  public globalPiePlugins = [];
  public pieColors = [
    {
      backgroundColor: [
        'rgba(180,50,50,1)',
        'rgba(50,180,50,1)',
        'rgba(50,50,180,1)',
      ],
    },
  ];
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this._apiService
      .sendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.summary = res.body;
        this.global = this.summary.Global;
        this.globalPieData = [
          this.global.TotalDeaths,
          this.global.TotalConfirmed,
          this.global.TotalRecovered,
        ];
        this.countries = this.summary.Countries;
        this.mexico = this.countries.find((x) => x.Slug == 'mexico');
        this.mexicoPieData = [
          this.mexico.TotalDeaths,
          this.mexico.TotalConfirmed,
          this.mexico.TotalRecovered,
        ];
        //this.country = this.countries[109];
        this.date = this.summary.Date;
        console.log(this.mexico);
        this.isLoading = !this.isLoading;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
