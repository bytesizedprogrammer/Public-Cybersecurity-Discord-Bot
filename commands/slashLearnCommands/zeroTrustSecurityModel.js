const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnzerotrustsecuritymodel')
		.setDescription('Gives you resources for learning about Zero Trust Security Models!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cisa.gov/zero-trust-maturity-model
https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/
https://www.crowdstrike.com/cybersecurity-101/zero-trust-security/
https://www.microsoft.com/en-us/security/business/zero-trust
https://www.csoonline.com/article/1249027/9-in-10-organizations-have-embraced-zero-trust-security-globally.html
https://www.techtarget.com/searchsecurity/feature/How-to-implement-zero-trust-security-from-people-who-did-it
https://medium.com/@vasank/mastering-zero-trust-architecture-from-basics-to-advanced-implementation-with-real-world-use-cases-c95bad48403f
https://perception-point.io/guides/zero-trust/zero-trust-model-principles-challenges-and-a-real-life-example/
https://www.cdnetworks.com/enterprise-applications-blog/zero-trust-use-cases/
https://www.netskope.com/security-defined/what-is-zero-trust
https://www.sealpath.com/blog/zero-trust-security-model-implement-strategy/
https://www.tigera.io/learn/guides/zero-trust/zero-trust-security/
`,
                ephemeral: true
            });
        },
    };