//ng g m products --routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { DefinitionPageComponent } from './pages/definition-page/definition-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path: "",
    component: DefinitionPageComponent
  },
  {
    path: "custom",
    component: CustomPageComponent
  },
  {
    path: "number",
    component: NumberPageComponent
  },
  {
    path: "text",
    component: BasicPageComponent
  },
  {
    path: "uncommon",
    component: UncommonPageComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
