const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learndistributeddenialofservice')
		.setDescription('Gives you resources for learning DDOS!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://blogs.blackberry.com/en/2022/11/ddos-attack-8-simple-prevention-and-mitigation-strategies
https://www.microsoft.com/en-us/security/business/security-101/what-is-a-ddos-attack
https://www.comptia.org/content/guides/what-is-a-ddos-attack-how-it-works
https://www.cloudflare.com/learning/ddos/how-to-prevent-ddos-attacks/
https://aws.amazon.com/shield/ddos-attack-protection/
https://securityscorecard.com/blog/best-practices-to-prevent-ddos-attacks/
https://www.indusface.com/blog/best-practices-to-prevent-ddos-attacks/
https://www.cisa.gov/sites/default/files/publications/understanding-and-responding-to-ddos-attacks_508c.pdf
https://www.esecurityplanet.com/networks/how-to-prevent-ddos-attacks/
https://www.microsoft.com/en-us/microsoft-365-life-hacks/privacy-and-safety/top-5-most-famous-ddos-attacks
https://hop.extrahop.com/resources/attacks/dos/
https://socradar.io/top-10-ddos-attacks/       
https://www.cloudflare.com/learning/ddos/famous-ddos-attacks/
https://www.a10networks.com/blog/5-most-famous-ddos-attacks/

BRAINROT EDUCATION: https://www.instagram.com/reel/C49vPSDp8Lb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
`,
                ephemeral: true
            });
        },
    };