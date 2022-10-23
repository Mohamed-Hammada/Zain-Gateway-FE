import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/helper/dialog.service';
import { ExcelServiceService } from 'src/app/helper/excel.service.service';
import { UserService } from 'src/app/shared/user.service';
import { NotificationService } from './../../../helper/notification.service'
import { ApiUserCreateComponent } from './../api-user-create/api-user-create.component';

@Component({
  selector: 'app-api-user-main-view',
  templateUrl: './api-user-main-view.component.html',
  styleUrls: ['./api-user-main-view.component.css']
})
export class ApiUserMainViewComponent implements OnInit {


  displayedColumns: string[] = [ 'NAME' , 'PASSWORD', 'UPDATE' ];
  checker:any;
  dataArray!: MatTableDataSource<any>;
  tableData : any = []
  start_date = new Date();
  end_date = new Date();
  searchKey: any;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: UserService,
    private notificationService: NotificationService, private dialog: MatDialog,
    private dialogService: DialogService, private excelService: ExcelServiceService) { }

  ngOnInit() {
    this.loadData();
  }


  setEndDate(event: any): void {
    this.end_date = event;
  }

  setStartDate(event: any): void {
    this.start_date = event;
  }

  loadData() {

    this.service.getAll().subscribe(data => {
      if (data) {
        this.tableData = []
        this.dataArray = new MatTableDataSource<any>(this.tableData);
this.dataArray.filterPredicate = (data: any, filterValue:string) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filterValue) != -1;
    }
        this.dataArray.filter = ''
        this.dataArray.paginator = this.paginator;

        if (data.length > 0) {
          console.table(data)

          data.forEach((ele: any)  => {
            this.tableData.push(ele);
          });

          this.dataArray = new MatTableDataSource<any>(this.tableData);
this.dataArray.filterPredicate = (data: any, filterValue:string) => {
      const dataStr =JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filterValue) != -1;
    }
          this.dataArray.filter = ''
          this.dataArray.paginator = this.paginator;
        }

      }

    },
      error => {
        //  this.successMsg = NaN
        //  this.errorMsg = error.message
        this.notificationService.warn(error.message)
      });
  }


  onSearchClear() {
    this.applyFilter("");
  }


  applyFilter(filterValue: string) {
    this.dataArray.filter = filterValue.trim().toLowerCase();
  }


  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef =   this.dialog.open(ApiUserCreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{

      this.loadData();
    });

  }


  onEdit(row:any) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogRef =   this.dialog.open(ApiUserCreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{

      this.loadData();
    });
  }

  onDelete($key:any) {
    this.dialogService.openConfirmDialog('Are You Sure ?')
      .afterClosed().subscribe(res => {

        if (res) {
          this.service.deleteById($key).subscribe(() => {
            this.notificationService.success('Deleted Successfully');
            this.loadData();
          },
            error => {
              this.notificationService.warn(error.message)

            });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('gggggggggggggggg')
    this.loadData();

  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile( 'api users');
  }

}
