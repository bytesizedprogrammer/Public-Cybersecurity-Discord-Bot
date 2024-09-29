const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnidentitytheft')
		.setDescription('Gives you resources for learning Identity theft!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://lifelock.norton.com/learn/identity-theft-resources/how-to-prevent-identity-theft
https://datashieldcorp.com/5-worst-cases-of-identity-theft-ever/
https://freedomiddirect.com/pages/examples-of-identity-theft
https://www.phonexia.com/blog/the-4-biggest-identity-theft-frauds-in-modern-history/
https://oag.ca.gov/idtheft/facts/top-ten
https://www.texasattorneygeneral.gov/consumer-protection/identity-theft/help-prevent-identity-theft
https://www.nerdwallet.com/article/finance/how-to-prevent-identity-theft
https://www.usnews.com/360-reviews/privacy/identity-theft-protection/10-ways-to-prevent-identity-theft
https://www.experian.com/blogs/ask-experian/how-to-protect-yourself-from-identity-theft/
https://www.transunion.com/blog/identity-protection/how-to-protect-yourself-from-identity-theft
https://blog.clinked.com/examples-of-identity-theft
https://www.malwarebytes.com/identity-theft
https://www.mcafee.com/learn/5-common-types-of-identity-theft/
https://www.ameriprise.com/privacy-security-fraud/protect-yourself/types-of-identity-theft
https://www.uco.edu/technology/cyber-security/indentity-theft
https://www.fortinet.com/resources/cyberglossary/identity-theft
https://www.terranovasecurity.com/solutions/security-awareness-training/what-is-identity-theft
https://www.cisa.gov/topics/cybersecurity-best-practices/identity-theft-and-personal-cyber-threats
https://www.google.com/search?q=identity+theft+cyber+security+examples&client=ubuntu-sn&hs=MOF&sca_esv=a228ad004c92fec0&channel=fs&sxsrf=ACQVn09o3i6SHJ4cSNg9rTSTKZCrJyB9Ag%3A1713223139909&ei=47UdZsODN72h5NoP9p68-AY&ved=0ahUKEwiDgbPFrcWFAxW9EFkFHXYPD28Q4dUDCBE&uact=5&oq=identity+theft+cyber+security+examples&gs_lp=Egxnd3Mtd2l6LXNlcnAiJmlkZW50aXR5IHRoZWZ0IGN5YmVyIHNlY3VyaXR5IGV4YW1wbGVzMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigAUjxEFCzCViVD3ABeAGQAQCYAVSgAbIFqgEBObgBA8gBAPgBAZgCCqAC5gXCAgoQABhHGNYEGLADwgIGEAAYFhgewgIIEAAYFhgeGA_CAgoQABgWGB4YDxgKwgILEAAYgAQYigUYhgOYAwCIBgGQBgiSBwIxMKAHgDM&sclient=gws-wiz-serp#ip=1
`,
                ephemeral: true
            });
        },
    };