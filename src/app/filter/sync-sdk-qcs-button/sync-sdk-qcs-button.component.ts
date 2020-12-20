import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../filter.component';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-sync-sdk-qcs-button',
  templateUrl: './sync-sdk-qcs-button.component.html',
  styleUrls: ['./sync-sdk-qcs-button.component.scss']
})
export class SyncSdkQcsButtonComponent implements OnInit {

  sdkCrossTableQcs = false;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.syncSdkQcsEvent$.subscribe(value => this.sdkCrossTableQcs = value);
  }

  toggleSdkCrossTableQcs(): void {
    this.sdkCrossTableQcs = !this.sdkCrossTableQcs;
    this.filterService.setSyncSdkQcs(this.sdkCrossTableQcs);
  }
}
