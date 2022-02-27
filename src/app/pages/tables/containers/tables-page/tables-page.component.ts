import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TablesService } from '../../services';
import { Customer, Employee, Periodicelement } from '../../models';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent {
  public employeeTableData$: Observable<Employee[]>
  public materialTableData$: Observable<Customer[]>
  public PeriodicElement$: Observable<Periodicelement[]>

  constructor(private service: TablesService) {
    this.employeeTableData$ = service.loadEmployeeTableData();
    this.materialTableData$ = service.loadMaterialTableData();
    this.PeriodicElement$ = service.loadElementTableData();
  }
}
