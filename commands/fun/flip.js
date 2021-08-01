export const data = {
	name: 'flip',
	description: 'Flip a coin',
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const result = Math.floor(Math.random() * 2) == 0 ? 'Heads' : 'Tails';
	interaction.reply(result);
};
