const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnauthorization')
		.setDescription('Gives you resources for learning about Authorization!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://frontegg.com/guides/authorization-a-complete-guide
https://auth0.com/intro-to-iam/what-is-authorization
https://www.youtube.com/watch?v=CvzPTeGv9Gw
https://www.youtube.com/watch?v=2jHNU8a2QUI
https://www.onelogin.com/learn/authentication-vs-authorization
https://www.netsuite.com/portal/resource/articles/erp/authorization.shtml
https://www.geeksforgeeks.org/difference-between-authentication-and-authorization/
https://www.computernetworkingnotes.com/ccna-study-guide/authorization-explained-with-examples.html
`,
                ephemeral: true
            });
        },
    };