const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learncloudsecurity')
		.setDescription('Gives you resources for learning cloud security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff:                 
https://cloud.logicom.net/media/13964/6-best-security-practices.pdf
https://www.investopedia.com/terms/c/cloud-security.asp
https://www.exabeam.com/explainers/cloud-security/cloud-security-principles-solutions-and-architectures/
https://www.imperva.com/learn/application-security/cloud-security/
https://darktrace.com/cyber-ai-glossary/cloud-security
https://www.aquasec.com/cloud-native-academy/cloud-attacks/cloud-attacks/
https://www.sophos.com/en-us/cybersecurity-explained/cloud-security
https://aws.amazon.com/security/
https://cloud.google.com/learn/what-is-cloud-security
https://www.checkpoint.com/cyber-hub/cloud-security/what-is-cloud-security/
https://www.ibm.com/topics/cloud-security
`,
                ephemeral: true
            });
        },
    };