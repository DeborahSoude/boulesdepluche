import { Component, OnInit } from '@angular/core';

import { Chat } from '../chat';
import { POSITIONSSALON } from '../position-chats';
import { ChatsService } from '../chats.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  chats?: Array<Chat>;
  positions: Array<{x: number, y: number}> = POSITIONSSALON;
  selectedChat?: Chat;
  section: string = "Dormeurs";
  clickerStatus: Boolean = false;

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.chatsService.getChatFromSection(this.section).subscribe(chats => this.chats = chats);
  }

  onSelect(chats: Chat): void {
    this.selectedChat = chats;
  }

  removeOverlay(): void {
    this.selectedChat = undefined;
  }

  openClicker() {
    this.clickerStatus = true;
  }

  closeClicker(){
    this.clickerStatus = false;
  }

}
