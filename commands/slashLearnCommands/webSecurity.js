const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnwebsecurity')
		.setDescription('Gives you resources for learning Web Security!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cisa.gov/news-events/news/recovering-viruses-worms-and-trojan-horses
https://www.proofpoint.com/us/threat-reference/web-security
https://www.fortinet.com/resources/cyberglossary/what-is-web-security
https://developer.mozilla.org/en-US/docs/Web/Security
https://www.zscaler.com/resources/security-terms-glossary/what-is-web-security
https://www.youtube.com/watch?v=80VviDER96I
https://www.youtube.com/watch?v=5JJrJGZ_LjM
https://www.youtube.com/watch?v=XOlg8yyoumY
https://www.geeksforgeeks.org/web-security-considerations/
https://www.cloudflare.com/learning/security/what-is-web-application-security/
https://elevatesecurity.com/3-recent-real-world-examples-of-the-impact-of-unintentional-insider-risk/
https://www.horangi.com/blog/real-life-examples-of-web-vulnerabilities
https://www.youtube.com/watch?v=nG9v3RSSXTo
https://www.youtube.com/watch?v=9VNHhxRTbSI
https://www.youtube.com/watch?v=QO0uAB0RQeI
https://www.coordinated.com/blog/exploring-real-world-cybersecurity-examples
https://www.code42.com/blog/insider-threat-examples-in-real-life/
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security
https://mailchimp.com/resources/website-security/
https://www.lrswebsolutions.com/Blog/Posts/32/Website-Security/11-Best-Practices-for-Developing-Secure-Web-Applications/blog-post/
https://www.computer.org/publications/tech-news/trends/10-essential-steps-to-improve-your-website-security
https://spring.io/guides/gs/securing-web
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security
https://www.cisa.gov/news-events/news/recovering-viruses-worms-and-trojan-horses
https://www.proofpoint.com/us/threat-reference/web-security
https://www.fortinet.com/resources/cyberglossary/what-is-web-security
https://developer.mozilla.org/en-US/docs/Web/Security
https://www.zscaler.com/resources/security-terms-glossary/what-is-web-security
https://www.youtube.com/watch?v=80VviDER96I
https://www.youtube.com/watch?v=5JJrJGZ_LjM
https://www.youtube.com/watch?v=XOlg8yyoumY
https://www.geeksforgeeks.org/web-security-considerations/
https://www.cloudflare.com/learning/security/what-is-web-application-security/
https://elevatesecurity.com/3-recent-real-world-examples-of-the-impact-of-unintentional-insider-risk/
https://www.horangi.com/blog/real-life-examples-of-web-vulnerabilities
https://www.youtube.com/watch?v=nG9v3RSSXTo
https://www.youtube.com/watch?v=9VNHhxRTbSI
https://www.youtube.com/watch?v=QO0uAB0RQeI
https://www.coordinated.com/blog/exploring-real-world-cybersecurity-examples
https://www.code42.com/blog/insider-threat-examples-in-real-life/
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security
https://mailchimp.com/resources/website-security/
https://www.lrswebsolutions.com/Blog/Posts/32/Website-Security/11-Best-Practices-for-Developing-Secure-Web-Applications/blog-post/
https://www.computer.org/publications/tech-news/trends/10-essential-steps-to-improve-your-website-security
https://spring.io/guides/gs/securing-web
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security
https://www.cisa.gov/news-events/news/recovering-viruses-worms-and-trojan-horses
https://www.proofpoint.com/us/threat-reference/web-security
https://www.fortinet.com/resources/cyberglossary/what-is-web-security
https://developer.mozilla.org/en-US/docs/Web/Security
https://www.zscaler.com/resources/security-terms-glossary/what-is-web-security
https://www.youtube.com/watch?v=80VviDER96I
https://www.youtube.com/watch?v=5JJrJGZ_LjM
https://www.youtube.com/watch?v=XOlg8yyoumY
https://www.geeksforgeeks.org/web-security-considerations/
https://www.cloudflare.com/learning/security/what-is-web-application-security/
https://elevatesecurity.com/3-recent-real-world-examples-of-the-impact-of-unintentional-insider-risk/
https://www.horangi.com/blog/real-life-examples-of-web-vulnerabilities
https://www.youtube.com/watch?v=nG9v3RSSXTo
https://www.youtube.com/watch?v=9VNHhxRTbSI
https://www.youtube.com/watch?v=QO0uAB0RQeI
https://www.coordinated.com/blog/exploring-real-world-cybersecurity-examples
https://www.code42.com/blog/insider-threat-examples-in-real-life/
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security
https://mailchimp.com/resources/website-security/
https://www.lrswebsolutions.com/Blog/Posts/32/Website-Security/11-Best-Practices-for-Developing-Secure-Web-Applications/blog-post/
https://www.computer.org/publications/tech-news/trends/10-essential-steps-to-improve-your-website-security
https://spring.io/guides/gs/securing-web
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security`,
                ephemeral: true
            });
        },
    };