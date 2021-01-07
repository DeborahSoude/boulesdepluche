import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChatsService } from '../chats.service';
import { Partenaires } from '../partenaires';


@Component({
  selector: 'app-details-partenaires',
  templateUrl: './details-partenaires.component.html',
  styleUrls: ['./details-partenaires.component.scss']
})
export class DetailsPartenairesComponent implements OnInit {

  @Input() partenaire?: Partenaires;
  @Input() selectedCategory: string = "";
  @Output() eventLeave: EventEmitter<Boolean> = new EventEmitter();

  partenaires?: Array<Partenaires>;

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.partenaires = this.chatsService.getPartenairesFromCategory(this.selectedCategory);
  }

  leave(){
    this.eventLeave.emit(false);
  }

}
