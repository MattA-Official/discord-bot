export const data = {
	name: 'ping',
	description: 'Replies with Pong!',
};

export const slash = true;
export const message = true;

export const interaction = async (client, interaction) => {
	await interaction.reply('Pong!');
};
export const execute = async (client, msg, args) => {
	await msg.reply('Pong!');
};
