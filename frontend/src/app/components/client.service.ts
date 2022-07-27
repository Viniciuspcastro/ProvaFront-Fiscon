import { Client } from './client.model';
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClientService{

    jsonURL = "http://localhost:3001/client"

    constructor(private snackBar: MatSnackBar,
        private http: HttpClient){}

        showMessage(msg: string):void{
            this.snackBar.open(msg, 'X',{
                duration:3500,
                horizontalPosition:"right",
                verticalPosition:"top"
            })
        }

        save(client: Client): Observable<Client>{
            return this.http.post<Client>(this.jsonURL, client)
        }

        read(): Observable<Client[]>{
            return this.http.get<Client[]>(this.jsonURL)
          }

        readById(id:any): Observable<Client>{
            const url = `${this.jsonURL}/${id}`
            return this.http.get<Client>(url)
          }

        delete(client: Client): Observable<Client>{
            const url = `${this.jsonURL}/${client.id}`
            return this.http.delete<Client>(url)
          }
        
}