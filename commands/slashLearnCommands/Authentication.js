const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnauthentication')
		.setDescription('Gives you resources for learning about authentication security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.techtarget.com/searchsecurity/definition/authentication
https://www.microsoft.com/en-us/security/business/security-101/what-is-authentication
https://www.bu.edu/tech/about/security-resources/bestpractice/auth/
https://www.spiceworks.com/it-security/identity-access-management/articles/what-is-authentication/
https://www.geeksforgeeks.org/authentication-in-computer-network/
https://www.idrnd.ai/5-authentication-methods-that-can-prevent-the-next-breach/
https://www.getcybersafe.gc.ca/en/blogs/examples-multi-factor-authentication-action
https://www.investopedia.com/terms/t/twofactor-authentication-2fa.asp
https://www.malwarebytes.com/cybersecurity/basics/what-is-authentication
https://www.redkeysolutions.com/2019/11/the-5-factors-of-authentication-and-what-you-should-know-about-them/
`,
                ephemeral: true
            });
        },
    };