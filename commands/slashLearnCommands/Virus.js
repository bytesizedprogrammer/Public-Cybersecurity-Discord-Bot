const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnvirus')
		.setDescription('Gives you resources for learning Viruses!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cisa.gov/news-events/news/recovering-viruses-worms-and-trojan-horses
https://www.checkpoint.com/cyber-hub/cyber-security/what-is-virus/
https://www.cisa.gov/news-events/news/virus-basics
https://www.fortinet.com/resources/cyberglossary/computer-virus
https://www.it.unlv.edu/cybersecurity/best-practices/viruses-malware
https://www.malwarebytes.com/computer-virus
https://www.proofpoint.com/us/threat-reference/computer-virus
https://www.webroot.com/us/en/resources/tips-articles/computer-security-threats-computer-viruses
https://us.norton.com/blog/malware/what-is-a-computer-virus
https://study.com/learn/lesson/video/computer-virus-types-protection.html
https://www.mcafee.com/learn/computer-viruses/
https://www.kaspersky.com/resource-center/threats/computer-viruses-and-malware-facts-and-faqs
https://uk.norton.com/blog/malware/famous-computer-viruses
https://www.techtarget.com/searchsecurity/tip/10-common-types-of-malware-attacks-and-how-to-prevent-them
https://oag.ca.gov/privacy/facts/online-privacy/protect-your-computer
https://www.jhfcu.org/security-center/cyber-security-information/computer-security-and-virus-prevention
https://www.santander.com/en/stories/how-to-avoid-computer-viruses
https://www.aus.com/security-resources/computer-virus-prevention
https://support.microsoft.com/en-us/windows/protect-my-pc-from-viruses-b2025ed1-02d5-1e87-ba5f-71999008e026
https://uwf.edu/academic-affairs/departments/help-desk/computer-security/computer-virus-prevention/
https://oag.ca.gov/sites/all/files/agweb/pdfs/privacy/CIS_12_Computer_protection_DOJ.pdf
https://www.iup.edu/itsupportcenter/cyber-security/staying-safe-online/protect-your-computer-against-viruses-and-malware.html
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=virus+cyber+security+prevention#ip=1
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=virus+cyber+security+examples
`,
                ephemeral: true
            });
        },
    };