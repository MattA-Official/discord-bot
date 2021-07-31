export const name = 'interactionCreate';
export const execute = async (client, interaction) => {
	if (!interaction.isCommand()) return;

	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands
			.get(interaction.commandName)
			.interaction(client, interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
};
