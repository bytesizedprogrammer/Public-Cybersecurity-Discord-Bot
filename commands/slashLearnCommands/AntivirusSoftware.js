const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnantivirussoftware')
		.setDescription('Gives you resources for learning about antivirus software!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
https://www.security.org/antivirus/how-to/
https://www.security.org/antivirus/how-does-antivirus-work/
https://www.cisa.gov/news-events/news/understanding-anti-virus-software
https://www.techtarget.com/searchsecurity/definition/antivirus-software`,
                ephemeral: true
            });
        },
    };