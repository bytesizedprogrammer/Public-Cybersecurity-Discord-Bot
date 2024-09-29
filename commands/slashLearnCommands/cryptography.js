const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learncryptography')
		.setDescription('Gives you resources for learning cryptography!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff: 
https://www.google.com/search?q=cryptography+examples&client=ubuntu-sn&hs=lkY&sca_esv=725efba4277893af&channel=fs&sxsrf=ACQVn08JXu8SqeEMfOjvMwVYMQXqk4smBg%3A1713218123823&ei=S6IdZpDTMZme5NoP6o-ssAE&oq=cryptography+exa&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGNyeXB0b2dyYXBoeSBleGEqAggAMgsQABiABBiKBRiRAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgoQABiABBgUGIcCSIg2UO0CWMMEcAN4AZABAJgBRqABsAGqAQEzuAEDyAEA-AEBmAIGoALSAcICChAAGEcY1gQYsAPCAgoQIxiABBiKBRgnwgIFEC4YgATCAgoQABiABBiKBRhDmAMAiAYBkAYIkgcBNqAHqBc&sclient=gws-wiz-serp#ip=1
https://www.ibm.com/topics/cryptography
https://www.britannica.com/topic/cryptology
https://www.laits.utexas.edu/~anorman/BUS.FOR/course.mat/SSim/life.html               
https://medium.com/@prashanthreddyt1234/real-life-applications-of-cryptography-162ddf2e917d
https://www.fortinet.com/resources/cyberglossary/what-is-cryptography#:~:text=Cryptography%20is%20the%20process%20of,%2C%20computer%20passwords%2C%20and%20ecommerce. 
https://www.techtarget.com/searchsecurity/definition/cryptography
https://pypi.org/project/cryptography/
https://usa.kaspersky.com/resource-center/definitions/what-is-cryptography
https://www.simplilearn.com/cryptography-techniques-article
https://www.youtube.com/watch?v=j_8PLI_wCVU
https://www.youtube.com/watch?v=C7vmouDOJYM
https://www.youtube.com/watch?v=fNC3jCCGJ0o
https://thebestvpn.com/cryptography/
https://www.youtube.com/watch?v=CajoamYNxz0
https://www.reddit.com/r/crypto/comments/oc81wc/how_to_learn_cryptography/
`,
                ephemeral: true
            });
        },
    };