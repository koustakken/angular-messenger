import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modules
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
// directives
import { StatusDirective } from './directives/status.directive';

@NgModule({
	declarations: [
		AppComponent,
		ChatComponent,
		ChatMessageComponent,
		ConversationListComponent,
		StatusDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
