import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { API } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['Arif', 'Asif', 'Aquib'];
  filteredOptions: Observable<string[]>;
  selectedValue;
  filteredArray;
  initailData;
  apiResponse;
  selectedName;
  filteredSum;
  inputTextType = 'number';
  displayedColumns;
  tableData;
  title = 'timesheet-task';
  taskName;
  constructor(private api: API) {

  }

  ngOnInit() {
    this.api.getUserData().subscribe((res: any) => {
      this.apiResponse = res;
      this.displayedColumns = this.apiResponse.displayCol;
      this.selectedName = this.apiResponse.arrayOfOrg[0].name;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.selectedValue = this.options.filter(option => option.toLowerCase().includes(filterValue));
    this.filter();
    return this.selectedValue;
  }
  filter() {
    this.filteredArray = this.apiResponse.arrayOfOrg.filter(ele => ele.name == this.selectedValue);
    if (this.filteredArray && this.filteredArray.length) {
      this.tableData = this.filteredArray[0].dataSource;
      if (this.filteredArray[0].dataSource.map(ele => ele.TaskName)) {
        this.inputTextType = 'text'
      }
      else {
        this.inputTextType = 'number'
      }
    }
    // this.totalAvg()
  }
  initialData() {
    this.api.getUserData().subscribe((res: any) => {
      this.apiResponse = res;
      this.displayedColumns = this.apiResponse.displayCol;
    })
    alert('Need API, Running with MOCK Data')
  }

  backToList() {
    alert('Need API, Running with MOCK Data')
  }

  clickGoesHere() {
    if (this.taskName) {
      this.initailData = this.tableData;;
      this.tableData.splice(this.tableData.length - 1, 0, { TaskName: this.taskName, Sunday: '0', Monday: '0', Tuesday: '0', Wednesday: '0', thursday: '0', Friday: '0', Saturday: '0' });
      this.tableData = this.tableData.slice();
      this.taskName = '';
    }
  }

  // totalAvg() {
  //   console.log(this.selectedValue)
  //   const filteredAaa = this.apiResponse.arrayOfOrg.filter(ele => ele.name == this.selectedValue + '')
  //   if (filteredAaa.length && filteredAaa[0].dataSource)
  //     this.filteredSum = filteredAaa[0].dataSource.map(ele => ele.Sunday).reduce(function (a, b) {
  //       return +a + +b;
  //     }, 0);;

  //   console.log(this.filteredSum)
  // }
}
