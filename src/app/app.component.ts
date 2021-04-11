import {Component} from '@angular/core';
import {Field} from './field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'battleships';

  grid: Field[][] = [
    [new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false)],
    [new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false)],
    [new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false), new Field(true, false)]


  ];

  shoot(field: Field) {
    field.shot = true;

    if (this.hiddenShipExists());
      }

  hiddenShipExists(): boolean {
    for (const row of this.grid) {
      for (const field of row) {
        if (field.ship === true && field.shot === false) {
          return true;
        }
      }
    }
  }
}
