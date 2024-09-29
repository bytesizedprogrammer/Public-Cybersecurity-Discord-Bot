const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('learnintrusionpreventionsystem')
		.setDescription('Gives you resources for learning IPS!'),
        async execute(interaction) {
            await interaction.reply({
                content: `
Here's some stuff:
https://www.ibm.com/topics/intrusion-prevention-system
https://www.vmware.com/topics/glossary/content/intrusion-prevention-system.html
https://www.paloaltonetworks.com/cyberpedia/what-is-an-intrusion-prevention-system-ips
https://techdocs.broadcom.com/us/en/symantec-security-software/endpoint-security-and-management/endpoint-protection/all/Using-policies-to-manage-security/managing-intrusion-prevention-v36820771-d53e8657.html
https://cloud.google.com/firewall/docs/about-intrusion-prevention
https://expertinsights.com/insights/top-10-intrusion-prevention-systems/
https://www.gartner.com/reviews/market/intrusion-prevention-systems
https://www.clearnetwork.com/top-intrusion-detection-and-prevention-systems/
https://www.csoonline.com/article/569085/12-top-idsips-tools.html
https://www.google.com/search?q=intrusion+prevention+system+examples&client=ubuntu-sn&hs=K07&sca_esv=b4b0af7a5fc4e643&channel=fs&sxsrf=ACQVn08Emw8PF5R9NlIZx13QZTGB026fYw%3A1713353627561&ei=m7MfZtL1IdStptQP-LyB4Ac&ved=0ahUKEwiSr-HSk8mFAxXUlokEHXheAHwQ4dUDCBA&uact=5&oq=intrusion+prevention+system+examples&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGludHJ1c2lvbiBwcmV2ZW50aW9uIHN5c3RlbSBleGFtcGxlczILEAAYgAQYigUYkQIyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I4h5Q7AFYmB5wBHgBkAEAmAFmoAHPB6oBBDEyLjG4AQPIAQD4AQGYAhGgApQIwgIKEAAYRxjWBBiwA8ICChAjGIAEGIoFGCfCAgYQABgHGB7CAgUQABiABMICChAAGIAEGIoFGEPCAggQABgWGB4YD8ICBRAhGKABwgIHEAAYgAQYDcICBhAAGB4YDcICCBAAGAUYHhgNwgIIEAAYCBgeGA3CAgoQABgIGB4YDRgPwgILEAAYgAQYigUYhgOYAwCIBgGQBgiSBwQxNi4xoAfVaw&sclient=gws-wiz-serp#ip=1
https://www.youtube.com/watch?v=wQSd_piqxQo
`,
                ephemeral: true
            });
        },
    };