import {Periodicelement} from '../../models/periodicelement';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';


/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'app-element-table',
  styleUrls: ['element-table.component.css'],
  templateUrl: 'element-table.component.html',
})
export class ElementTableComponent {
  @Input() Periodicelement: Periodicelement[];
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource: Periodicelement[];

  public ngOnInit() {
    this.dataSource = this.Periodicelement;
  }
  
}
