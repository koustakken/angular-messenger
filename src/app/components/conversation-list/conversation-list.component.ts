import { Component } from '@angular/core';
import { conversationListMock } from 'src/mocks/conversation-list.mock';

@Component({
	selector: 'app-conversation-list',
	templateUrl: './conversation-list.component.html',
	styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent {
	persons = conversationListMock;
}
