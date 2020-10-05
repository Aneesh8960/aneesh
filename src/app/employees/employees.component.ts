import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }
  departments = [{ id: 1, value: 'Dep 1' },
               { id: 2, value: 'Dep 2' },
               { id: 3, value: 'Dep 3' }];

  ngOnInit() {
  }

}
