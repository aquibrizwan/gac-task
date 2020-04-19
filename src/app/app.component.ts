import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { API } from './API.service';
import { AngularFireDatabase } from '@angular/fire/database'
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
  cellValue;
  selectedName;
  filteredSum;
  inputTextType = 'number';
  displayedColumns;
  tableData;
  changedValues;
  dataretrive;
  title = 'timesheet-task';
  taskName;
  testData = "hello";
  binddata;
  testItems: Observable<any[]>
  res: Observable<any>;

  constructor(private api: API, public db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.fetchdata();
  }

  fetchdata() {
    this.res = this.db.list('data').valueChanges();
    this.res.subscribe(response => {
      console.log(response, 'response response')
      this.apiResponse = response;
      this.dataretrive = response
      console.log(this.apiResponse, 'res res res')
      if( this.apiResponse[0] && this.apiResponse[0].displayCol){
      this.displayedColumns = this.apiResponse[0].displayCol;
      
      console.log(this.apiResponse[0].arrayOfOrg, 'this.displayedColumns')
      // if(this.apiResponse && this.apiResponse.arrayOfOrg[0]){
      this.selectedName = this.apiResponse[0].arrayOfOrg[0].name;
      // }
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.selectedValue = this.options.filter(option => option.toLowerCase().includes(filterValue));
    this.filter();
    return this.selectedValue;
  }
  filter() {
    this.filteredArray = this.apiResponse[0].arrayOfOrg.filter(ele => ele.name == this.selectedValue);
    if (this.filteredArray && this.filteredArray.length) {
      this.tableData = this.filteredArray[0].dataSource;
      // for(let i=0; i<=this.tableData.length; i++){
      //   this.changedValues[i]
      // }
      // this.changedValues = this.tableData.slice(0)
      console.log(this.tableData,'table')
      
      var add = this.tableData.map(ele => ele.Sunday)
      console.log(add, "add addd")
      var sumSunday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumSunday, 'sum sum sum')

      var add = this.tableData.map(ele => ele.Monday)
      console.log(add, "add addd")
      var sumMonday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumMonday, 'sum sum sum')

      var add = this.tableData.map(ele => ele.Tuesday)
      console.log(add, "add addd")
      var sumTuesday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumTuesday, 'sum sum sum')

      var add = this.tableData.map(ele => ele.Wednesday)
      console.log(add, "add addd")
      var sumWednesday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumWednesday, 'sum sum sum')

      var add = this.tableData.map(ele => ele.thursday)
      console.log(add, "add addd")
      var sumthursday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumthursday, 'sum sum sum')

      var add = this.tableData.map(ele => ele.Friday)
      console.log(add, "add addd")
      var sumFriday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumFriday, 'sum sum sum')

      var add = this.tableData.map(ele => ele.Saturday)
      console.log(add, "add addd")
      var sumSaturday = add.reduce(function (a, b) {
        return +a + +b;
      }, 0);
      console.log(sumSaturday, 'sum sum sum')
      this.binddata= {TaskName : 'Total', Sunday : sumSunday,Monday: sumMonday , Tuesday:sumTuesday, Wednesday:sumWednesday,thursday:sumthursday,Friday:sumFriday,Saturday:sumSaturday}
      if(this.tableData && this.tableData.length){
      console.log(this.tableData,'table datadatyfu')// this.totalAvg()
      // this.tableData.pop();
      this.tableData.push(this.binddata)
      console.log(this.tableData,'table datadatyfu')
      }

      console.log(this.changedValues, 'this.changedValues this.changedValues this.changedValues')
      if (this.filteredArray[0].dataSource.map(ele => ele.TaskName)) {
        this.inputTextType = 'text'
      }
      else {
        this.inputTextType = 'number'
      }
    }
  }
  sumOperation(){
     this.fetchdata()
  }
  initialData() {
    console.log(this.selectedValue, ' this.changedValues  this.changedValues')
  }

  backToList() {
    this.db.list('data').remove()
    this.tableData.pop()
    console.log(this.apiResponse[0], 'sdfsdfesd')
    this.apiResponse[0].arrayOfOrg.filter(ele => {
      if (ele.name == this.selectedValue + "") {
        console.log(this.selectedName, ele.name)
        ele.dataSource = this.tableData;
      }
    })
    // but you are not making any update api call to update the data in firebase 

    // this.fetchdata();
    //  var data =   {displayCol: ['TaskName', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday'],

    //  arrayOfOrg :[
    //      {
    //        name: 'Arif',
    //        dataSource: [
    //          { TaskName: 'Development of app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //          { TaskName: 'Design new app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //          { TaskName: 'Bug fixes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //          { TaskName: 'Development of featutes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //        ]
    //      },
    //      {
    //          name: 'Asif',
    //          dataSource: [
    //            { TaskName: 'Development of some app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //            { TaskName: 'Design new app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //            { TaskName: 'Bug fixes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //            { TaskName: 'Development of featutes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //          ]
    //        },
    //        {
    //          name: 'Aquib',
    //          dataSource: [
    //            { TaskName: 'Development of some app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //            { TaskName: 'Design new app', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //            { TaskName: 'Bug fixes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //            { TaskName: 'Development of featutes', Sunday: '8', Monday: '8', Tuesday: '8', Wednesday: '8', thursday: '5', Friday: '5', Saturday: '7' },
    //          ]
    //        }
    //  ]}
    var data = {};
    data = this.apiResponse[0]
    console.log(this.apiResponse[0],'this.apiResponse[0] this.apiResponse[0]')
    this.db.list('data').push(data)
  }

  clickGoesHere() {
    if (this.taskName) {
      this.initailData = this.tableData;;
      this.tableData.splice(this.tableData.length - 1, 0, { TaskName: this.taskName, Sunday: '0', Monday: '0', Tuesday: '0', Wednesday: '0', thursday: '0', Friday: '0', Saturday: '0' });
      this.tableData = this.tableData.slice();
      this.taskName = '';
    }
  }

  cellValueChange(ele, col) {
    console.log(this.dataretrive[0], 'sdfsdfesd')
    console.log(ele, col, "ele")
    // console.log(element[col],"cellValue cellValue cellValue")

  }

  getTotal (col) {
    console.log('data source --------------------- ', col, this.tableData)
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
