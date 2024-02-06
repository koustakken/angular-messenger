import { Component, Input } from '@angular/core';
import { ConversationMessageModel } from 'src/models/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  @Input() message: ConversationMessageModel | undefined;
}
