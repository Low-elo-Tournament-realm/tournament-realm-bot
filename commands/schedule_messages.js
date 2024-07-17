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
				allowed_mentions: true,
				poll: {
					question: "Test?",
					answers: [
						{ answer_id: 10, poll_media: { text: "hi" } },
						{ answer_id: 2, poll_media: { text: "hi2" } },
					]
				}
			}
		};
	}
}

export default ScheduleMessagesCommand;
