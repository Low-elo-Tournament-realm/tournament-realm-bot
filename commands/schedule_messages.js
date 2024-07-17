import { applicationCommandTypes, componentTypes } from "./abstract.js"

import {
	InteractionResponseType,
} from 'discord-interactions';

function getRandomEmoji() {
	const emojiList = ['😭', '😄', '😌', '🤓', '😎', '😤', '🤖', '😶‍🌫️', '🌏', '📸', '💿', '👋', '🌊', '✨'];
	return emojiList[Math.floor(Math.random() * emojiList.length)];
}

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
				title: "Setup this message's schedule",
				components: [
					{
						custom_id: "pesho",
						type: componentTypes.Button,
						style: 5,
						url: "google.com",
						label: "click me"
					}
				]
			}
		};
	}
}

export default ScheduleMessagesCommand;
