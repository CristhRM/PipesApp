import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
    nameLower: string = 'andres';
    nameUpper: string = 'ANDRES';
    nameTitle: string = 'aNdReS rIoS';
    date: Date = new Date();
}
