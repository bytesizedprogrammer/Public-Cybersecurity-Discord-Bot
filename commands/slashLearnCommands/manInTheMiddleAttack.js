const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnmaninthemiddleattack')
		.setDescription('Gives you resources for learning about MITM Attacks!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.infosecinstitute.com/resources/hacking/man-in-the-middle-demystified/
https://www.imperva.com/learn/application-security/man-in-the-middle-attack-mitm/
https://www.techtarget.com/iotagenda/definition/man-in-the-middle-attack-MitM
https://www.rapid7.com/fundamentals/man-in-the-middle-attacks/
https://www.veracode.com/security/man-middle-attack
https://www.fortinet.com/resources/cyberglossary/man-in-the-middle-attack
https://www.mcafee.com/blogs/mobile-security/everything-you-need-to-know-to-avoid-a-man-in-the-middle-mobile-attack/
https://www.itgovernance.eu/blog/en/how-to-defend-against-man-in-the-middle-attacks
https://www.terranovasecurity.com/blog/man-in-the-middle-attacks
https://www.strongdm.com/blog/man-in-the-middle-attack-prevention
https://usa.kaspersky.com/resource-center/threats/man-in-the-middle-attack
https://www.fraud.com/post/man-in-the-middle-attacks
https://www.forbes.com/sites/forbestechcouncil/2024/03/07/19-keys-to-detecting-and-preventing-man-in-the-middle-attacks/?sh=2af86bcd35f8
https://www.byos.io/blog/how-to-prevent-man-in-the-middle-attack
`,
                ephemeral: true
            });
        },
    };