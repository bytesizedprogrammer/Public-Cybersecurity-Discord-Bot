const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnsqlinfection')
		.setDescription('Gives you resources for learning about SQL Infection!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.varonis.com/blog/what-is-sql-injection
https://www.w3schools.com/sql/sql_injection.asp
https://portswigger.net/web-security/sql-injection
https://owasp.org/www-community/attacks/SQL_Injection
https://www.acunetix.com/websitesecurity/sql-injection/
https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
https://www.simplilearn.com/tutorials/cyber-security-tutorial/what-is-sql-injection
https://www.youtube.com/watch?v=2OPVViV-GQk
https://www.youtube.com/watch?v=2nXOxLpeu80
https://www.youtube.com/watch?v=1nJgupaUPEQ
https://security.berkeley.edu/education-awareness/how-protect-against-sql-injection-attacks
https://www.imperva.com/learn/application-security/sql-injection-sqli/
https://www.crowdstrike.com/cybersecurity-101/sql-injection/
https://www.invicti.com/blog/web-security/sql-injection-cheat-sheet/
https://brightsec.com/blog/sql-injection-attack/
https://pentest-tools.com/blog/sql-injection-attacks
https://www.youtube.com/watch?v=B2UDz7u7IPc
https://www.youtube.com/watch?v=b-5PikJSskI
https://www.indusface.com/blog/how-to-stop-sql-injection/
https://www.cloudflare.com/learning/security/threats/how-to-prevent-sql-injection/
https://www.esecurityplanet.com/threats/how-to-prevent-sql-injection-attacks/
`,
                ephemeral: true
            });
        },
    };