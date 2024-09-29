const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnvirtualprivatenetwork')
		.setDescription('Gives you resources for learning about VPNs!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cnet.com/tech/services-and-software/vpn-faq-what-you-need-to-know-about-virtual-private-networks/
https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-vpn
https://usa.kaspersky.com/resource-center/definitions/what-is-a-vpn
https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/what-is-vpn.html
https://nordvpn.com/what-is-a-vpn/
https://www.pcmag.com/how-to/what-is-a-vpn-and-why-you-need-one
https://www.youtube.com/watch?v=R-JUOpCgTZc
https://www.spiceworks.com/collaboration/remote-support/guest-article/5-everyday-uses-of-vpns/
https://telecom.economictimes.indiatimes.com/news/internet/top-use-cases-of-virtual-private-network-vpn/100910169
https://blog.360totalsecurity.com/en/3-real-life-situations-to-be-thankful-to-have-a-vpn/
https://www.mushroomnetworks.com/blog/vpn-virtual-private-networks-use-cases/
https://informationsecurity.wustl.edu/the-power-of-virtual-private-networks-vpn-in-privacy-protection/
https://www.kpoint.com/cyber-hub/network-security/what-is-vpn/benefits-of-a-virtual-private-network-vpn/
https://www.cloudflare.com/learning/access-management/vpn-security/
https://management.org/what-does-a-vpn-protect-you-from
https://www.fortinet.com/resources/cyberglossary/are-vpns-safe
`,
                ephemeral: true
            });
        },
    };