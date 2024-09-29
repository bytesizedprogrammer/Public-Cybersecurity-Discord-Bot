const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnransomware')
		.setDescription('Gives you resources for learning about ransomware!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.ibm.com/topics/ransomware
https://www.cisa.gov/stopransomware
https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/
https://www.ncsc.gov.uk/ransomware/home
https://www.techtarget.com/searchsecurity/definition/ransomware
https://www.youtube.com/watch?v=hsuGA9l6jgs
https://www.malwarebytes.com/ransomware
https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/ransomware
https://security.berkeley.edu/faq/ransomware/
https://www.crowdstrike.com/cybersecurity-101/ransomware/ransomware-examples/
https://www.upguard.com/blog/ransomware-examples
https://www.digitalguardian.com/blog/50-examples-ransomware-attacks-and-their-impacts
https://www.tessian.com/blog/examples-of-ransomware-attacks/              
https://cybriant.com/examples-of-ransomware/
https://www.bitsight.com/blog/ransomware-examples
https://phoenixnap.com/blog/ransomware-examples
https://www.google.com/search?channel=fs&client=ubuntu-sn&q=ransomware+example#ip=1
https://support.microsoft.com/en-us/windows/protect-your-pc-from-ransomware-08ed68a7-939f-726c-7e84-a72ba92c01c3
https://www.upguard.com/blog/best-practices-to-prevent-ransomware-attacks
https://www.cisa.gov/stopransomware/how-can-i-protect-against-ransomware
https://www.pcmag.com/picks/the-best-ransomware-protection
https://www.cisecurity.org/insights/blog/7-steps-to-help-prevent-limit-the-impact-of-ransomware
https://www.zscaler.com/solutions/security-transformation/cyberthreat-protection/ransomware-protection
https://www.youtube.com/watch?v=9gkSppGRT9w
https://www.crowdstrike.com/cybersecurity-101/ransomware/how-to-prevent-ransomware/
https://www.checkpoint.com/solutions/ransomware-protection/anti-ransomware/
https://www.tripwire.com/state-of-security/22-ransomware-prevention-tips
https://www.varonis.com/use-case/ransomware-prevention
https://usa.kaspersky.com/resource-center/threats/how-to-prevent-ransomware
https://www.trendmicro.com/en_us/what-is/ransomware/how-to-prevent.html
`,
                ephemeral: true
            });
        },
    };