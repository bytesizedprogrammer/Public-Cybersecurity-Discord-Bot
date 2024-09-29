const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learncapturetheflag')
		.setDescription('Gives you resources for learning capture the flag!'),
        async execute(interaction) {
            await interaction.reply({
                content: `Here's some stuff: 
https://ctf.hacker101.com/
https://www.youtube.com/watch?v=wL3acu8xspM
https://www.youtube.com/watch?v=8ev9ZX9J45A
https://www.reddit.com/r/cybersecurity/comments/17szd03/suggestions_for_free_ctfcyber_competition_games/
https://capturetheflag.withgoogle.com/
https://www2.deloitte.com/us/en/pages/public-sector/articles/cybersecurity-capture-the-flag-training.html
https://gist.github.com/fakhrullah/e8794f4847f3114316235ad7b0530dec
https://www.cyberwarrior.com/ctf/
https://247ctf.com/
https://www.eccouncil.org/cybersecurity-exchange/cybersecurity-technician/capture-flag-ctf-cybersecurity/
https://ctf101.org/
https://www.hackthebox.com/hacker/ctf
https://fieldeffect.com/blog/capture-the-flag-cybersecurity
https://www.youtube.com/watch?v=Xp_jAakX_J8
https://www.youtube.com/watch?v=Zw25_ySOrC0
https://www.csnp.org/post/capture-the-flag-for-beginners
https://buildyourfuture.withgoogle.com/events/ctf
`,
                ephemeral: true
            });
        },
    };