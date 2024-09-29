const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnapplicationsecurity')
		.setDescription('Gives you resources for learning application security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
https://www.coursera.org/learn/application-security-for-developers-devops
https://www.coursera.org/learn/cloud-application-security
https://www.coursera.org/specializations/javascript-security
https://www.coursera.org/specializations/pythonforcybersecurity
https://www.coursera.org/specializations/secure-software-design
https://portswigger.net/web-security
https://www.udemy.com/course/application-security-the-complete-guide/?couponCode=24T3FS41524  {PAID}
https://www.appsecengineer.com/
https://www.sans.org/cyber-security-courses/application-security-securing-web-apps-api-microservices/
https://www.imperva.com/learn/application-security/application-security/
`,
                ephemeral: true
            });
        },
    };