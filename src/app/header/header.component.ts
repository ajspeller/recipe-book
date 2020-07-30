import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() currentMode = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitMode(mode: string): void {
    this.currentMode.emit(mode);
  }

  onSelectedMode(mode: string): void {
    this.emitMode(mode);
  }
}
