export const data = {
	name: 'ping',
	description: 'Replies with Pong!',
};

export const slash = true;
export const message = true;

export const interaction = async (client, interaction) => {
	await interaction.reply(`Pong! \`${client.ws.ping}\`ms`);
};
export const execute = async (client, msg, args) => {
	await msg.reply(`Pong! \`${client.ws.ping}\`ms`);
};
