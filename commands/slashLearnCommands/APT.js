const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnadvancedpersisentthreat')
		.setDescription('Gives you resources for learning about APT!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.youtube.com/watch?v=tbrRiZ3uDgo
https://www.youtube.com/watch?v=i2pdPbotLXo
https://www.youtube.com/watch?v=4gV4RLoDhQ0
https://www.youtube.com/watch?v=XQzXKKRjzSw
https://www.techtarget.com/searchsecurity/definition/advanced-persistent-threat-APT
https://www.imperva.com/learn/application-security/apt-advanced-persistent-threat/
https://www.crowdstrike.com/cybersecurity-101/advanced-persistent-threat-apt/
https://www.cisa.gov/topics/cyber-threats-and-advisories/nation-state-cyber-actors
https://csrc.nist.gov/glossary/term/advanced_persistent_threat
https://usa.kaspersky.com/resource-center/definitions/advanced-persistent-threats
https://www.cybereason.com/blog/advanced-persistent-threat-apt
https://www.cynet.com/advanced-persistent-threat-apt-attacks/
https://www.getsafeonline.org/business/blog-item/five-notable-examples-of-advanced-persistent-threat-apt-attacks/
https://swisscyberinstitute.com/blog/guide-of-advanced-persistent-threat-apt/
`,
                ephemeral: true
            });
        },
    };