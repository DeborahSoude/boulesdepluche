import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

  @Output() eventLeave: EventEmitter<Boolean> = new EventEmitter();

  coeur: number = 60;
  argent: number = 60;

  constructor() { }

  ngOnInit(): void {
  }

  incCoeurs(){
    this.coeur > 0 ? this.coeur-- : this.coeur = -1;
    this.coeur == -1 ? this.coeur = 61 : "";
  }

  incArgent(){
    this.argent > 0 ? this.argent-- : this.argent = -1;
    this.coeur = 60;
  }

  replay() {
    this.coeur = 60;
  }

  leave(){
    this.eventLeave.emit(false);
    this.coeur = 60;
  }

}
