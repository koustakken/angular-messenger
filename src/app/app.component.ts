import { Component } from '@angular/core';
import { selectedConversationsMock } from 'src/mocks/selected-conversations.mock';
import { BaseConversationModel, SelectedConversationModel } from 'src/models/conversation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-messenger';
  selectedConversation: SelectedConversationModel | undefined;

  onSelectConversation(conversation: BaseConversationModel) {
    this.selectedConversation = selectedConversationsMock.find(item => item.id === conversation.id);
  }
}
