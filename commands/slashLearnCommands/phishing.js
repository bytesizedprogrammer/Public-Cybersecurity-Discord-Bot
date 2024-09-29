const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnphishing')
		.setDescription('Gives you resources for learning about phishing!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams
https://www.phishing.org/what-is-phishing
https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams
https://www.csoonline.com/article/514515/what-is-phishing-examples-types-and-techniques.html
https://www.imperva.com/learn/application-security/phishing-attack-scam/
https://cofense.com/knowledge-center-hub/real-phishing-email-examples/
https://blog.usecure.io/the-most-common-examples-of-a-phishing-email
https://www.phishing.org/phishing-examples
https://www.terranovasecurity.com/blog/top-examples-of-phishing-emails
https://www.hooksecurity.co/phishing-email-examples
https://ciso.uw.edu/education/phishing-examples/
https://phishing.iu.edu/stories/index.html
https://www.cisco.com/c/en/us/products/security/email-security/what-is-phishing.html
https://cybeready.com/phishing-awareness-training/phishing-prevention-best-practices
https://usa.kaspersky.com/resource-center/preemptive-safety/phishing-prevention-tips
https://www.lepide.com/blog/10-ways-to-prevent-phishing-attacks/
https://www.occ.gov/topics/consumers-and-communities/consumer-protection/fraud-resources/phishing-attack-prevention.html
https://www.cisa.gov/secure-our-world/teach-employees-avoid-phishing
https://cofense.com/knowledge-center/anti-phishing-best-practices/
https://perception-point.io/guides/phishing/how-to-prevent-phishing-attacks/
https://www.ncsc.gov.uk/guidance/phishing
`,
                ephemeral: true
            });
        },
    };