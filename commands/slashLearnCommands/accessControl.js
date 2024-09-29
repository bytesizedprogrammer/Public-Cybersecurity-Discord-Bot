const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnaccesscontrol')
		.setDescription('Gives you resources for learning Access Control!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
https://www.coursera.org/learn/access-control-sscp
https://www.youtube.com/watch?v=_jz5qFWhLcg&list=PLuyTk2_mYISId4_l9YET7Gv29cHcNguq-
https://www.youtube.com/watch?v=trn_R5TOaGU`,
                ephemeral: true
            });
        },
    };
