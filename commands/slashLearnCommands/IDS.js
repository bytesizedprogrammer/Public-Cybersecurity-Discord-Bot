const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnintrusiondetectionsystem')
		.setDescription('Gives you resources for learning IDS!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.paloaltonetworks.com/cyberpedia/what-is-an-intrusion-detection-system-ids
https://www.clearnetwork.com/top-intrusion-detection-and-prevention-systems/
https://www.upguard.com/blog/top-free-network-based-intrusion-detection-systems-ids-for-the-enterprise
https://www.checkpoint.com/cyber-hub/network-security/what-is-an-intrusion-detection-system-ids/
https://www.spiceworks.com/it-security/vulnerability-management/articles/what-is-idps/
https://www.helixstorm.com/blog/types-of-intrusion-detection-systems/
https://www.dhs.gov/publication/intrusion-detection-and-prevention-systems
https://www.imperva.com/learn/application-security/intrusion-detection-prevention/
https://www.youtube.com/watch?v=cGIgJOICpX0
https://www.youtube.com/watch?v=cQ0YZAR0uKk
https://csrc.nist.gov/pubs/book-section/2010/10/intrusion-detection-and-prevention-systems/final
https://www.youtube.com/watch?v=dfVAi87BSEs
https://www.techtarget.com/searchsecurity/definition/intrusion-detection-system
https://www.google.com/search?q=intrusion+detection+system+cyber+security+examples&client=ubuntu-sn&hs=u3Z&sca_esv=a228ad004c92fec0&channel=fs&sxsrf=ACQVn0_Q-olZRQnMnHtsdM3F2YQ4e8nN6g%3A1713223154933&ei=8rUdZpHBOKej5NoPoc-BwA4&ved=0ahUKEwiRgsjMrcWFAxWnEVkFHaFnAOgQ4dUDCBE&uact=5&oq=intrusion+detection+system+cyber+security+examples&gs_lp=Egxnd3Mtd2l6LXNlcnAiMmludHJ1c2lvbiBkZXRlY3Rpb24gc3lzdGVtIGN5YmVyIHNlY3VyaXR5IGV4YW1wbGVzMgoQIRgKGKABGMMESOjCAVDKqQFY78EBcAV4AZABAJgBfqAB3A-qAQQyMi4yuAEDyAEA-AEBmAIToALUCcICChAAGEcY1gQYsAPCAgcQABiABBgNwgIGEAAYBxgewgIIEAAYCBgHGB7CAgYQABgeGA3CAggQABgeGA0YD8ICCBAAGAUYHhgNwgIIEAAYgAQYogTCAgwQIRgKGKABGMMEGAqYAwCIBgGQBgiSBwQxNi4zoAfAZA&sclient=gws-wiz-serp
`,
                ephemeral: true
            });
        },
    };