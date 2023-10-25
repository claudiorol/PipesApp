import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent implements OnInit {

  //i18Select
  public name: string = "Claudio";
  public gender: "Hombre" | "Mujer" = "Hombre";
  public invitationMap = {
    Hombre: "invitarlo",
    Mujer:  "invitarla"
  }

  changeUser(): void {
    if (this.gender == "Hombre") {
      this.name = "Leticia";
      this.gender = "Mujer";
    } else {
      this.name = "Claudio";
      this.gender = "Hombre";
    }
  }

  //i18Plural
  public subscribers : number = 3;
  public subscribersMap = {
    '=0': 'no tenemos subscriptores',
    '=1': 'tenemos un subscriptor',
    'other': 'tenemos # subscriptores',
  }

  add(): void {
    this.subscribers++;
  }

  delete(): void {
    if (this.subscribers == 0) {
      return
    }
    this.subscribers--;
  }

  public divWidth: number = 0;

  @ViewChild("i18nPluralContainer", {static: true}) pluralContainerDiv!: ElementRef;

  getDivWidth(): void {
    this.divWidth = this.pluralContainerDiv.nativeElement.clientWidth;
  }

  @HostListener("window:resize") onResize() {
    this.getDivWidth();
  }



  //json & keyvalue
  public data = {
    nombre: "Claudio",
    primerApellido: "Roldán",
    segundoApellido: "Rodríguez",
    fechaNacimiento: "31/01/1989"
  }

  //async

  //cada segundo y medio va a emitir un valor desde 0, 1, 2... y así sucesivamente
  public intervalValue: number = 0;
  public interval = interval(1500);

  ngOnInit(): void {
    this.getDivWidth();
    this.interval.subscribe((num)=> {
      this.intervalValue = num
    })
  }
}
