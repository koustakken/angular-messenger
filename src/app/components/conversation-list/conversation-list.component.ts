import { Component } from '@angular/core';
import { conversationListMock } from 'src/mocks/conversation-list.mock';
import { BaseConversationModel } from 'src/models/conversation.model';

@Component({
	selector: 'app-conversation-list',
	templateUrl: './conversation-list.component.html',
	styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent {
	persons: BaseConversationModel[] = conversationListMock;
	searchTerm: string = '';
}
