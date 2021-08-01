import { MessageActionRow, MessageSelectMenu } from 'discord.js';
// const row = new MessageActionRow()
// 	.addComponents(
//
// 	);

// await interaction.reply({ content: 'Pong!', components: [row] });

export const data = {
	name: 'menu',
	description: 'Creates a menu',
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const menu = new MessageSelectMenu()
		.setCustomId('select')
		.setPlaceholder('Nothing selected')
		.addOptions([
			{
				label: 'Select me',
				description: 'This is a description',
				value: 'first_option',
			},
			{
				label: 'You can select me too',
				description: 'This is also a description',
				value: 'second_option',
			},
		]);

	const row = new MessageActionRow().addComponents(menu);

	await interaction.reply({ content: 'ping...', components: [row] });
};
