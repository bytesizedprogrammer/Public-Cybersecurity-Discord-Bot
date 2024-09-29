const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnrootkit')
		.setDescription('Gives you resources for learning about rootkit!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.crowdstrike.com/cybersecurity-101/malware/rootkits/
https://www.youtube.com/watch?v=jjO7G3cpoQU
https://www.veracode.com/security/rootkit
https://sysdig.com/learn-cloud-native/detection-and-response/what-is-a-rootkit/
https://www.malwarebytes.com/rootkit
https://www.fortinet.com/resources/cyberglossary/rootkit
https://www.youtube.com/watch?v=ho-TxG_vc84
https://www.youtube.com/watch?v=r6NE7eHo8Kw
https://www.bleepingcomputer.com/startups/rootkits/
https://us.norton.com/blog/malware/rootkit
https://www.esecurityplanet.com/networks/rootkit-threats/
https://www.ionos.com/digitalguide/server/security/what-is-a-rootkit/
https://www.cyberark.com/resources/threat-research-blog/fantastic-rootkits-and-where-to-find-them-part-1
https://usa.kaspersky.com/resource-center/definitions/what-is-rootkit
https://www.indusface.com/blog/how-to-prevent-a-rootkit-attack/
https://enterprise.xcitium.com/what-are-rootkits/
https://www.malwarebytes.com/blog/news/2020/01/how-to-prevent-a-rootkit-attack
https://cybernews.com/malware/what-is-a-rootkit/
https://www.tripwire.com/state-of-security/what-are-rootkits-how-prevent-them
`,
                ephemeral: true
            });
        },
    };