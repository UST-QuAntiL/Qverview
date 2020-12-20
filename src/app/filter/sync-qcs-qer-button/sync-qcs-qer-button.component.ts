import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-sync-qcs-qer-button',
  templateUrl: './sync-qcs-qer-button.component.html',
  styleUrls: ['./sync-qcs-qer-button.component.scss']
})
export class SyncQcsQerButtonComponent implements OnInit {

  qcsCrossTableQer = false;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.syncQcsQerEvent$.subscribe(value => this.qcsCrossTableQer = value);
  }

  toggleQcsCrossTableQer(): void {
    this.qcsCrossTableQer = !this.qcsCrossTableQer;
    this.filterService.setSyncQcsQer(this.qcsCrossTableQer);
  }
}
