const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnendpointsecurity')
		.setDescription('Gives you resources for learning endpoint security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cyvent.com/blog/how-to-build-an-effective-endpoint-security-policy-and-prevent-cyberattacks
https://www.crowdstrike.com/cybersecurity-101/endpoint-security/
https://www.trellix.com/security-awareness/endpoint/what-is-endpoint-security/
https://www.cisco.com/c/en/us/products/security/endpoint-security/index.html
https://www.fortinet.com/resources/cyberglossary/types-of-endpoint-security
https://www.youtube.com/watch?v=2CVP9-Qslcw
https://www.youtube.com/watch?v=b40k1x4kBkk
https://www.microsoft.com/en-us/security/business/security-101/what-is-an-endpoint
https://www.eccouncil.org/cybersecurity-exchange/network-security/what-is-endpoint-security/
https://www.crowdstrike.com/cybersecurity-101/endpoint-security/what-is-an-endpoint/
https://www.fortinet.com/resources/cyberglossary/what-is-endpoint-security
https://www.cloudflare.com/learning/security/glossary/endpoint-security/
https://www.cisco.com/c/en/us/products/security/endpoint-security/what-is-endpoint-protection.html
https://aws.amazon.com/what-is/endpoint-security/
https://www.cynet.com/endpoint-protection/endpoint-protection-the-basics-and-4-key-technologies/
`,
                ephemeral: true
            });
        },
    };