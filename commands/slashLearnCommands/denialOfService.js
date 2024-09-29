const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learndenialofservice')
		.setDescription('Gives you resources for learning denial of service!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cloudflare.com/learning/ddos/glossary/denial-of-service/
https://www.cisa.gov/news-events/news/understanding-denial-service-attacks
https://www.paloaltonetworks.com/cyberpedia/what-is-a-denial-of-service-attack-dos
https://www.youtube.com/watch?v=bDAY-oUP0DQ
https://www.youtube.com/watch?v=HqzCP7f7vTM
https://www.cisa.gov/sites/default/files/2023-02/Cyber%20Risks%20to%20911%20TDoS_6.4.2020%20-%20%28508c%29_1.pdf
https://hop.extrahop.com/resources/attacks/dos/
https://www.ncsc.gov.uk/collection/denial-service-dos-guidance-collection
https://www.investopedia.com/terms/d/denial-service-attack-dos.asp  
https://www.byos.io/blog/denial-of-service-attack-prevention
`,
                ephemeral: true
            });
        },
    };