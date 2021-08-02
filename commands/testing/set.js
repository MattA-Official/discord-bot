export const data = {
	name: 'set',
	description: 'Puts data in the db',
	options: [
		{
			name: 'key',
			type: 'STRING',
			description: 'The key to set',
			required: true,
		},
		{
			name: 'value',
			type: 'STRING',
			description: 'The value to store',
			required: true,
		},
	],
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const key = interaction.options.getString('key');
	const value = interaction.options.getString('value');

	await client.db.set(key, value);
	await interaction.reply(`Set ${key} to ${value}`);
};
