const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnhoneypot')
		.setDescription('Gives you resources for learning about Honeypots!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.mailgun.com/blog/deliverability/honeypots/
https://www.imperva.com/learn/application-security/honeypot-honeynet/
https://www.fortinet.com/resources/cyberglossary/what-is-honeypot
https://scrapingrobot.com/blog/honeypot-scraping/
https://datadome.co/bot-management-protection/stop-bots-without-captcha-anti-spam-honeypot/
https://akismet.com/blog/what-is-a-honeypot/
https://easydmarc.com/blog/how-do-honeypots-protect-against-cyberattacks/
https://www.rapid7.com/fundamentals/honeypots/
https://www.strongdm.com/blog/what-is-a-honeypot
https://www.knowledgehut.com/blog/security/honeypot
https://abusix.com/blog/uncategorised/how-to-prevent-and-defeat-cybercriminals-with-honeypot-traps-in-network-security/
https://us.norton.com/blog/iot/what-is-a-honeypot
https://www.splunk.com/en_us/blog/learn/cybersecurity-honeypots.html
https://www.youtube.com/watch?v=FtR9sFJlkSA
https://www.crowdstrike.com/cybersecurity-101/honeypots-in-cybersecurity-explained/
https://usa.kaspersky.com/resource-center/threats/what-is-a-honeypot
`,
                ephemeral: true
            });
        },
    };