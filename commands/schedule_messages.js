import { applicationCommandTypes, componentTypes } from "./abstract.js"

import {
	InteractionResponseType,
} from 'discord-interactions';

class ScheduleMessagesCommand {
	static command_data = {
		name: 'schedule_message',
		description: 'Schedule a message to be sent in the future or even many times in the future.',
		type: applicationCommandTypes.CHAT_SLASH_COMMAND,
	};

	static async execute(res, data) {
		// Send a message into the channel where command was triggered from
		return {
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				content: 'Hello there',
				poll: {
					question: { text: "text?" },
					answers: [
						{answer_id: 1, poll_media: { text: "test1" }},
						{answer_id: 2, poll_media: { text: "test2" }},
					],
					allow_multiselect: true
				}
			}
		};
	}
}

export default ScheduleMessagesCommand;
