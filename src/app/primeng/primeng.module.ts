import { NgModule } from '@angular/core';

//En este módulo importamos todos los módulos de PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputNumberModule,
    MenubarModule,
    PanelModule,
    TableModule
  ]
})

export class PrimengModule { }
