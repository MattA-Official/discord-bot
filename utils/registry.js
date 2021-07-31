import * as fs from 'fs/promises';

const commands = async (client, dir) => {
	const files = await fs.readdir(dir).catch(() => []);

	if (!files) return;

	for await (const file of files) {
		const command = await import(`../${dir}/${file}`);
		client.commands.set(command.data.name, command);
	}
};

const events = async (client, dir) => {
	const files = await fs.readdir(dir).catch(() => []);

	if (!files) return;

	for await (const file of files) {
		const event = await import(`../${dir}/${file}`);

		if (event.once) {
			client.once(event.name, (...args) => event.execute(client, ...args));
		} else {
			client.on(event.name, (...args) => event.execute(client, ...args));
		}
	}
};

export { commands, events };
