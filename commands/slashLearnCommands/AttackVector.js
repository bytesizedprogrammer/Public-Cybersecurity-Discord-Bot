const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnattackvector')
		.setDescription('Gives you resources for learning about attack vector!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cloudflare.com/learning/security/glossary/attack-vector/
https://www.fortinet.com/resources/cyberglossary/attack-vector
https://www.upguard.com/blog/attack-vector
https://www.techtarget.com/searchsecurity/definition/attack-vector
https://www.youtube.com/watch?v=qXr-4-DaD50
https://www.youtube.com/watch?v=LR3dQMSwfDU
https://www.akamai.com/glossary/what-is-attack-vector
https://www.crowdstrike.com/cybersecurity-101/threat-intelligence/attack-vector/
https://www.balbix.com/insights/attack-vectors-and-breach-methods/
https://www.strongdm.com/blog/attack-vector
https://www.youtube.com/watch?v=GD0xXDmisC8
`,
                ephemeral: true
            });
        },
    };