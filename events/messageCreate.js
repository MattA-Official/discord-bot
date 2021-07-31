const prefix = '?';

export const name = 'messageCreate';
export const execute = async (client, message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const args = [];
	message.content
		.slice(prefix.length)
		.trim()
		.replace(/[“”]/g, '"')
		.match(/\s*(?:(")([^]*?)"|(\S+))\s*/g)
		?.forEach((match) => {
			if (!match) return;
			return args.push(match.trim().replace(/["]+/g, ''));
		});

	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (!command || !command.message) return;

	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
};
