import { Component, OnInit } from '@angular/core';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      res => {
        this.clients = res as Client[];
      }
    );
  }

}
