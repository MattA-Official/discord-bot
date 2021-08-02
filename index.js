import { Client, Intents, Collection } from 'discord.js';
import Keyv from 'keyv';
import 'dotenv/config';

import { commands, buttons, events, menus } from './utils/registry.js';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();
if (process.env.REDIS_URI) client.db = new Keyv(process.env.REDIS_URI);
else {
	console.log(`REDIS_URI not set, using in-memory store`);
	client.db = new Keyv();
}

client.db?.on('error', (err) => console.error('DB connection error:', err));

await commands(client, './commands');
await buttons(client, './components/buttons');
await menus(client, './components/menus');
await events(client, './events');

client.login(process.env.BOT_TOKEN);
