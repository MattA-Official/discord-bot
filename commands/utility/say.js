export const data = {
	name: 'say',
	description: 'Send a message through the bot',
	options: [
		{
			name: 'message',
			description: 'message to send',
			type: 'STRING',
			required: true,
		},
		{
			name: 'channel',
			description: 'Channel to send message in',
			type: 'CHANNEL',
		},
	],
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const channel = interaction.options.getChannel('channel');
	const message = interaction.options.getString('message');

	if (!channel) {
		await interaction.channel.send(message);

		await interaction.reply({
			content: 'Sent message!',
			ephemeral: true,
		});
	} else {
		await channel.send(message);

		await interaction.reply({
			content: `Sent message to ${channel}!`,
			ephemeral: true,
		});
	}
};
