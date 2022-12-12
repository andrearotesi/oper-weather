import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit, OnDestroy {

  loading = false;

  constructor(private loadingService: LoadingService) { }

  ngAfterViewInit(): void {
    // Dynamically toggle the loading screen
    this.loadingService.loading$.subscribe((status) => this.loading = status);
  }

  ngOnDestroy(): void {
    this.loadingService.loading$.unsubscribe();
  }

}
