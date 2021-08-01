export const data = {
	id: 'select',
};

export const interaction = async (client, interaction) => {
	const option = interaction.values[0];

	await interaction.reply(`${option} was Selected!`);
};
