const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnspyware')
		.setDescription('Gives you resources for learning about spyware!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.fortinet.com/resources/cyberglossary/spyware
https://usa.kaspersky.com/resource-center/threats/spyware
https://www.cisa.gov/news-events/news/recognizing-and-avoiding-spyware
https://www.cisa.gov/sites/default/files/publications/spywarehome_0905.pdf
https://www.amnesty.org/en/latest/campaigns/2023/12/what-is-spyware-and-what-you-can-do-to-stay-protected/
https://www.malwarebytes.com/spyware
https://www.bbvapivot.com/en/cybersecurity/spyware-what-it-is-what-types-exist-and-how-it-can-be-removed/
https://us.norton.com/blog/malware/spyware
https://www.techtarget.com/searchsecurity/definition/spyware
https://csrc.nist.gov/glossary/term/spyware
https://www.techtarget.com/whatis/definition/Top-10-Spyware-Threats
https://gridinsoft.com/spyware
https://sectigostore.com/blog/spyware-examples-4-real-life-examples-that-shook-2021/
https://www.proofpoint.com/us/threat-reference/spyware
https://study.com/learn/lesson/video/spyware-types-examples.html
https://www.avast.com/c-spyware
https://www.spiceworks.com/it-security/security-general/articles/what-is-spyware/
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=spyware+examples#ip=1
`,
                ephemeral: true
            });
        },
    };