const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnfirewall')
		.setDescription('Gives you resources for learning about firewalls!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://us.norton.com/blog/privacy/firewall
https://www.bu.edu/tech/about/security-resources/host-based/intro/
https://www.fortinet.com/resources/cyberglossary/how-does-a-firewall-work
https://www.securitymetrics.com/blog/how-configure-firewall-5-steps
https://www.fortinet.com/resources/cyberglossary/firewall-configuration
https://www.cdw.com/content/cdw/en/articles/security/how-does-a-firewall-work.html
https://www.cisco.com/c/en/us/solutions/small-business/resource-center/security/how-to-setup-a-firewall.html
https://us.norton.com/blog/privacy
https://www.checkpoint.com/cyber-hub/network-security/what-is-firewall/
https://www.cisa.gov/news-events/news/understanding-firewalls-home-and-small-office-use
https://www.youtube.com/watch?v=xB7koECwqC0
https://www.fortinet.com/resources/cyberglossary/firewall
https://www.youtube.com/watch?v=WTzLG4NgOlw
https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html
https://www.esecurityplanet.com/networks/types-of-firewalls/
https://www.spiceworks.com/it-security/network-security/articles/top-10-firewall-hardware-devices/
https://builtin.com/articles/firewall
`,
                ephemeral: true
            });
        },
    };