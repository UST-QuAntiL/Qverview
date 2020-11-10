import { Component, OnInit } from '@angular/core';
import { FilterUpdateService } from './filter-update.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private filterUpdateService: FilterUpdateService) { }

  ngOnInit(): void {
    this.filterUpdateService.events$.forEach(filterUpdateEvent => {
      console.log(filterUpdateEvent);
    });
  }

  test() {
    this.filterUpdateService.updateFilter('test');
  }

}
