export const data = {
	id: 'primary',
};

export const interaction = async (client, interaction) => {
	await interaction.update('Pong!');
};
