import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent {
  menu = faBars;
  mediaSub: Subscription;
  deviceMd: boolean;

  constructor(public mediaObserver: MediaObserver) {}
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceMd = result.mqAlias === 'md' ? true : false;
        console.log(this.deviceMd);
      }
    );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
