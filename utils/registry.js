import * as fs from 'fs/promises';

const commands = async (client, dir) => {
	const files = await fs.readdir(dir).catch(() => []);

	if (!files) return;

	for await (const file of files) {
		const command = await import(`../${dir}/${file}`);
		if (!command.data) continue;
		client.commands.set(command.data.name, command);
	}
};

const buttons = async (client, dir) => {
	const files = await fs.readdir(dir).catch(() => []);

	if (!files) return;

	for await (const file of files) {
		const button = await import(`../${dir}/${file}`);
		if (!button.data) continue;
		client.buttons.set(button.data.id, button);
	}
};

const menus = async (client, dir) => {
	const files = await fs.readdir(dir).catch(() => []);

	if (!files) return;

	for await (const file of files) {
		const menu = await import(`../${dir}/${file}`);
		if (!menu.data) continue;
		client.menus.set(menu.data.id, menu);
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

export { commands, buttons, menus, events };
