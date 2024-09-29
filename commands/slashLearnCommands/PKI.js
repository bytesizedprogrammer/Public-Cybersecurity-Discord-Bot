const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnpublickeyinfrastructure')
		.setDescription('Gives you resources for learning about PKI!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.ncsc.gov.uk/collection/in-house-public-key-infrastructure/introduction-to-public-key-infrastructure
https://www.ssh.com/academy/pki
https://cpl.thalesgroup.com/faq/public-key-infrastructure-pki/what-public-key-infrastructure-pki
https://www.okta.com/identity-101/public-key-infrastructure/
https://www.youtube.com/watch?v=Jefr7wFLu3M
https://www.youtube.com/watch?v=uVaUgrxjMe0
https://www.keyfactor.com/education-center/what-is-pki/
https://www.fortinet.com/resources/cyberglossary/public-key-infrastructure
https://www.youtube.com/watch?v=0ctat6RBrFo
https://www.ncsc.gov.uk/collection/in-house-public-key-infrastructure/pki-principles
https://www.techtarget.com/searchsecurity/feature/3-types-of-PKI-certificates-and-their-use-cases
https://www.deaecom.gov/pki.pdf
`,
                ephemeral: true
            });
        },
    };