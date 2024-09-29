const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learndatabreach')
		.setDescription('Gives you resources for learning about data breaches!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.ibm.com/topics/data-breach
https://haveibeenpwned.com/    [Check if your email has been put in a data breach]
https://www.ftc.gov/data-breach-resources
https://commission.europa.eu/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/what-data-breach-and-what-do-we-have-do-case-data-breach_en
https://www.cloudflare.com/learning/security/what-is-a-data-breach/
https://www.csoonline.com/article/534628/the-biggest-data-breaches-of-the-21st-century.html
https://www.metacompliance.com/blog/data-breaches/5-examples-of-security-breaches-in-2020
https://abnormalsecurity.com/glossary/data-breach
https://www.ekransystem.com/en/blog/real-life-examples-insider-threat-caused-breaches
https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breach-examples/
https://www.kaspersky.com/resource-center/definitions/data-breach
https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business
https://www.trendmicro.com/vinfo/us/security/definition/data-breach#:~:text=A%20data%20breach%20is%20an,may%20suffer%20a%20data%20breach.
https://www.google.com/search?q=data+breach+examples&client=ubuntu-sn&hs=7ME&sca_esv=725efba4277893af&channel=fs&sxsrf=ACQVn08bbd7XKnpuanko0HIjZqcleMH_iA%3A1713219218571&ei=kqYdZvmxIqXk5NoP6Yys4As&oq=data+breach+ex&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmRhdGEgYnJlYWNoIGV4KgIIADILEAAYgAQYigUYkQIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIog5QbFjmCHACeAGQAQCYAVigAbQCqgEBNLgBA8gBAPgBAZgCBqAC1QLCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICDhAAGIAEGIoFGJECGLEDwgIREAAYgAQYigUYkQIYsQMYgwHCAg4QABiABBiKBRixAxiDAcICChAAGIAEGBQYhwLCAgQQABgDwgIGEAAYFhgewgIIEAAYFhgeGArCAgsQABiABBiKBRiGA5gDAIgGAZAGCpIHATagB-oV&sclient=gws-wiz-serp
`,
                ephemeral: true
            });
        },
    };