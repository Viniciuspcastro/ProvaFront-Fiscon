import { ClientService } from './../../client.service';
import { Client } from './../../client.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {
 
  @ViewChild(MatSort) sort!: MatSort;

  client: Client[] = [];
  dataSource:any;

  displayedColumns = ['id', 'name', 'telefone', 'action']

  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
    this.clientService.read().subscribe(client=>{
     this.client = client
      this.dataSource = new MatTableDataSource<any>(this.client)
  })
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.client=this.dataSource
  }

  sortData(sort: Sort) { this.dataSource.sort = this.sort; }
  
}

