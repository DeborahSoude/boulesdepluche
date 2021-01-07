import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { POSITIONSBIBLIOTHEQUE } from '../position-chats';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./sante.component.scss']
})
export class SanteComponent implements OnInit {

  chats?: Array<Chat>;
  positions: Array<{x: number, y: number}> = POSITIONSBIBLIOTHEQUE;
  selectedChat?: Chat;
  section: string = "Curieux";

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
}
