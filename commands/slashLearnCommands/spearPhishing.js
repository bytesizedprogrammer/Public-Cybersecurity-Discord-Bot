const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnspearphishing')
		.setDescription('Gives you resources for learning Spear Phishing!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.ibm.com/topics/spear-phishing
https://www.crowdstrike.com/cybersecurity-101/phishing/spear-phishing/#:~:text=Spear%2Dphishing%20is%20a%20type,the%20targets%27%20device%20with%20malware.
https://www.trendmicro.com/vinfo/us/security/definition/spear-phishing
https://www.dni.gov/files/NCSC/documents/campaign/Counterintelligence_Tips_Spearphishing.pdf
https://www.barracuda.com/support/glossary/phishing-spear-phishing
https://www.ibm.com/blog/spear-phishing-vs-standard-phishing-attacks/
https://www.hornetsecurity.com/en/security-information/spear-phishing-examples/
https://www.terranovasecurity.com/blog/examples-of-spear-phishing-attacks
https://easydmarc.com/blog/seven-examples-of-spear-phishing-attacks/
https://www.knowbe4.com/spear-phishing
https://trustpair.com/blog/spear-phishing-examples/
https://us.norton.com/blog/online-scams/spear-phishing
https://www.n-able.com/features/spear-phishing-prevention
https://www.msp360.com/resources/blog/spear-phishing-prevention/
https://www.mimecast.com/content/prevent-spear-phishing/
https://vipre.com/blog/top-6-proven-spear-phishing-prevention-methods/
https://www.esecurityplanet.com/networks/how-to-prevent-spear-phishing-attacks/
`,
                ephemeral: true
            });
        },
    };


//spear phishing
// spear phishing examples
// spear phishing prevention