const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learndataencryption')
		.setDescription('Gives you resources for learning data encryption!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://support.microsoft.com/en-us/office/encrypt-email-messages-373339cb-bf1a-4509-b296-802a39d801dc
https://www.digitalguardian.com/blog/what-data-encryption
https://www.ibm.com/topics/encryption
https://www.simplilearn.com/data-encryption-methods-article
https://www.sealpath.com/blog/types-of-encryption-guide/
https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/encryption/encryption-and-data-storage/
https://safecomputing.umich.edu/protect-yourself/encrypt-your-data
https://www.techtarget.com/searchsecurity/definition/encryption
https://cloudian.com/guides/data-protection/data-encryption-the-ultimate-guide/
https://usa.kaspersky.com/resource-center/definitions/encryption
https://cloud.google.com/learn/what-is-encryption
https://www.forcepoint.com/cyber-edu/data-encryption
https://www.splunk.com/en_us/blog/learn/data-encryption-methods-types.html
https://www.analyticssteps.com/blogs/what-data-encryption-examples-and-types
https://hoop.dev/blog/5-real-world-examples-of-database-security-success-stories/
https://www.kiteworks.com/secure-file-sharing/real-world-examples-of-end-to-end-encryption/
https://www.internetsafetystatistics.com/real-life-rsa-encryption-examples/
https://www.google.com/search?q=data+encryption+examples&client=ubuntu-sn&hs=1kt&sca_esv=cae8840f93f20457&channel=fs&sxsrf=ACQVn0_JuTG9NJEEB6kCwndR5WlTvIgssg%3A1713219422235&ei=XqcdZp3qDce_kvQPrfyL0Ag&ved=0ahUKEwidkdbYn8WFAxXHn4QIHS3-AooQ4dUDCBE&uact=5&oq=data+encryption+examples&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGRhdGEgZW5jcnlwdGlvbiBleGFtcGxlczIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgPMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSKEJUKIBWMwIcAF4AJABAJgBYKAB5gSqAQE5uAEDyAEA-AEBmAIJoALMBMICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIKEAAYgAQYigUYQ8ICEBAAGIAEGIoFGEMYsQMYgwHCAgoQABiABBgUGIcCmAMAiAYBkAYKkgcDOC4xoAf5QQ&sclient=gws-wiz-serp
`,
                ephemeral: true
            });
        },
    };