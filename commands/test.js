import { applicationCommandTypes, componentTypes } from "./abstract.js"

import {
	InteractionResponseType,
} from 'discord-interactions';

class TestCommand {
	static command_data = {
		name: 'test',
		description: 'Test',
		type: applicationCommandTypes.CHAT_SLASH_COMMAND,
	};

	static async execute(res, data) {
		// Send a message into the channel where command was triggered from
		return {
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				// Fetches a random emoji to send from a helper function
				content: 'hello world ',
			},
		};
	}
}

export default TestCommand;
