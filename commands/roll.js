export const data = {
	name: 'roll',
	description: 'Roll a die (default 6 sides)',
	options: [
		{
			name: 'sides',
			type: 'INTEGER',
			description: 'The number of sides for the die to have',
		},
	],
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const sides = interaction.options.getInteger('sides') || 6;
	const result = Math.floor(Math.random() * sides) + 1;
	interaction.reply(`You rolled a ${result}`);
};
