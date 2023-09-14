import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: "Pipes de Angular",
        icon: "pi pi-star",
        items: [
          { label: "Textos y fechas", icon: "pi pi-desktop", routerLink: "/" },
          { label: "Números", icon: "pi pi-euro", routerLink: "/number" },
          { label: "No comunes", icon: "pi pi-star", routerLink: "/uncommon" }
        ]
      },
      {
        label: "Pipes personalizados",
        icon: "pi pi-star-fill",
        items: [
          { label: "Otros", icon: "pi pi-cog", routerLink: "/custom" }
        ]
      }
    ]
  }
}
