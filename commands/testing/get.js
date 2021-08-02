export const data = {
	name: 'get',
	description: 'Gets data from the db',
	options: [
		{
			name: 'key',
			type: 'STRING',
			description: 'The key to get',
			required: true,
		},
	],
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const key = interaction.options.getString('key');

	const data = await client.db.get(key);
	await interaction.reply(`${key}: ${data}`);
};
