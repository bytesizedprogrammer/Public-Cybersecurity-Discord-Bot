const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnbruteforceattack')
		.setDescription('Gives you resources for learning brute force attack!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
https://www.makeuseof.com/brute-force/
https://sosafe-awareness.com/glossary/brute-force-attack/
https://www.strongdm.com/blog/brute-force-attack
https://www.fortinet.com/resources/cyberglossary/brute-force-attack
https://usa.kaspersky.com/resource-center/definitions/brute-force-attack
https://www.imperva.com/learn/application-security/brute-force-attack/
https://owasp.org/www-community/attacks/Brute_force_attack
https://www.youtube.com/watch?v=XkaJ3IPqGLw
https://www.youtube.com/watch?v=hkRHQyDirS0
https://www.techtarget.com/searchsecurity/definition/brute-force-cracking
https://www.cloudways.com/blog/what-is-brute-force-attack/
https://www.google.com/search?q=brute+force+attack+examples&client=ubuntu-sn&hs=vEl&sca_esv=5ba0164fee2f9f16&channel=fs&sxsrf=ACQVn095_ZjWNN9Up1Y9uC_GBSA2jOsYIg%3A1713186681996&ei=eScdZvbBPNmrptQPqum88AM&ved=0ahUKEwi24vTcpcSFAxXZlYkEHao0Dz4Q4dUDCBE&uact=5&oq=brute+force+attack+examples&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2JydXRlIGZvcmNlIGF0dGFjayBleGFtcGxlczIFEAAYgARI1OkMULPdDFiT6QxwA3gBkAEAmAFQoAGhBKoBATi4AQPIAQD4AQGYAgigArUEwgIKEAAYgAQYFBiHAsICChAAGIAEGIoFGEPCAgYQABgWGB7CAggQABgWGB4YD8ICCRAAGBYYHhjHA5gDAIgGAZIHATigB5gU&sclient=gws-wiz-serp
`,
                ephemeral: true
            });
        },
    };