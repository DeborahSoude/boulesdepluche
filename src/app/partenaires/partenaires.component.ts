import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { POSITIONSCUISINE } from '../position-chats';
import { ChatsService } from '../chats.service';
import { Partenaires } from '../partenaires';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {

  chats?: Array<Chat>;
  positions: Array<{x: number, y: number}> = POSITIONSCUISINE;
  selectedChat?: Chat;
  section: string = "Gourmands";
  partenaires?: Array<Partenaires>;
  selectedCategory?: Partenaires;
  partenaireDetailsCategorie?: string;

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.chatsService.getChatFromSection(this.section).subscribe(chats => this.chats = chats);
  }

  onSelect(chats: Chat): void {
    this.selectedChat = chats;
  }

  onSelectCategory(categorie: string): void {
    this.partenaireDetailsCategorie = categorie;
  }

  removeOverlay(){
    this.selectedChat = undefined;
  }

  closePartenairesDetails(){
    this.partenaireDetailsCategorie = undefined;
  }


}
