import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public fullName = 'cLauDio rOLdáN rodRíGUez';
  public date: Date = new Date();
}
