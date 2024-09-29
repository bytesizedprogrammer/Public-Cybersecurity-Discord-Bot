const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learntransportlayersecurity')
		.setDescription('Gives you resources for learning about TLS!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/
https://www.internetsociety.org/deploy360/tls/basics/
https://www.techtarget.com/searchsecurity/definition/Transport-Layer-Security-TLS
https://www.youtube.com/watch?v=AlE5X1NlHgg
https://www.geeksforgeeks.org/transport-layer-security-tls/
https://learn.microsoft.com/en-us/windows-server/security/tls/transport-layer-security-protocol
https://www.avast.com/c-what-is-transport-layer-security
https://www.usna.edu/Users/cs/choi/it430/lec/l22/lec.html
https://www.acunetix.com/blog/articles/tls-vulnerabilities-attacks-final-part/
https://dadrian.io/srv/talks/wereitsoeasy-a2y.pdf
https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Principles_of_Computer_System_Design_(Saltzer_and_Kaashoek)/05%3A_Information_Security/5.11%3A_Case_Study_-_Transport_Layer_Security_(TLS)_for_the_Web
https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html
https://www.veracode.com/security/insufficient-transport-layer-protection
https://www.hostmerchantservices.com/articles/transport-layer-security/
https://www.trendmicro.com/en_us/devops/22/g/transport-layer-security-tls-issues-protocol.html
https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data
https://knowledge-base.secureflag.com/vulnerabilities/security_misconfiguration/insufficient_transport_layer_security_vulnerability.html
https://cqr.company/web-vulnerabilities/insufficient-transport-layer-protection/
`,
                ephemeral: true
            });
        },
    };