import { applicationCommandTypes } from "./abstract.js"

import {
	InteractionResponseType,
} from 'discord-interactions';

async function getRandomEmoji() {
	const emojiList = ['😭', '😄', '😌', '🤓', '😎', '😤', '🤖', '😶‍🌫️', '🌏', '📸', '💿', '👋', '🌊', '✨'];
	return emojiList[Math.floor(Math.random() * emojiList.length)];
}

class ScheduleThisMessageCommand {
	static command_data = {
		name: 'Schedule the selected message',
		type: applicationCommandTypes.MENU_ON_MESSAGE,
	};

	static async execute(res, data) {
		// Send a message into the channel where command was triggered from
		return {
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				// Fetches a random emoji to send from a helper function
				content: 'hello world ' + await getRandomEmoji(),
			},
		};
	}
}

export default ScheduleThisMessageCommand;