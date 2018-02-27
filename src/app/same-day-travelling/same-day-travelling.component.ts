import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

import { TestService } from '../test.service';

@Component({
  selector: 'app-same-day-travelling',
  templateUrl: './same-day-travelling.component.html',
  styleUrls: ['./same-day-travelling.component.css']
})
export class SameDayTravellingComponent implements OnInit {

  
    sameDayData;
    displayedColumns = ['name', 'from', 'to','date'];
    dataSource;
   
    constructor(private ts: TestService) { }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

  ngOnInit() {

      this.ts.getSameDayService().subscribe(data => {
          this.sameDayData = data;
          this.dataSource = new MatTableDataSource(this.sameDayData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(data);
      },
          err => console.error(err),
          () => console.log('save assistance completed')
      );
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  

}
