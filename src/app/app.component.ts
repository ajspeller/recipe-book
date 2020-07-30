import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mode = 'recipe';

  setMode(mode: string): void {
    this.mode = mode;
  }
}
