export const name = 'ready';
export const once = true;
export const execute = async (client) => {
	console.log(`Logged in as ${client.user.tag}`);

	const commands = client.commands
		.filter((command) => command.slash === true)
		.map((command) => command.data);

	await client.guilds.cache.get(process.env.GUILD_ID)?.commands.set(commands);

	const cmds = await client.guilds.cache
		.get(process.env.GUILD_ID)
		?.commands.fetch();

	client.commands
		.filter((command) => command.slash === true)
		.filter((command) => command.permissions)
		.each(async (command) => {
			const cmd = await cmds
				.filter((cmd) => cmd.name === command.data.name)
				?.first();
			if (cmd) cmd.permissions?.set({ permissions: command.permissions });
		});
};
