const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnmultifactorauthentication')
		.setDescription('Gives you resources for learning about MFA!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.cisa.gov/MFA
https://www.youtube.com/watch?v=fAYE8i-l1Dk
https://expertinsights.com/insights/the-top-multi-factor-authentication-mfa-solutions-for-business/
https://aws.amazon.com/what-is/mfa/
https://www.cisa.gov/resources-tools/resources/multi-factor-authentication-mfa
https://support.microsoft.com/en-us/topic/what-is-multifactor-authentication-e5e39437-121c-be60-d123-eda06bddf661
https://www.axiad.com/blog/multi-factor-authentication-examples/
https://frontegg.com/blog/multi-factor-authentication-examples
https://www.globalknowledge.com/us-en/resources/resource-library/articles/the-three-types-of-multi-factor-authentication-mfa/
https://dotsecurity.com/insights/blog-what-is-multifactor-authentication-and-what-are-some-examples
https://cloud.google.com/identity-platform/docs/web/mfa
https://visusllc.com/blog/how-can-i-implement-2fa-for-my-web-application
https://www.youtube.com/watch?v=vfT2ZC22TRk
https://www.youtube.com/watch?v=yfgn2axUcfE
https://neliosoftware.com/blog/make-your-website-more-secure-with-multi-factor-authentication/
https://www.loginradius.com/blog/identity/multi-factor-authentication-a-beginners-guide/
https://www.okta.com/blog/2018/11/implement-mfa-on-your-custom-apps-and-websites-then-brag-about-it-while-you-still-can/
https://swoopnow.com/two-factor-authentication-guide/
`,
                ephemeral: true
            });
        },
    };