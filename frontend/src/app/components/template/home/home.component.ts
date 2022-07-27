import { ClientService } from './../../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  client: Client ={
    name: '',
    telefone: null,
  }

  constructor(private clientService: ClientService,
    ) { }

  ngOnInit(): void {
  }

  saveClient(): void{
    if(this.client.name && this.client.telefone){
    this.clientService.save(this.client).subscribe(()=>{
      this.clientService.showMessage('Cliente salvo no banco de dados');
      setTimeout(function() {
        window.location.reload();
      }, 1000)
    })
  }
    else{
      this.clientService.showMessage('Insira os dados para cadastro');
    }
  }
  
  cancel():void{
    window.location.reload()
  }

}
