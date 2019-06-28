// import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnDestroy*/ {

  constructor(/*changeDetectorRef: ChangeDetectorRef, media: MediaMatcher*/) {

    // this.mobileQuery = media.matchMedia('(max-width: 600px)');

    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();

    // // tslint:disable-next-line: deprecation
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // mobileQuery: MediaQueryList;

  // // tslint:disable-next-line:variable-name
  // private _mobileQueryListener: () => void;

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
  //   h.test(window.location.host)
  // );

  // ngOnDestroy(): void {
  //   // tslint:disable-next-line: deprecation
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }
}
