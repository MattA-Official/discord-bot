import { Client, Intents, Collection } from 'discord.js';
import 'dotenv/config';

import { commands, events } from './utils/registry.js';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();

await commands(client, './commands');
await events(client, './events');

console.log(client.commands);

client.login(process.env.BOT_TOKEN);
