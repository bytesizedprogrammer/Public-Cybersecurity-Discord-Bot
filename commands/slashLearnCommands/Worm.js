const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnworm')
		.setDescription('Gives you resources for learning Worm!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.youtube.com/watch?v=Efm1mXJFYeI
https://www.techtarget.com/searchsecurity/definition/worm
https://www.cisco.com/c/en/us/products/security/what-is-a-worm.html
https://www.malwarebytes.com/computer-worm
https://www.crowdstrike.com/cybersecurity-101/malware/computer-worm/
https://www.sangfor.com/glossary/cybersecurity/what-is-worm-in-cybersecurity
https://www.youtube.com/watch?v=n8mbzU0X2nQ
https://www.security.org/antivirus/computer-worm/
https://dataconomy.com/2023/03/20/what-is-a-computer-worm-examples/
https://www.fbi.gov/history/famous-cases/morris-worm
https://www.futurelearn.com/info/courses/common-cybersecurity-attacks-and-defense-strategies/0/steps/190563
https://www.secpoint.com/top-10-worms.html
https://abcnews.go.com/Technology/top-computer-viruses-worms-internet-history/story?id=8480794
https://www.google.com/search?q=worm+cyber+security+real+examples&client=ubuntu-sn&hs=SD9&sca_esv=29f58c58bde83764&channel=fs&sxsrf=ACQVn0_LHjmeRYtkSUJNU75LcN9tKS4t0w%3A1713914365574&ei=_UEoZuW8IrTj5NoPmo2K2As&ved=0ahUKEwilr73HvNmFAxW0MVkFHZqGArsQ4dUDCBA&uact=5&oq=worm+cyber+security+real+examples&gs_lp=Egxnd3Mtd2l6LXNlcnAiIXdvcm0gY3liZXIgc2VjdXJpdHkgcmVhbCBleGFtcGxlczIIECEYoAEYwwQyCBAhGKABGMMESKUKULQFWPcIcAF4AZABAJgBrAGgAfIEqgEDMS40uAEDyAEA-AEBmAIDoALMAcICChAAGLADGNYEGEfCAgcQIxiwAhgnmAMAiAYBkAYIkgcDMi4xoAfeEg&sclient=gws-wiz-serp#ip=1
https://www.sdxcentral.com/security/definitions/what-is-a-computer-worm/how-to-prevent-computer-worms/
https://www.whatismyip.com/computer-worm/
https://www.bitdefender.com/consumer/support/answer/16565/
https://www.knowledgehut.com/blog/security/computer-worms
`,
                ephemeral: true
            });
        },
    };