const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learncyberespionage')
		.setDescription('Gives you resources for learning cyber espionage!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.threatdown.com/glossary/what-is-cyber-espionage/
https://www.villanovau.com/articles/cybersecurity/cyber-espionage/
https://www.cyber-espionage.ch/
https://www.crowdstrike.com/cybersecurity-101/cyberattacks/cyber-espionage/
https://www.vmware.com/topics/glossary/content/cyber-espionage.html
https://www.techtarget.com/searchsecurity/definition/cyber-espionage
https://www.fortinet.com/resources/cyberglossary/cyber-espionage
https://blog.purestorage.com/perspectives/what-is-cyber-espionage-and-what-can-you-do-about-it/
https://www.varonis.com/blog/what-is-cyber-espionage
https://www.darkreading.com/vulnerabilities-threats/5-steps-preventing-mitigating-corporate-espionage               
https://dig8ital.com/post/10-known-cyber-espionage-groups-and-how-to-protect-yourself/
https://securityaffairs.com/66617/hacking/cyber-espionage-cases.html
https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents
https://afidence.com/5-cyber-espionage-examples/
`,
                ephemeral: true
            });
        },
    };