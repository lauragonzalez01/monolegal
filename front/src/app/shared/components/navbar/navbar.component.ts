import { Component, OnInit } from '@angular/core';
import {NavItem} from "../../models/nav-item";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: NavItem[] = [
    {
      name: 'FACTURAS',
      redirect: '/invoice'
    },
    {
      name: 'CLIENTES',
      redirect: '/client'
    },
    {
      name: 'RECORDATORIOS',
      redirect: '/reminder'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
