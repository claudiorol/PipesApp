//ng g m products --routing
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';

//Pipes
import { CustomPipe1 } from './pipes/custom-pipe1.pipe';
import { CustomPipe2 } from './pipes/custom-pipe2.pipe';
import { CanFly } from './pipes/can-fly.pipe';
import { SortBy } from './pipes/sort-by.pipe';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
    CustomPageComponent,
    CustomPipe1,
    CustomPipe2,
    CanFly,
    SortBy,
    DefinitionPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ]
})
export class ProductsModule { }
