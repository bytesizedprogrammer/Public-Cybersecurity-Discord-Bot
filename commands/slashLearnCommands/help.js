const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription(`Gives you this bot's command list!`),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's the command list:
mcq
question
getnews [only Ryan, Stathi, or Chris can use this command]

learnaccessControl
learnantivirussoftware
learnapplicationsecurity
learnadvancedpersistentthreat
learnattackvector
learnauthentication
learnauthorization
learnblockchainSecurity
learnbotnet
learnbruteforceattack
learncloudsecurity
learncryptography
learncapturetheflag
learncyberespionage
learndatabreach
learndataencryption
learndenialOfService
learndistributeddenialofservice
learnendpointsecurity
learnexploit
learnfirewall
learnhelp
learnhoneypot
learnidentitytheft
learnintrusiondetectionsystem
learnintrusionpreventionsystem
learnkeylogger
learnmalware
learnmaninthemiddleattack
learnmultifactorauthentication
learnnetworksecurity
learnphishing
learnpublickeyinfrastructure
learnransomware
learnrootkit
learnsecurityinformationeventmanagement
learnsocialengineering
learnsoftwarevulnerability
learnspearphishing
learnspyware
learnsqlinfection
learnsecuresocketlayer
learntransportlayersecurity
learntrojanhorse
learnvirus
learnvirtualprivatenetwork
learnwebsecurity
learnworm
learnzerodayexploit
learnzerotrustsecuritymodel
`,
                ephemeral: true
            });
        },
    };