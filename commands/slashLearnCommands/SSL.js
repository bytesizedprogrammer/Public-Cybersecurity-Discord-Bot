const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnsecuresocketlayer')
		.setDescription('Gives you resources for learning about SSL!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.geeksforgeeks.org/secure-socket-layer-ssl/
https://www.hostinger.com/tutorials/what-is-ssl
https://www.techtarget.com/searchsecurity/definition/SSL-certificate-Secure-Sockets-Layer-certificate
https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/
https://www.globalsign.com/en/ssl-information-center/what-is-ssl
https://developer.apple.com/documentation/security/secure_transport/using_the_secure_socket_layer_for_network_communication
https://www.cisco.com/c/en/us/td/docs/routers/crs/software/crs_r4-0/security/configuration/guide/sc40crsbook_chapter10.html
https://www.digicert.com/what-is-ssl-tls-and-https
https://www.cancer.org/about-us/policies/secure-sockets-layer.html
https://www.ibm.com/docs/en/ibm-http-server/9.0.5?topic=communications-secure-sockets-layer-ssl-protocol
https://www.ssl.com/article/what-is-ssl-tls-an-in-depth-guide/
https://avinetworks.com/glossary/ssl-security/
https://www.keyfactor.com/blog/what-is-ssl/
https://www.ibm.com/docs/en/was/9.0.5?topic=communications-creating-ssl-configuration
`,
                ephemeral: true
            });
        },
    };