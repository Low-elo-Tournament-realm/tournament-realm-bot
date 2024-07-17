/*
Application Command Types
NAME        TYPE    DESCRIPTION
CHAT_INPUT  1       Slash commands; a text-based command that shows up when a user types /
USER        2       A UI-based command that shows up when you right click or tap on a user
MESSAGE     3       A UI-based command that shows up when you right click or tap on a message
*/

export const applicationCommandTypes = {
	CHAT_SLASH_COMMAND: 1,
	MENU_ON_USER: 2,
	MENU_ON_MESSAGE: 3
};

/*
Component Types
TYPE    NAME               DESCRIPTION
1       Action Row         Container for other components
2       Button             Button object
3       String Select      Select menu for picking from defined text options
4       Text Input         Text input object
5       User Select        Select menu for users
6       Role Select        Select menu for roles
7       Mentionable Select Select menu for mentionables (users and roles)
8       Channel Select     Select menu for channels
*/
export const componentTypes = {
	ActionRow: 1,
	Button: 2,
	StringSelect: 3,
	TextInput: 4,
	UserSelect: 5,
	RoleSelect: 6,
	MentionableSelect: 7,
	ChannelSelect: 8
};
