import { Component } from '@angular/core';
import { Hero, Raza } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export class CustomPageComponent {
  //customPipe1
  public text: string = "Con diez cañones por banda, viento en popa, a toda vela, no corta el mar, sino vuela un velero bergantín.";
  public remainder: number = 0;

  changeRemainder() {
    this.remainder == 1 ? this.remainder = 0 : this.remainder = 1;
  }

  //customPipe2
  public num: number = 5;
  public changeNum(e: any) {
    this.num = e.value
  }

  //sortBy
  public personajes: Hero[] = [
    { nombre: "Goku", vuela: true, raza: Raza.Saiyan },
    { nombre: "Piccolo", vuela: true, raza: Raza.Namekiano },
    { nombre: "Mr. Satán", vuela: false, raza: Raza.Humano },
    { nombre: "Vegeta", vuela: true, raza: Raza.Saiyan },
    { nombre: "Krilin", vuela: true, raza: Raza.Humano }
  ]

  public orderBy: keyof Hero | null = null;
  public order: "asc" | "des" = "asc";

  changeOrder( value: keyof Hero ) {
    this.order == "asc" ? this.order = "des" : this.order = "asc";
    this.orderBy = value;
  }
}
