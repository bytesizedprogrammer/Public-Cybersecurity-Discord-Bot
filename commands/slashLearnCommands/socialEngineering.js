const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnsocialengineering')
		.setDescription('Gives you resources for learning about social engineering!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.youtube.com/watch?v=uMkOphesrqI
https://www.imperva.com/learn/application-security/social-engineering-attack/
https://www.enisa.europa.eu/topics/incident-response/glossary/what-is-social-engineering
https://www.ibm.com/topics/social-engineering
https://www.cisco.com/c/en/us/products/security/what-is-social-engineering.html
https://www.indusface.com/blog/10-ways-businesses-can-prevent-social-engineering-attacks/
https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks
https://usa.kaspersky.com/resource-center/threats/how-to-avoid-social-engineering-attacks
https://www.loginradius.com/blog/identity/social-engineering-attacks/
https://www.stickmancyber.com/cybersecurity-blog/8-ways-organisations-prevent-social-engineering-attacks
https://www.fortinet.com/resources/cyberglossary/social-engineering
https://www.crowdstrike.com/cybersecurity-101/social-engineering/
https://www.terranovasecurity.com/blog/examples-of-social-engineering-attacks
https://www.tessian.com/blog/examples-of-social-engineering-attacks/
https://www.youtube.com/watch?v=j5j6c05Btfc
https://study.com/academy/lesson/video/what-is-social-engineering-definition-types-threats.html
https://www.metacompliance.com/blog/phishing-and-ransomware/5-examples-of-social-engineering-attacks
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=social+engineering+examples
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=social+engineering+examples
`,
                ephemeral: true
            });
        },
    };