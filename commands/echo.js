export const data = {
	name: 'echo',
	description: 'Replies with your input!',
	options: [
		{
			name: 'input',
			type: 'STRING',
			description: 'The input to echo back',
			required: true,
		},
	],
};
export const slash = true;
export const interaction = async (client, interaction) => {
	const reply = interaction.options.getString('input');
	await interaction.reply(reply);
};
export const execute = async (client, msg, args) => {
	const reply = args.join(' ');
	await msg.channel.send(reply);
};
