import { MessageEmbed } from 'discord.js';

export const data = {
	name: 'info',
	description: 'Get user or server info',
	options: [
		{
			name: 'user',
			description: "Get a user's info",
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'user',
					description: 'User to get info on',
					type: 'USER',
				},
			],
		},
		{
			name: 'server',
			description: 'Get the server info',
			type: 'SUB_COMMAND',
		},
	],
};

export const slash = true;

export const interaction = async (client, interaction) => {
	const command = interaction.options.getSubcommand();
	if (command === 'user') {
		let member = interaction.options.getMember('user');
		if (!member) member = interaction.member;

		const tag = member.user.tag;
		const avatar = member.user.displayAvatarURL({
			format: 'png',
			dynamic: true,
		});
		const created = `<t:${(member.user.createdTimestamp / 1000) | 0}:R>`;
		const joined = `<t:${(member.joinedTimestamp / 1000) | 0}:R>`;
		const roles = member.roles.cache.map((role) => role).join(', ');
		const id = member.id;

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setAuthor(tag, avatar)
			.addFields(
				{ name: 'Created', value: created, inline: true },
				{ name: 'Joined', value: joined, inline: true },
				{ name: 'Roles', value: roles }
			)
			.setTimestamp()
			.setFooter(`ID: ${id}`);

		await interaction.reply({ embeds: [embed] });
	} else if (command === 'server') {
		const guild = interaction.guild;

		if (!guild) return;

		const name = guild.name;
		const members = guild.memberCount.toString();
		const channels = guild.channels.cache.size.toString();
		const owner = (await guild.fetchOwner())?.user.tag;
		const roles = guild.roles.cache.size.toString();
		const emojis = guild.emojis.cache.size.toString();

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Server Info')
			.setThumbnail(guild.iconURL({ format: 'png', dynamic: true }))
			.addFields(
				{ name: 'Name', value: name, inline: true },
				{ name: 'Members', value: members, inline: true },
				{ name: 'Channels', value: channels, inline: true },
				{ name: 'Owner', value: owner, inline: true },
				{ name: 'Roles', value: roles, inline: true },
				{ name: 'Emojis', value: emojis, inline: true }
			)
			.setTimestamp()
			.setFooter(`ID: ${guild.id}`);

		await interaction.reply({ embeds: [embed] });
	}
};
