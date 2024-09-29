const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dailysafetytipgenerator')
		.setDescription(`Gives you all of the many daily tips this bot has!`),
        async execute(interaction) {
            await interaction.reply({
                content: 
`
**Keep your software up-to-date**.  The reason for this is Software companies typically provide software updates for 3 reasons: to add new features, fix known bugs, and upgrade security.  Always update to the latest version of your software to protect yourself from new or existing security vulnerabilities.,
**Avoid opening suspicious emails**.  The reason for this is it could very well be a phishing scam. Someone might be impersonating another individual or company to gain access to your personal information. Sometimes the emails may also include attachments or links that can infect your devices.,
**Keep hardware up-to-date**.  The reason for this is Outdated computer hardware may not support the most recent software security upgrades. Additionally, old hardware makes it slower to respond to cyber-attacks if they happen. Make sure to use computer hardware that’s more up-to-date.,
**Use a secure file-sharing solution to encrypt data**.  The reason for this is if you regularly share confidential information, you absolutely need to start using a secure file-sharing solution. Regular email is not meant for exchanging sensitive documents, because if the emails are intercepted, unauthorized users will have access to your precious data.On the other hand, using a secure file-sharing solution like TitanFile will automatically encrypt sensitive files so that you don’t have to worry about a data breach. Remember, your files are only as secure as the tools you chose to share them with.,
**Use anti-virus and anti-malware**.  The reason for this is as long as you’re connected to the web, it’s impossible to have complete and total protection from malware. However, you can significantly reduce your vulnerability by ensuring you have an anti-virus and at least one anti-malware installed on your computers.,
**Use a VPN to privatize your connections**.  The reason for this is For a more secure and privatized network, use a virtual private network (VPN). It’ll encrypt your connection and protect your private information, even from your internet service provider.,
**Check links before you click**.  The reason for this is Links can easily be disguised as something they’re not so it’s best to double check before you click on a hyperlink. On most browsers, you can see the target URL by hovering over the link. Do this to check links before you click on them.  Alternatively, you can just manually type in the site itself even if url looks the same cuz it can still be problematic,
**Don’t be lazy with your passwords!**.  The reason for this is Put more effort into creating your passwords. You can use a tool like howsecureismypassword.net to find out how secure your passwords are.,
**Disable Bluetooth when you don’t need it**.  The reason for this is Devices can be hacked via Bluetooth and subsequently your private information can be stolen. If there’s no reason to have your Bluetooth on, turn it off!,
**Enable 2-Factor Authentication**.  The reason for this is many platforms now allow you to enable 2-factor authentication to keep your accounts more secure. It’s another layer of protection that helps verify that it’s actually you who is accessing your account and not someone who’s unauthorized. Enable this security feature when you can.,
**Remove adware from your machines**.  The reason for this is Adware collects information about you to serve you more targeted ads. It’s best to rid your computer of all forms of adware to maintain your privacy. Use AdwCleaner to clean adware and unwanted programs from your computer.,
**Double-check for HTTPS on websites**.  The reason for this is When you’re on a website that isn’t using HTTPS, there’s no guarantee that the transfer of information between you and the site’s server is secure. Double-check that a site’s using HTTPS before you give away personal or private information.,
**Don’t store important information in non-secure places**.  The reason for this is When storing information online, you want to keep it in a location that can’t be accessed by unauthorized users.,
**Scan external storage devices for viruses**.  The reason for this is External storage devices are just as prone to malware as internal storage devices. If you connect an infected external device to your computer, the malware can spread. Always scan external devices for malware before accessing them.,
**Avoid using public networks**.  The reason for this is When you connect to a public network, you’re sharing the network with everyone who is also connected. Any information you send or retrieve on the network is vulnerable. Stay away from public networks or use a VPN when you’re connected to one.,
**Avoid the “secure enough” mentality**.  The reason for this is Unless you’re completely isolated from the rest of the world, there’s no such thing as being “secure enough.” Big companies like Facebook invest a fortune into security every year but are still affected by cyber attacks.,
**Invest in security upgrades**.  The reason for this is Following the previous tip, try to invest in security upgrades when they’re available. It’s better to eat the costs of security than pay for the consequences of a security breach!,
**Back up important data**.  The reason for this is important data can be lost as a result of a security breach. To make sure you’re prepared to restore data once it’s lost, you should ensure your important information is backed up frequently on the cloud or a local storage device.,
**Train your employees**.  The reason for this is The key to making cybersecurity work is to make sure your employees well trained, in sync, and consistently exercising security practices. Sometimes, one mistake from an improperly trained employee can cause an entire security system to crumble.,
**Use HTTPS on your website**.  The reason for this is Having an SSL certificate installed and HTTPS enabled on your website will help encrypt all information that travels between a visitor’s browser and your web server.,
**Employ a “White Hat” hacker**.  The reason for this is Not all hackers are bad. Some hackers expose security risks for the sake of helping others improve their cybersecurity by keeping them aware of security flaws and patching them. These hackers are known as “white hat” hackers. It might benefit you to hire one to help you find risks you never knew you had.,
**Monitor and respond to threats with intrusion detection systems.**.  The reason for this is to detect and respond to any unauthorized access attempts or suspicious activities within your network promptly, minimizing the risk of data breaches or system compromises.,
**Secure your network with firewalls and VPNs.**.  The reason for this is to establish barriers that filter incoming and outgoing network traffic, preventing unauthorized access and protecting sensitive data from potential cyber threats, including hackers and malware.,
**Use Strong and Unique Passwords: Create complex passwords with a mix of uppercase and lowercase letters, numbers, and symbols. Use a unique password for each of your accounts. Consider using a reputable password manager to generate and store complex passwords.**.  The reason for this is to strengthen the security of your accounts by making them more resistant to brute-force attacks and credential stuffing, reducing the likelihood of unauthorized access to your sensitive information.,
**Enable Multi-Factor Authentication (MFA): Enable MFA wherever possible to add an extra layer of security. MFA requires a second form of verification, such as a code from a mobile app, in addition to your password.**.  The reason for this is to significantly enhance the security of your accounts by requiring multiple forms of verification, making it much harder for attackers to gain unauthorized access even if they obtain your password.,
**Keep Software and Systems Updated: Regularly update your operating system, software, antivirus, and other applications to patch known vulnerabilities. Enable automatic updates when available.**.  The reason for this is to mitigate the risk of exploitation by cybercriminals who often target known vulnerabilities in outdated software and systems, thereby reducing the likelihood of successful attacks and data breaches.,
**Be Cautious with Emails: Avoid clicking on links or downloading attachments from unknown or suspicious wary of phishing attempts; verify the legitimacy of emails before responding or providing sensitive information.**.  The reason for this is The reason for this is to protect against phishing attacks, malware infections, and other email-based threats that exploit human error and trust, reducing the likelihood of falling victim to cyber scams and compromises.,
**Use Reliable Security Software: Install reputable antivirus and anti-malware software. Keep the security software up to date and perform regular scans of your system.**.  The reason for this is to detect, prevent, and remove malicious software infections, including viruses, Trojans, and spyware, safeguarding your system and sensitive data from cyber threats.,
**Secure Your Wi-Fi Network: Use strong and unique passwords for your Wi-Fi network. Enable WPA3 encryption if available. Regularly update your router's firmware.**.  The reason for this is to prevent unauthorized access to your wireless network and sensitive data, maintaining the confidentiality and integrity of your communications and reducing the risk of unauthorized intrusions and data breaches.,
**Backup Your Data: Regularly back up important data to an external hard drive or a secure cloud the event of a ransomware attack, having backups can help you restore your data without paying a ransom.**.  The reason for this is to ensure data availability and integrity, enabling timely recovery and minimizing the impact of data loss or corruption caused by ransomware attacks, hardware failures, or other unforeseen events.,
**Be Mindful of Social Media: Limit the personal information you share on social media. Adjust privacy settings to control who can see your information.**.  The reason for this is to reduce the risk of identity theft, stalking, and other privacy violations by minimizing the exposure of sensitive personal information to potential attackers and unauthorized individuals.,
**Educate Yourself: Stay informed about the latest cyber threats and attack techniques. Participate in cybersecurity awareness training if available.**.  The reason for this is to empower yourself with knowledge and skills to recognize, prevent, and respond to cyber threats effectively, enhancing your overall cybersecurity posture and resilience against evolving risks.,
**Implement Network Security Measures: Use a firewall to monitor and control incoming and outgoing network traffic. Consider using a virtual private network (VPN) for added security, especially when connecting to public Wi-Fi networks.**.  The reason for this is to protect the confidentiality, integrity, and availability of your network communications and data by implementing robust security controls and encryption mechanisms, reducing the risk of eavesdropping, interception, and unauthorized access.,
**Regularly Monitor Financial Accounts: Keep a close eye on your bank and credit card statements for any unauthorized transactions. Consider setting up alerts for unusual activity.**.  The reason for this is to detect and respond to fraudulent or unauthorized financial transactions promptly, minimizing the financial impact and potential loss resulting from identity theft, credit card fraud, or other financial scams.,
**Use a VPN**.  The reason for this is to encrypt your internet connection, ensuring that your online activities are private and protected from prying eyes, such as hackers or data thieves, especially when using public Wi-Fi networks.,
**Secure home network**.  The reason for this is to prevent unauthorized access to your home network, reducing the risk of intrusions, data breaches, or malicious activities by securing your router with strong passwords, enabling firewalls, and regularly updating firmware.,
**Guard your devices**.  The reason for this is to protect your devices, such as computers, smartphones, and tablets, from malware, viruses, and other cyber threats by using antivirus software, keeping your operating systems and apps up to date, and being cautious about clicking on suspicious links or downloading unknown files.,
**Enforce strict access privileges**.  The reason for this is to limit access to sensitive information and resources, minimizing the potential damage from insider threats or unauthorized users by implementing strong authentication methods, such as multi-factor authentication, and carefully managing user permissions and roles.,
**Avoid online scams**.  The reason for this is to prevent falling victim to various online scams, such as phishing attacks, identity theft, or fraudulent schemes, by being vigilant and skeptical about unsolicited emails, messages, or offers, and by verifying the legitimacy of websites and businesses before providing personal or financial information.,
`,
                ephemeral: true
            });
        },
    };