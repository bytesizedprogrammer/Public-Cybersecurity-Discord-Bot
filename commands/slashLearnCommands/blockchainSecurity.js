const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnblockchainsecurity')
		.setDescription('Gives you resources for learning blockchain security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.ibm.com/topics/blockchain-security
https://www.chainalysis.com/blog/blockchain-security/
https://www.simplilearn.com/what-is-blockchain-security-and-its-examples-article
https://www.fool.com/terms/b/blockchain-security/
https://www.geeksforgeeks.org/what-is-blockchain-security/
https://cpl.thalesgroup.com/encryption/blockchain
https://builtin.com/blockchain/blockchain-cybersecurity-uses
https://www.getastra.com/blog/knowledge-base/blockchain-security-issues/
https://www.techtarget.com/searchsecurity/tip/6-blockchain-use-cases-for-cybersecurity
`,
                ephemeral: true
            });
        },
    };