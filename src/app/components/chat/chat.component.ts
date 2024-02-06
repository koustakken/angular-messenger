import { Component, Input } from '@angular/core';
import { SelectedConversationModel } from 'src/models/conversation.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() selectedConversation: SelectedConversationModel | undefined;
}
