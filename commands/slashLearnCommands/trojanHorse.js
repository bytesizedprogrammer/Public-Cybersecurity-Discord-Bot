const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learntrojanhorse')
		.setDescription('Gives you resources for learning about Trojan Horses!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.keepersecurity.com/blog/2023/12/27/what-is-a-trojan-horse-virus-or-malware/
https://www.fortinet.com/resources/cyberglossary/trojan-horse-virus
https://www.kaspersky.com/resource-center/threats/trojans
https://www.crowdstrike.com/cybersecurity-101/malware/trojans/
https://csrc.nist.gov/glossary/term/trojan_horse
https://www.webroot.com/us/en/resources/tips-articles/what-is-trojan-virus
https://www.malwarebytes.com/trojan
https://www.youtube.com/watch?v=z0Kjv9qwcMc
https://www.youtube.com/watch?v=061QRJa26kU
https://www.youtube.com/watch?v=FmaHJhtmmAU
https://www.proofpoint.com/us/threat-reference/trojan-horse
https://www.spiceworks.com/it-security/application-security/articles/what-is-trojan-horse/
https://cybernews.com/malware/what-is-a-trojan-virus/
https://www.bbvapivot.com/en/cybersecurity/what-is-a-trojan-and-how-can-you-protect-yourself/
https://usa.kaspersky.com/resource-center/preemptive-safety/avoiding-a-trojan-virus
https://www.cisa.gov/news-events/news/recovering-viruses-worms-and-trojan-horses
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=trojan+horse+examples
`,
                ephemeral: true
            });
        },
    };