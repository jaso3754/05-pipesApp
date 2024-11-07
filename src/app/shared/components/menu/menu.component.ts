import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
    {
      label: 'pipes de angular ',
      icon: 'pi pi-desktop',
      item: [
        {
          label: ' Textos y Fechas',
          icon: ' pi pi-align-left ',
        },
        {
          label: ' Numeros ',
          icon: ' pi pi-dollar',
        },
        {
          label: ' Np comunes  ',
          icon: ' pi pi-glove',
        },
      ]
    },
    {
      label: ' Pipes Personalizados',
      icon: ' pi pi-cog'
    }
  ];

  }
}
