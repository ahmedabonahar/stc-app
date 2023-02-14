import { AdminApiService } from './../../admin-services/admin-api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent {

  displayedColumns: string[] = ['id', 'image', 'name', 'price', 'category', 'actions'];
  dataSource: MatTableDataSource<any>;
  allProductsData: any = [];
  source: any = null;


  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private _apiServices: AdminApiService) {
    this.dataSource = new MatTableDataSource(this.allProductsData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAllProductsDOM();
  }

  getAllProductsDOM() {
    this._apiServices.getAllProducts().subscribe({
      next: (data: any) => {
        this.allProductsData = data;
        this.source = this.allProductsData;
        this.dataSource = new MatTableDataSource<any>(this.source);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error: (err: Error) => {
      }
    })
  }

  deleteProduct(id: Number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2 border-0',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiServices.deleteProductsByID(id).subscribe((response: any) => {
          if (response.id > 0) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}

