const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnbotnet')
		.setDescription('Gives you resources for learning botnet!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
https://darktrace.com/cyber-ai-glossary/botnet
https://www.spiceworks.com/it-security/network-security/articles/what-is-botnet/
https://www.humansecurity.com/learn/blog/9-of-the-most-notable-botnets
https://www.techtarget.com/searchsecurity/definition/botnet
https://www.wallarm.com/what/what-is-a-botnet
https://www.upguard.com/blog/what-is-a-botnet
`,
                ephemeral: true
            });
        },
    };