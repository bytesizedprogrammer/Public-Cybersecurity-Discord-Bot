const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnkeylogger')
		.setDescription('Gives you resources for learning about Keyloggers!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.malwarebytes.com/keylogger
https://www.techtarget.com/searchsecurity/definition/keylogger
https://www.fortinet.com/resources/cyberglossary/what-is-keyloggers
https://www.resmo.com/blog/what-is-a-keylogger
https://us.norton.com/blog/malware/what-is-a-keylogger
https://heimdalsecurity.com/blog/what-is-a-keylogger/
https://www.crowdstrike.com/cybersecurity-101/attack-types/keylogger/
https://securelist.com/keyloggers-how-they-work-and-how-to-detect-them-part-1/36138/
https://usa.kaspersky.com/resource-center/definitions/keylogger
https://www.microsoft.com/en-us/microsoft-365-life-hacks/privacy-and-safety/what-is-a-keylogger
https://nira.com/how-to-prevent-keylogging-attacks/
https://enterprise.xcitium.com/how-to-prevent-keylogging/
https://www.reddit.com/r/netsec/comments/azmfb/how_to_protect_your_password_from_keyloggers/
`,
                ephemeral: true
            });
        },
    };