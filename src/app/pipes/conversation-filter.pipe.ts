import { Pipe, PipeTransform } from '@angular/core';
import { BaseConversationModel } from 'src/models/conversation.model';

@Pipe({
	name: 'conversationFilter'
})
export class ConversationFilterPipe implements PipeTransform {

	transform(value: BaseConversationModel[], searchTerm: string): BaseConversationModel[] {
		return searchTerm
			? value.filter(person => person.participants[1].username.toLowerCase().includes(searchTerm.toLowerCase()))
			: value;
	}

}
