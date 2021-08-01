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
	defaultPermission: false,
};

export const permissions = [
	{
		id: '366652352125599744',
		type: 'USER',
		permission: true,
	},
];

export const slash = true;
export const message = true;

export const interaction = async (client, interaction) => {
	const reply = interaction.options.getString('input');
	await interaction.reply(reply);
};
export const execute = async (client, msg, args) => {
	if (args.length === 0)
		return await msg.reply('You need to pass an input to echo back!');

	const reply = args.join(' ');
	await msg.reply(reply);
};
