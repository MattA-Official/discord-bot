export const name = 'ready';
export const once = true;
export const execute = async (client) => {
	console.log(`Logged in as ${client.user.tag}`);

	const commands = client.commands.map((command) => {
		if (command.slash) return command.data;
	});

	if (process.env.NODE_ENV != 'production') {
		await client.guilds.cache.get('854750621257564171')?.commands.set(commands);
	} else {
		await client.application?.commands.set(commands);
	}
};
