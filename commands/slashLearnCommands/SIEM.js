const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnsiem')
		.setDescription('Gives you resources for learning about SIEM!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
                https://www.gartner.com/en/information-technology/glossary/security-information-and-event-management-siem
                https://www.microsoft.com/en-us/security/business/security-101/what-is-siem
                https://www.ibm.com/topics/siem
                https://www.exabeam.com/explainers/siem/what-is-siem/
                https://logrhythm.com/solutions/security/siem/
                https://www.splunk.com/en_us/blog/learn/siem-security-information-event-management.html
                https://www.youtube.com/watch?v=9RfsRn7m7OE
                https://www.youtube.com/watch?v=2XLzMb9oZBI
                https://www.exabeam.com/explainers/siem-tools/siem-solutions/
                https://www.indeed.com/career-advice/career-development/siem-tools
                https://www.exabeam.com/explainers/siem/exploring-siem-examples-modern-capabilities-and-top-solutions-for-cybersecurity/
                https://www.dnsstuff.com/siem-tools
                https://www.youtube.com/watch?v=YAMZ5lG5GK0
                https://www.youtube.com/watch?v=3iXECLfevK8
                https://www.comparitech.com/net-admin/siem-tools/
                https://www.threatdown.com/glossary/what-is-siem/
                https://www.seagate.com/blog/siem-security-to-prevent-ransomware-attacks/
                https://www.kelsercorp.com/blog/what-is-a-siem-solution-can-it-prevent-cyber-attacks-do-you-need-it
                https://www.oneidentity.com/learn/what-is-security-information-and-event-management.aspx
                https://www.google.com/search?channel=fs&client=ubuntu-sn&q=SIEM+Examoles#ip=1

`,
                ephemeral: true
            });
        },
    };