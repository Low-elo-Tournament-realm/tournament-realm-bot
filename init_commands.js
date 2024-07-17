import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

import * as scheduled_messages from './commands/schedule_messages.js'
import * as schedule_this_message from './commands/schedule_this_message.js'

export const ALL_COMMANDS = [scheduled_messages, schedule_this_message].map((x) => x.default);

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS.map((command_class) => command_class.command_data));
