import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chat } from '../chat';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-details-membres',
  templateUrl: './details-membres.component.html',
  styleUrls: ['./details-membres.component.scss']
})
export class DetailsMembresComponent implements OnInit {

  @Input() chat?: Chat;
  @Output() removeOverlay: EventEmitter<Boolean> = new EventEmitter();

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {

  }

  getAge(){
    let today = Date.now();
    if (this.chat?.naissance == null) {
      return "N/A";
    }

    let birthday = new Date(this.chat.naissance).getTime();
    if(birthday == null) {
      return null;
    }

    let diff = today-birthday;
    let years = Math.floor((diff/(1000*3600*24))/365.25);
    let month = Math.trunc((((diff/(1000*3600*24))/365.25)-years)*12);

    let res = '';
    res += years == 1 ? (years + ' an ') : (years > 0 ? years + ' ans ' : '');
    res += month > 0 ? month + ' mois ' : '';

    return res;
  } 

  removeDetails(){
    this.chat = undefined;
    this.removeOverlay.emit(false);
  }


}
