const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnnetworksecurity')
		.setDescription('Gives you resources for learning about network security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.ibm.com/qradar/network-security
https://www.cisco.com/c/en/us/products/security/what-is-network-security.html
https://www.checkpoint.com/cyber-hub/network-security/what-is-network-security/
https://www.ibm.com/topics/network-security
https://www.youtube.com/watch?v=cGlMJ_Pre4s
https://www.youtube.com/watch?v=tNWj5uGIqok
https://www.forcepoint.com/cyber-edu/network-security
https://www.gdrc.org/sustdev/husec/z-categories.html
https://www.forcepoint.com/cyber-edu/osi-model
https://www.loginradius.com/blog/identity/guide-to-five-a-of-cloud-identity-management/
https://corporatefinanceinstitute.com/resources/career-map/sell-side/capital-markets/types-of-security/
https://learning.nspcc.org.uk/news/2023/september/4-cs-of-online-safety/
https://blog.gigamon.com/2019/06/13/what-is-network-security-14-tools-and-techniques-to-know/
https://www.apu.apus.edu/area-of-study/information-technology/resources/what-is-network-security-how-to-keep-networks-safe/
https://www.eccouncil.org/cybersecurity-exchange/network-security/how-to-prevent-network-security-attacks/
https://www.imperva.com/learn/application-security/network-security/
https://www.youtube.com/watch?v=8_OlFQloUD8
https://sterlinginfo.com/5-ways-to-stop-network-security-threats/
https://www.cisco.com/c/en/us/products/security/what-is-threat-prevention.html
https://cybriant.com/10-ways-to-reduce-your-organizations-network-security-risk/
https://www.n-able.com/blog/types-of-network-security
https://www.spiceworks.com/it-security/network-security/articles/what-is-network-security/
https://www.fortinet.com/resources/cyberglossary/what-is-network-security
https://purplesec.us/network-security-types/
https://nordlayer.com/learn/network-security/threats/
`,
                ephemeral: true
            });
        },
    };