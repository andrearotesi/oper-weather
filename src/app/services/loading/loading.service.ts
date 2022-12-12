import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading$: Subject<boolean> = new Subject<boolean>();

  startLoading(): void {
    this.loading$.next(true);
  }

  stopLoading(): void {
    this.loading$.next(false);
  }
}
