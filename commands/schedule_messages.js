import { applicationCommandTypes, componentTypes } from "./abstract.js"

import {
	InteractionResponseType,
} from 'discord-interactions';

class ScheduleMessagesCommand {
	static command_data = {
		name: 'schedule_message',
		description: 'Schedule a message to be sent in the future or even many times in the future.',
		type: applicationCommandTypes.CHAT_SLASH_COMMAND,
		options: [
			{
				name: "message",
				description: "Schedule just a simple text",
				type: 1
			},
			{
				name: "poll",
				description: "Schedule a whole poll",
				type: 1
			}
		]
	};

	static async execute(res, data) {
		console.log(data);
		const subcommand = data.options[0].name;
		// Send a message into the channel where command was triggered from
		if (subcommand == this.command_data.options[0].name)
			return {
				type: InteractionResponseType.MODAL,
				data: {
					custom_id: "messagemodal",
					title: 'Time to setup the message',
					components: [
						{
							custom_id: 'message_content',
							type: componentTypes.TextInput,
							style: 2, // Paragraph
							label: 'Your message',
							required: true,
							placeholder: 'Official match this weekend!'
						},
					]
				}
			};
		else
			return {
				type: InteractionResponseType.MODAL,
				data: {
					custom_id: "pollmodal",
					title: 'Time to setup the poll',
					components: [
						{
							custom_id: 'pool_question',
							type: componentTypes.TextInput,
							style: 2, // Paragraph
							label: 'Your question',
							required: true,
							placeholder: 'When are you available next week?'
						},
						{
							custom_id: 'pool_answers',
							type: componentTypes.TextInput,
							style: 2, // Paragraph
							label: 'Your options. One per line.',
							required: true,
							placeholder: 'Monday evening\nWednesday evening\nFriday evening'
						},
					]
				}
			};
	}
}

export default ScheduleMessagesCommand;

/*,
					poll: {
						question: { text: "text?" },
						answers: [
							{answer_id: 1, poll_media: { text: "test1" }},
							{answer_id: 2, poll_media: { text: "test2" }},
						],
						allow_multiselect: true
					}*/