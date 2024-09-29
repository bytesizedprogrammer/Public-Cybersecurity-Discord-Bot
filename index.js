const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds] });

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


client.on('messageCreate', message => {
    //console.log(message.content);

    // Ignore messages from the bot itself
    if (message.author.id === process.env.BOTUSERID) return;

    // Normalize the content for easier comparisons
    const content = message.content.toLowerCase();

    // Use switch statement based on keywords
    switch (true) {
        case content.includes("ctf") || /\b(?:capture the flag)\b/.test(content):
            message.reply({
                content: 'Capture the Flag (CTF) are exercises/competitions in which participants, either individually or as part of a team, are challenged to find and exploit vulnerabilities in a system to capture a "flag" or piece of information. Flags are text strings, which are secretly hidden in purposefully-vulnerable programs or websites. And if you\'d like to learn more, type the command "/learnCTF".',
                ephemeral: true
            });
            break;

        case content.includes("cybersecurity"):
            message.reply({
                content: 'Cybersecurity is the practice of protecting systems, networks, devices, data, programs, etc. from digital attacks. These cyberattacks tend to attempt to gather sensitive information and then extort money from users using ransomware, or just delete everything to damage businesses as much as they possibly can. And if you\'d like to learn more, type the command "/learnCybersecurity".',
                ephemeral: true
            });
            break;

		case /\baccess\s+control\b/i.test(content):
			message.reply({
				content: 'Access control is a security technique that manages who can and cannot view or utilize certain virtual resources within a computing environment...',
				ephemeral: true
			});
			break;
	
		case /advanced\spersistent\sthreat\b/.test(content) || content.includes("APT"):
			message.reply({
				content: 'Advanced Persistent Threat (APT) refers to a sophisticated and continuous cyber attack where an unauthorized user gains access to a network and remains undetected...',
				ephemeral: true
			});
			break;
	
		case /\bantivirus\s+software\b/.test(content):
			message.reply({
				content: 'Antivirus Software is a program designed to detect, prevent, and remove malicious software (malware) from a computer or network...',
				ephemeral: true
			});
			break;
		
		// For example, the next cases would be:
		case /\bapplication\s+security\b/.test(content):
			message.reply({
				content: 'Application Security involves measures taken to protect software applications from threats and vulnerabilities...',
				ephemeral: true
			});
			break;

		case /\battack\s+vector\b/.test(content):
			message.reply({
				content: 'Attack Vector is the method or pathway through which a cyber attack is carried out. It could be through vulnerabilities in software, social engineering, phishing emails, or other means.',
				ephemeral: true
			});
			break;
	
		case content.includes("authentication"):
			message.reply({
				content: 'Authentication is the process of verifying the identity of a user or system. This typically involves presenting credentials, such as passwords, biometrics, or security tokens, to confirm identity and grant access to resources.',
				ephemeral: true
			});
			break;
	
		case content.includes("authorization"):
			message.reply({
				content: `Authorization determines what actions users are allowed to perform within a system or network after they have been authenticated. It involves granting or denying access rights based on the user's identity and permissions.`,
				ephemeral: true
			});
			break;
	
		case /\bblockchain\s+security\b/.test(content):
			message.reply({
				content: 'Blockchain Security refers to the measures taken to protect data stored on a blockchain network. This includes cryptographic techniques, consensus mechanisms, and network architecture designed to ensure the integrity and confidentiality of transactions.',
				ephemeral: true
			});
			break;
	
		case content.includes("botnet"):
			message.reply({
				content: 'Botnet is a network of compromised computers or devices that are controlled by a single entity, typically a hacker or cybercriminal. Botnets are often used to carry out malicious activities such as distributed denial-of-service (DDoS) attacks or spam campaigns.',
				ephemeral: true
			});
			break;
	
		case /\bbrute\s+force\s+attack\b/.test(content):
			message.reply({
				content: 'Brute Force Attack is a trial-and-error method used by attackers to gain access to a system or encrypted data. It involves systematically trying all possible combinations of passwords or encryption keys until the correct one is found.',
				ephemeral: true
			});
			break;

		case /\bcloud\s+security\b/.test(content):
			message.reply({
				content: `
	Cloud Security is the use of set policies, controls, and technologies to protect data, applications, and infrastructure of cloud services. All of these components work with each other in order to keep the data secure and these measures help protect cloud environments against internal and external risk.
	Policies: Cloud Security Policies are the foundational rules that control how data, applications and infrastructure should be protected. These policies are based on regulatory requirements, industry standards, and specific organizational needs.
	Controls: Security controls are the safeguards implemented to enforce policies and decrease risk. The controls can include encryption protocols, firewalls, vulnerability management tools, and more. 
	Technologies: Technologies within the cloud refer to specialized tools and solutions. One of the most popular tools is the Identity and Access Management (IAM) systems. These systems manage user permissions for data protection. Another is Cloud Access Security Brokers (CASBs), which provide visibility and control over data in the cloud.
	Infrastructure Security: Cloud Infrastructure meaning Virtualization, containers, and serverless resources must be protected against malware and unauthorized access. This involves creating and managing security groups which is needed.`,
				ephemeral: true
			});
			break;
	
		case content.includes("cryptography"):
			message.reply({
				content: 'Cryptography is the practice of securing communication and data by converting plain text into unreadable ciphertext using algorithms and encryption techniques. It plays a crucial role in ensuring confidentiality, integrity, and authentication in cybersecurity.',
				ephemeral: true
			});
			break;
	
		case /\bcyber\s+espionage\b/.test(content):
			message.reply({
				content: 'Cyber Espionage involves the unauthorized acquisition of sensitive information from individuals, organizations, or governments through cyber attacks. It often targets intellectual property, trade secrets, or classified data for political, economic, or military gain.',
				ephemeral: true
			});
			break;
	
		case /\bdata\s+breach\b/.test(content):
			message.reply({
				content: 'Data Breach occurs when sensitive, protected, or confidential information is accessed or disclosed without authorization. It could be due to cybercriminals hacking into a system, exploiting vulnerabilities, or through human error.',
				ephemeral: true
			});
			break;
	
		case /\bdata\s+encryption\b/.test(content):
			message.reply({
				content: `Data Encryption is the process of converting plain text or data into ciphertext, making it unreadable to anyone who doesn't have the decryption key. It's a crucial technique for protecting sensitive information during transmission or while stored.`,
				ephemeral: true
			});
			break;
	
		case /\bdenial\s+of\s+service\b/.test(content) || content.includes("dos"):
			message.reply({
				content: 'Denial of Service (DoS) is an attack where the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services. This is typically done by overwhelming the target with a flood of traffic or requests.',
				ephemeral: true
			});
			break;
	
		case /\bdistributed\s+denial\s+of\s+service\b/.test(content) || content.includes("ddos"):
			message.reply({
				content: `Distributed Denial of Service (DDoS) is similar to DoS, but the attack comes from multiple sources, often coordinated by a botnet, making it more difficult to mitigate. The aim is still to overwhelm the target's resources, rendering them inaccessible.`,
				ephemeral: true
			});
			break;
	
			case /\bendpoint\s+security\b/.test(content): // Updated to match standard research
            message.reply({
                content: 'Endpoint Security refers to the approach of protecting computer networks that are remotely bridged to client devices, such as laptops, smartphones, and tablets. Endpoint security aims to secure every endpoint connecting to the network from potential threats.',
                ephemeral: true
            });
            break;

        case content.includes("exploit"): // Updated to match standard research
            message.reply({
                content: 'An exploit is a piece of software, a chunk of data, or a sequence of commands that take advantage of a bug, glitch, or vulnerability to cause unintended behavior or gain unauthorized access to computer systems.',
                ephemeral: true
            });
            break;

        case content.includes("firewall"): // Updated to match standard research
            message.reply({
                content: 'A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, such as the internet.',
                ephemeral: true
            });
            break;

        case content.includes("honeypot"): // Updated to match standard research
            message.reply({
                content: 'A honeypot is a decoy system designed to attract and monitor unauthorized access attempts and attacks. It serves as a trap to gather information about the tactics, techniques, and procedures used by attackers.',
                ephemeral: true
            });
            break;

        case /\bidentity\s+theft\b/.test(content): // Updated to match standard research
            message.reply({
                content: 'Identity Theft involves the unauthorized use of someone else\'s personal information to commit fraud or other crimes. Cybercriminals may steal personal information such as Social Security numbers, credit card numbers, or login credentials to impersonate the victim.',
                ephemeral: true
            });
            break;

        case /\bintrusion\s+detection\s+system\b/.test(content) || content.includes("ids"): // Updated to match standard research
            message.reply({
                content: 'Intrusion Detection System (IDS) is a security tool that monitors network or system activities for malicious activities or policy violations. It detects and alerts administrators to potential security threats.',
                ephemeral: true
            });
            break;

        case /\bintrusion\s+prevention\s+system\b/.test(content) || content.includes("ips"): // Updated to match standard research
            message.reply({
                content: 'Intrusion Prevention System (IPS) is a security tool that monitors network or system activities and has the capability to take actions to block or prevent detected threats. It goes beyond detection to actively block potential threats in real-time.',
                ephemeral: true
            });
            break;

		case content.includes("keylogger"): // Updated to match standard research
        	message.reply({
        	    content: 'A keylogger is a type of surveillance software or hardware that records every keystroke typed on a computer\'s keyboard. It can capture sensitive information such as passwords, credit card numbers, and other confidential data, which can then be used for malicious purposes.',
        	    ephemeral: true
        	});
        	break;

        case content.includes("malware"): // Updated to match standard research
            message.reply({
                content: 'Malware, short for malicious software, is any software intentionally designed to cause damage to a computer, server, client, or computer network. Malware includes viruses, worms, trojan horses, ransomware, spyware, adware, and other malicious programs.',
                ephemeral: true
            });
            break;

        case /\bman\s+in\s+the\s+middle\b/.test(content) || content.includes("mitm"): // Updated to match standard research
            message.reply({
                content: 'Man-in-the-Middle Attack: In a man-in-the-middle attack, an attacker intercepts communication between two parties without their knowledge. The attacker can eavesdrop on or alter the communication, leading to data theft, impersonation, or other security breaches.',
                ephemeral: true
            });
            break;

        case /\bmulti\s+factor\s+authentication\b/.test(content) || content.includes("mfa"): // Updated to match standard research
            message.reply({
                content: 'Multi-Factor Authentication (MFA) is a security process that requires more than one method of authentication from independent categories of credentials to verify the user\'s identity. Typically, it involves something the user knows (like a password), something the user has (like a smartphone), and something the user is (like a fingerprint).',
                ephemeral: true
            });
            break;

        case /\bnetwork\s+security\b/.test(content): // Updated to match standard research
            message.reply({
                content: 'Network Security refers to the policies, procedures, and measures implemented to protect a computer network from unauthorized access, misuse, modification, or denial of the network\'s availability, integrity, and confidentiality.',
                ephemeral: true
            });
            break;

        case content.includes("phishing"): // Updated to match standard research
            message.reply({
                content: 'Phishing is a cyber attack method where attackers impersonate legitimate entities to deceive individuals into revealing sensitive information, such as passwords, credit card numbers, or other personal data. Phishing attacks are commonly carried out via email, social media, or instant messaging.',
                ephemeral: true
            });
            break;

        case /\bpublic\s+key\s+infrastructure\b/.test(content) || content.includes("pki"): // Updated to match standard research
            message.reply({
                content: 'Public Key Infrastructure (PKI) is a set of hardware, software, policies, and standards used to create, manage, distribute, use, store, and revoke digital certificates and public-private key pairs. PKI is crucial for secure communication, digital signatures, and encryption on the internet.',
                ephemeral: true
            });
            break;

		case content.includes("ransomware"):
			message.reply({
				content: `Ransomware is malware that encrypts a victim's files or locks their system, demanding a ransom payment in cryptocurrency to restore access.`,
				ephemeral: true
			});
			break;
		case content.includes("rootkit"):
			message.reply({
				content: `A Rootkit is malicious software designed to gain unauthorized access to a system while hiding its presence from users and security tools.`,
				ephemeral: true
			});
			break;
		case content.match(/\bsecure\s+socket\s+layer\b/) || message.content.toLowerCase().includes("ssl"):
			message.reply({
				content: 'Secure Socket Layer (SSL) was the predecessor to TLS for securing internet communications, providing encryption and authentication between a client and server.',
				ephemeral: true
			});
			break;
		case content.match(/\btransport\s+layer\s+security\b/) || message.content.toLowerCase().includes("tls"):
			message.reply({
				content: 'Transport Layer Security (TLS) is the successor to SSL and is the current industry standard for secure internet communications.',
				ephemeral: true
			});
			break;
		case content.match(/\bsecurity\s+information\s+event\s+management\b/) || message.content.toLowerCase().includes("siem"):
			message.reply({
				content: 'Security Information and Event Management (SIEM) provides real-time analysis of security alerts generated by network hardware and applications.',
				ephemeral: true
			});
			break;
		case content.match(/\bsocial\s+engineering\b/):
			message.reply({
				content: 'Social Engineering involves manipulating individuals into divulging confidential information or performing actions that compromise security.',
				ephemeral: true
			});
			break;
		case content.match(/\bsoftware\s+vulnerability\b/):
			message.reply({
				content: 'A Software Vulnerability is a flaw or weakness in software that can be exploited to compromise a system\'s security.',
				ephemeral: true
			});
			break;
		case /\bspear\s+phishing\b/.test(content):
			message.reply({
				content: 'Spear Phishing is a targeted form of phishing where attackers tailor their messages to specific individuals or organizations. This increases the likelihood of success by making the messages appear more legitimate.',
				ephemeral: true
			});
			break;
	
		case content.includes("spyware"):
			message.reply({
				content: 'Spyware is malicious software designed to secretly gather information from a computer or network. This information can include keystrokes, passwords, browsing history, and more, which is then sent to the attacker.',
				ephemeral: true
			});
			break;
	
		case /\bsql\s+injection\b/.test(content):
			message.reply({
				content: 'SQL Injection is a type of attack where an attacker injects malicious SQL code into input fields of a web application. If successful, this can allow the attacker to manipulate the application\'s database and potentially access or modify sensitive information.',
				ephemeral: true
			});
			break;
	
		case /\btrojan\s+horse\b/.test(content):
			message.reply({
				content: 'A Trojan Horse is a type of malware that disguises itself as legitimate software but performs malicious actions once installed on a system. Unlike viruses or worms, Trojans do not replicate themselves.',
				ephemeral: true
			});
			break;
	
		case /\bvirtual\s+private\s+network\b/.test(content) || content.includes("vpn"):
			message.reply({
				content: 'A Virtual Private Network (VPN) is a technology that creates a secure, encrypted connection over a less secure network, such as the internet. VPNs are commonly used to protect sensitive data while browsing the internet or accessing corporate networks remotely.',
				ephemeral: true
			});
			break;
	
		case content.includes("virus"):
			message.reply({
				content: 'A virus is a type of malicious software that attaches itself to legitimate programs or files and spreads from one computer to another when those files are executed. Viruses can cause a variety of harmful effects, from data loss to system crashes.',
				ephemeral: true
			});
			break;
	
		case /\bweb\s+security\b/.test(content):
			message.reply({
				content: 'Web Security refers to the protection of websites, web applications, and web services from cyber threats. This includes measures such as encryption, authentication, access control, and vulnerability management.',
				ephemeral: true
			});
			break;
	
		case content.includes("worm"):
			message.reply({
				content: 'A worm, similar to a virus, is a self-replicating type of malware that spreads across networks and systems, typically exploiting security vulnerabilities. Unlike viruses, worms do not need to attach themselves to existing files to spread.',
				ephemeral: true
			});
			break;
	
		case /\bzero\s+day\s+exploit\b/.test(content):
			message.reply({
				content: 'A Zero Day Exploit is an exploit that takes advantage of a software vulnerability that is unknown to the software vendor or has not yet been patched. Since there is no defense against these exploits at the time of discovery, they pose a significant threat to security.',
				ephemeral: true
			});
			break;
	
		case /\bzero\s+trust\s+security\s+model\b/.test(content) || content.includes("ztsm"):
			message.reply({
				content: 'The Zero Trust Security Model (ZTSM) is based on the principle of "never trust, always verify." Access to resources is restricted and continuously verified, regardless of whether the access request is originating from inside or outside the network perimeter. This helps prevent lateral movement by attackers and minimizes the potential damage of a security breach.',
				ephemeral: true
			});
			break;
        // Add more cases as needed
        default:
            break;
    }
});


// This is the switch case, but using if else statement, the switch statement is not ephemeral, doesn't work...These are ephemeral
/*
client.on('messageCreate', message => {

	console.log(message.content);

	if (message.author == process.env.BOTUSERID){return null;} // if it's the bot, ignore the message
	else {
		// after done defining all of these, include at the end of their content: 'and if you'd like to learn more, type the command "/learnX" '
	    // this works.  Should probably take all of these if else statements aside from the one checking author and put it into a switch case thingy.



		if (message.content.toLowerCase().includes("ctf") || /\b(?:capture the flag)\b/.test(message.content)) {
			message.reply({
				content: 'Capture the Flag (CTF) are exercises/competitions in which participants, either individually or as part of a team, are challenged to find and exploit vulnerabilities in a system to capture a "flag" or piece of information.  Flags are text strings, which are secretly hidden in purposefully-vulnerable programs or websites.', 
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("cybersecurity")){
			message.reply({
				content: 'Cybersecurity is the practice of protecting systems, networks, devices, data, programs, etc. from digital attacks.  These cyberattacks tend to attempt to gather sensitive information and then extort money from users using ransomware, or just delete everything to damage businesses as much as they possibly can.',
				ephemeral: true
			});
		}
	
		if (/\baccess\s+control\b/i.test(message.content)) {
			message.reply({
				content: 'Access control is a security technique that manages who can and cannot view or utilize certain virtual resources within a computing environment.   In access control systems, users must present credentials before they can be granted access. There are two types of access control: physical and logical. Physical access control limits access to campuses, buildings, rooms and physical IT assets. Logical access control limits connections to computer networks, system files and data.',
				ephemeral: true
			});
		}
	
		if (/advanced\spersistent\sthreat\b/.test(message.content.toLowerCase()) || message.content.toLowerCase().includes("APT")) {
			// NOT to my standards of research
			message.reply({
				content: 'Advanced Persistent Threat (APT) refers to a sophisticated and continuous cyber attack where an unauthorized user gains access to a network and remains undetected for an extended period. APT attacks often target high-value information or systems.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bantivirus\s+software\b/)) {	
			// NOT to my standards of research
			message.reply({
				content: 'Antivirus Software is a program designed to detect, prevent, and remove malicious software (malware) from a computer or network. It works by scanning files and monitoring system activity for suspicious behavior.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bapplication\s+security\b/)) {
			// NOT to my standards of research
			message.reply({
				content: 'Application Security  involves measures taken to protect software applications from threats and vulnerabilities. This includes securing code, implementing access controls, and conducting regular security testing to identify and mitigate risks.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\battack\s+vector\b/)) {
			// NOT to my standards of research
			message.reply({
				content: 'Attack Vector is the method or pathway through which a cyber attack is carried out. It could be through vulnerabilities in software, social engineering, phishing emails, or other means.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Authentication")){ // NOT to my standards of research
			message.reply({
				content: 'Authentication is the process of verifying the identity of a user or system. This typically involves presenting credentials, such as passwords, biometrics, or security tokens, to confirm identity and grant access to resources.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Authorization")){ // NOT to my standards of research
			message.reply({
				content: `Authorization determines what actions users are allowed to perform within a system or network after they have been authenticated. It involves granting or denying access rights based on the user's identity and permissions.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bblockchain\s+security\b/)) {
			// NOT to my standards of research
			message.reply({
				content: 'Blockchain Security refers to the measures taken to protect data stored on a blockchain network. This includes cryptographic techniques, consensus mechanisms, and network architecture designed to ensure the integrity and confidentiality of transactions.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Botnet")){ // NOT to my standards of research
			message.reply({
				content: 'Botnet is a network of compromised computers or devices that are controlled by a single entity, typically a hacker or cybercriminal. Botnets are often used to carry out malicious activities such as distributed denial-of-service (DDoS) attacks or spam campaigns.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bbrute\s+force\s+attack\b/)) {
			// NOT to my standards of research
			message.reply({
				content: 'Brute Force Attack is a trial-and-error method used by attackers to gain access to a system or encrypted data. It involves systematically trying all possible combinations of passwords or encryption keys until the correct one is found.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("\bCloud\sSecurity\b")){
			message.reply({
				content: `
	Cloud Security is the use of set policies, controls, and technologies to protect data, applications, and infrastructure of cloud services. All of these components work with each other in order to keep the data secure and these measures help protect cloud environments against internal and external risk.
		Policies: Cloud Security Policies are the foundational rules that control how data, applications and infrastructure should be protected. These policies are based on regulatory requirements ,industry standard, and specific organizational needs.
		Controls:Security controls are the safeguards implemented to enforce policies and decrease risk. The controls can include encryption protocols, firewalls, vulnerability management tools, and more. 
		Technologies:Technologies within the cloud refers to specialized tools and solutions. One of the most popular tools is the Identity and access management (IAM) systems. These systems manage user permissions for data protection. Another is Cloud Access Security Brokers (CASBs), which provide visibility and control over data in the cloud.
		Infrastructure Security:Cloud Infrastructure meaning Virtualization, containers, and serverless resources must be protected against malware and unauthorized access. This involves creating and managing security groups which is needed.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Cryptography")){ // NOT to my standards of research
			message.reply({
				content: 'Cryptography is the practice of securing communication and data by converting plain text into unreadable ciphertext using algorithms and encryption techniques. It plays a crucial role in ensuring confidentiality, integrity, and authentication in cybersecurity.',
				ephemeral: true
			});
		}
		
		if (message.content.toLowerCase().match(/\bcyber\s+espionage\b/)) {
		 // NOT to my standards of research
			message.reply({
				content: 'Cyber Espionage involves the unauthorized acquisition of sensitive information from individuals, organizations, or governments through cyber attacks. It often targets intellectual property, trade secrets, or classified data for political, economic, or military gain.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bdata\s+breach\b/)) {
		 // NOT to my standards of research
			message.reply({
				content: 'Data Breach occurs when sensitive, protected, or confidential information is accessed or disclosed without authorization. It could be due to cybercriminals hacking into a system, exploiting vulnerabilities, or through human error.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bdata\s+encryption\b/)) { // NOT to my standards of research
			message.reply({
				content: `Data Encryption the process of converting plain text or data into ciphertext, making it unreadable to anyone who doesn't have the decryption key. It's a crucial technique for protecting sensitive information during transmission or while stored.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bDenial\s+of\s+Service\b/) || message.content.toLowerCase().includes("DoS")) {
		 // NOT to my standards of research
			message.reply({
				content: 'Denial of Service (DoS) is an attack where the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services. This is typically done by overwhelming the target with a flood of traffic or requests.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bDistributed\s+Denial\s+of\s+Service\b/) || message.content.toLowerCase().includes("DDoS")) {
		 // NOT to my standards of research
			message.reply({
				content: `Distributed Denial of Service (DDoS) Similar to DoS, but the attack comes from multiple sources, often coordinated by a botnet, making it more difficult to mitigate. The aim is still to overwhelm the target's resources, rendering them inaccessible.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bEndpoint\s+Security\b/)) { // NOT to my standards of research
			message.reply({
				content: 'Endpoint Security refers to the approach of protecting computer networks that are remotely bridged to client devices, such as laptops, smartphones, and tablets. Endpoint security aims to secure every endpoint connecting to the network from potential threats.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Exploit")){ // NOT to my standards of research
			message.reply({
				content: 'Exploit a piece of software, a chunk of data, or a sequence of commands that take advantage of a bug, glitch, or vulnerability in order to cause unintended behavior or to gain unauthorized access to computer systems.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Firewall")){ // NOT to my standards of research
			message.reply({
				content: 'Firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, such as the internet.',
				ephemeral: true
			});
		}
	
			
		if (message.content.toLowerCase().includes("Honeypot")){ // NOT to my standards of research
			message.reply({
				content: 'Honeypot a decoy system designed to attract and monitor unauthorized access attempts and attacks. It serves as a trap to gather information about the tactics, techniques, and procedures used by attackers.',
				ephemeral: true
			});
		}
		
		if (message.content.toLowerCase().match(/\bIdentity\s+Theft\b/)) { // NOT to my standards of research
			message.reply({
				content: `Identity Theft involves the unauthorized use of someone else's personal information to commit fraud or other crimes. Cybercriminals may steal personal information such as Social Security numbers, credit card numbers, or login credentials to impersonate the victim.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bIntrusion\s+Detection\s+System\b/) || message.content.toLowerCase().includes("IDS")) { 
			// NOT to my standards of research
			message.reply({
				content: 'Intrusion Detection System (IDS) a security tool that monitors network or system activities for malicious activities or policy violations. It detects and alerts administrators to potential security threats.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bIntrusion\s+Prevention\s+System\b/) || message.content.toLowerCase().includes("IPS")) { 
			// NOT to my standards of research
			message.reply({
				content: 'Intrusion Prevention System (IPS) a security tool that monitors network or system activities and has the capability to take actions to block or prevent detected threats. It goes beyond detection to actively block potential threats in real-time.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Keylogger")){ // NOT to my standards of research
			message.reply({
				content: `Keylogger a type of surveillance software or hardware that records every keystroke typed on a computer's keyboard. It can capture sensitive information such as passwords, credit card numbers, and other confidential data, which can then be used for malicious purposes.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Malware")){ // NOT to my standards of research
			message.reply({
				content: 'Malware, short for malicious software, malware is any software intentionally designed to cause damage to a computer, server, client, or computer network. Malware includes viruses, worms, trojan horses, ransomware, spyware, adware, and other malicious programs.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bMan\s+in\s+the\s+Middle\b/) || message.content.toLowerCase().includes("MitM")) { 
			// NOT to my standards of research
			message.reply({
				content: 'Man-in-the-Middle Attack In a man-in-the-middle attack, an attacker intercepts communication between two parties without their knowledge. The attacker can eavesdrop on or alter the communication between the two parties. This can lead to data theft, impersonation, or other security breaches.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bMulti\s+Factor\s+Authentication\b/) || message.content.toLowerCase().includes("MFA")){ // NOT to my standards of research
			message.reply({
				content: `Multi-Factor Authentication (MFA) a security process that requires more than one method of authentication from independent categories of credentials to verify the user's identity. Typically, it involves something the user knows (like a password), something the user has (like a smartphone), and something the user is (like a fingerprint).`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bNetwork\s+Security\b/)) {  // NOT to my standards of research
			message.reply({
				content: `Network Security refers to the policies, procedures, and measures implemented to protect a computer network from unauthorized access, misuse, modification, or denial of the network's availability, integrity, and confidentiality.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Phishing")){ // NOT to my standards of research
			message.reply({
				content: 'Phishing a cyber attack method where attackers impersonate legitimate entities to deceive individuals into revealing sensitive information, such as passwords, credit card numbers, or other personal data. Phishing attacks are commonly carried out via email, social media, or instant messaging.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bPublic\s+Key\s+Infrastructure\b/) || message.content.toLowerCase().includes("PKI")){ // NOT to my standards of research
			message.reply({
				content: 'Public Key Infrastructure (PKI) is a set of hardware, software, policies, and standards used to create, manage, distribute, use, store, and revoke digital certificates and public-private key pairs. PKI is crucial for secure communication, digital signatures, and encryption on the internet.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Ransomware")){ // NOT to my standards of research
			message.reply({
				content: `Ransomware is a type of malware that encrypts a victim's files or locks their system and demands a ransom payment, usually in cryptocurrency, in exchange for restoring access to the files or system. Ransomware attacks can have severe financial and operational consequences for individuals and organizations.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Rootkit")){ // NOT to my standards of research
			message.reply({
				content: `Rootkit is a type of malicious software designed to gain unauthorized access to a computer system while hiding its presence from the system's users and security tools. Rootkits often exploit vulnerabilities to gain privileged access to a system and can be used to remotely control the compromised system.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bSecure\s+Socket\s+Layer\b/) || message.content.toLowerCase().includes("SSL")){ // NOT to my standards of research
			message.reply({
				content: 'Secure Socket Layer (SSL) was the predecessor to TLS and was widely used for securing internet communications. It provided encryption and authentication between a client and a server, ensuring that data transmitted between them remained confidential and secure. However, due to vulnerabilities in SSL, it has largely been deprecated in favor of newer, more secure protocols like TLS.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bTransport\s+Layer\s+Security\b/) || message.content.toLowerCase().includes("TLS")){ // NOT to my standards of research
			message.reply({
				content: 'Transport Layer Security (TLS) is the successor to SSL and is the current industry standard for secure communication over the internet. Like SSL, TLS provides encryption and authentication between a client and a server, but it has undergone several iterations to address vulnerabilities and improve security. TLS is used to secure various internet protocols, including HTTPS for secure web browsing, SMTP for secure email communication, and FTPS for secure file transfer.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bSecurity\s+Information\s+Event\s+Management\b/) || message.content.toLowerCase().includes("SIEM")){ // NOT to my standards of research
			message.reply({
				content: 'Security Information and Event Management (SIEM) is a technology solution that provides real-time analysis of security alerts generated by network hardware and applications. SIEM systems collect and aggregate security data from various sources, analyze it for signs of security threats, and generate alerts or reports for security personnel to investigate and respond to.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bSocial\s+Engineering\b/)){ // NOT to my standards of research
			message.reply({
				content: 'Social Engineering refers to the manipulation of individuals to divulge confidential information or perform actions that may compromise security. It often involves psychological manipulation rather than technical exploits.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bSoftware\s+Vulnerability\b/)){ // NOT to my standards of research
			message.reply({
				content: 'Software Vulnerability is a flaw or weakness in software that can be exploited by attackers to compromise the security of a system. Vulnerabilities can range from coding errors to design flaws.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bSpear\s+Phishing\b/)){ // NOT to my standards of research
			message.reply({
				content: 'Spear Phishing is a targeted form of phishing where attackers tailor their messages to specific individuals or organizations. This increases the likelihood of success by making the messages appear more legitimate.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Spyware")){ // NOT to my standards of research
			message.reply({
				content: 'Spyware Malicious software designed to secretly gather information from a computer or network. This information can include keystrokes, passwords, browsing history, and more, which is then sent to the attacker.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bSQL\s+Injection\b/)){ // NOT to my standards of research
			message.reply({
				content: `SQL Injection is a type of attack where an attacker injects malicious SQL code into input fields of a web application. If successful, this can allow the attacker to manipulate the application's database and potentially access or modify sensitive information.`,
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bTrojan\s+Horse\b/)){ // NOT to my standards of research
			message.reply({
				content: 'Trojan Horse is a type of malware that disguises itself as legitimate software but actually performs malicious actions once installed on a system. Unlike viruses or worms, Trojans do not replicate themselves.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bVirtual\s+Private\s+Network\b/) || message.content.toLowerCase().includes("VPN")){ // NOT to my standards of research
			message.reply({
				content: 'Virtual Private Network (VPN) is a technology that creates a secure, encrypted connection over a less secure network, such as the internet. VPNs are commonly used to protect sensitive data while browsing the internet or accessing corporate networks remotely.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Virus")){ // NOT to my standards of research
			message.reply({
				content: 'Virus is a type of malicious software that attaches itself to legitimate programs or files and spreads from one computer to another when those files are executed. Viruses can cause a variety of harmful effects, from data loss to system crashes.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bWeb\s+Security\b/)){ // NOT to my standards of research
			message.reply({
				content: 'Web Security is the protection of websites, web applications, and web services from cyber threats. This includes measures such as encryption, authentication, access control, and vulnerability management.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().includes("Worm")){ // NOT to my standards of research
			message.reply({
				content: 'Worm, similar to a virus, is a self-replicating type of malware that spreads across networks and systems, typically exploiting security vulnerabilities. Unlike viruses, worms do not need to attach themselves to existing files to spread.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bZero\s+Day\s+Exploit\b/)){ // NOT to my standards of research
			message.reply({
				content: 'Zero Day Exploit is an exploit that takes advantage of a software vulnerability that is unknown to the software vendor or has not yet been patched. Since there is no defense against these exploits at the time of discovery, they pose a significant threat to security.',
				ephemeral: true
			});
		}
	
		if (message.content.toLowerCase().match(/\bZero\s+Trust\s+Security\s+Model\b/) || message.content.toLowerCase().includes("ZTSM")){
			message.reply({
				content: 'Zero Trust Security Model (ZTSM) is a security model based on the principle of "never trust, always verify." Under this model, access to resources is restricted and continuously verified, regardless of whether the access request is originating from inside or outside the network perimeter. This helps prevent lateral movement by attackers and minimizes the potential damage of a security breach..',
				ephemeral: true
			});
		}
}});
*/









// Tip + News here: (multiple channels needed)
const channelIntro = process.env.CHANNEL_INTRO; // channel for intro
const channelTipTime = process.env.CHANNEL_TIP; // channel for daily tip
const channelNews = process.env.CHANNEL_NEWS; // channel for news



client.on('ready', () => {
    const channel = client.channels.cache.get(channelIntro);
    if (channel) {
			channel.send(`Hello, I'm Cyber Assistant, I'm your friendly bot who'll help you learn about cybersecurity through countless commands you can run (run "/help" to see more) and through automated processes.  Some things I have is: I fetch a bunch of news on CyberSecurity and return it everyday, I have questions you can answer to practice your knowledge/interview prep, and I can read your messages and reply to it if it has a keyword so I can tell you about the topic!  So if you don't know what ctf is for example, and you see people talking about it, just write ctf in the chat and it'll explain it for you privately!  You can then run /learnX (replace X with the topic of your choice) and you can gain access to a bunch of resources on what it is, how to prevent it, and finally, some real world examples of it!  If you have any concerns, critiques, or have questions, please contact Stathi, my developer.  You can find his contacts on efstathiosplakas.com  Thanks for reading!`); // have the bot when entering the server/getting turned on say "Hello, I'm Cyber Assistant, blah blah blah"
    } else {
        console.log('Channel not found');
    }

	dailyTipTime();
	executeGetNews();

	setInterval(dailyTipTime, 1 * 60 * 60 * 1000)
	setInterval(executeGetNews, 1 * 60 * 60 * 1000); // Gets News once every 24 hours
});

async function dailyTipTime(){
	const channel = client.channels.cache.get(channelTipTime);

	if (!channel) {
        console.error("Channel not found.");
        return;
    }
	
	let tips = [
		"**Keep your software up-to-date**.  The reason for this is Software companies typically provide software updates for 3 reasons: to add new features, fix known bugs, and upgrade security.  Always update to the latest version of your software to protect yourself from new or existing security vulnerabilities.",
		"**Avoid opening suspicious emails**.  The reason for this is it could very well be a phishing scam. Someone might be impersonating another individual or company to gain access to your personal information. Sometimes the emails may also include attachments or links that can infect your devices.",
		"**Keep hardware up-to-date**.  The reason for this is Outdated computer hardware may not support the most recent software security upgrades. Additionally, old hardware makes it slower to respond to cyber-attacks if they happen. Make sure to use computer hardware that’s more up-to-date.",
		"**Use a secure file-sharing solution to encrypt data**.  The reason for this is if you regularly share confidential information, you absolutely need to start using a secure file-sharing solution. Regular email is not meant for exchanging sensitive documents, because if the emails are intercepted, unauthorized users will have access to your precious data.On the other hand, using a secure file-sharing solution like TitanFile will automatically encrypt sensitive files so that you don’t have to worry about a data breach. Remember, your files are only as secure as the tools you chose to share them with.",
		"**Use anti-virus and anti-malware**.  The reason for this is as long as you’re connected to the web, it’s impossible to have complete and total protection from malware. However, you can significantly reduce your vulnerability by ensuring you have an anti-virus and at least one anti-malware installed on your computers.",
		"**Use a VPN to privatize your connections**.  The reason for this is For a more secure and privatized network, use a virtual private network (VPN). It’ll encrypt your connection and protect your private information, even from your internet service provider.",
		"**Check links before you click**.  The reason for this is Links can easily be disguised as something they’re not so it’s best to double check before you click on a hyperlink. On most browsers, you can see the target URL by hovering over the link. Do this to check links before you click on them.  Alternatively, you can just manually type in the site itself even if url looks the same cuz it can still be problematic",
		"**Don’t be lazy with your passwords!**.  The reason for this is Put more effort into creating your passwords. You can use a tool like howsecureismypassword.net to find out how secure your passwords are.",
		"**Disable Bluetooth when you don’t need it**.  The reason for this is Devices can be hacked via Bluetooth and subsequently your private information can be stolen. If there’s no reason to have your Bluetooth on, turn it off!",
		"**Enable 2-Factor Authentication**.  The reason for this is many platforms now allow you to enable 2-factor authentication to keep your accounts more secure. It’s another layer of protection that helps verify that it’s actually you who is accessing your account and not someone who’s unauthorized. Enable this security feature when you can.",
		"**Remove adware from your machines**.  The reason for this is Adware collects information about you to serve you more targeted ads. It’s best to rid your computer of all forms of adware to maintain your privacy. Use AdwCleaner to clean adware and unwanted programs from your computer.",
		"**Double-check for HTTPS on websites**.  The reason for this is When you’re on a website that isn’t using HTTPS, there’s no guarantee that the transfer of information between you and the site’s server is secure. Double-check that a site’s using HTTPS before you give away personal or private information.",
		"**Don’t store important information in non-secure places**.  The reason for this is When storing information online, you want to keep it in a location that can’t be accessed by unauthorized users.",
		"**Scan external storage devices for viruses**.  The reason for this is External storage devices are just as prone to malware as internal storage devices. If you connect an infected external device to your computer, the malware can spread. Always scan external devices for malware before accessing them.",
		"**Avoid using public networks**.  The reason for this is When you connect to a public network, you’re sharing the network with everyone who is also connected. Any information you send or retrieve on the network is vulnerable. Stay away from public networks or use a VPN when you’re connected to one.",
		"**Avoid the “secure enough” mentality**.  The reason for this is Unless you’re completely isolated from the rest of the world, there’s no such thing as being “secure enough.” Big companies like Facebook invest a fortune into security every year but are still affected by cyber attacks.",
		"**Invest in security upgrades**.  The reason for this is Following the previous tip, try to invest in security upgrades when they’re available. It’s better to eat the costs of security than pay for the consequences of a security breach!",
		"**Back up important data**.  The reason for this is important data can be lost as a result of a security breach. To make sure you’re prepared to restore data once it’s lost, you should ensure your important information is backed up frequently on the cloud or a local storage device.",
		"**Train your employees**.  The reason for this is The key to making cybersecurity work is to make sure your employees well trained, in sync, and consistently exercising security practices. Sometimes, one mistake from an improperly trained employee can cause an entire security system to crumble.",
		"**Use HTTPS on your website**.  The reason for this is Having an SSL certificate installed and HTTPS enabled on your website will help encrypt all information that travels between a visitor’s browser and your web server.",
		"**Employ a “White Hat” hacker**.  The reason for this is Not all hackers are bad. Some hackers expose security risks for the sake of helping others improve their cybersecurity by keeping them aware of security flaws and patching them. These hackers are known as “white hat” hackers. It might benefit you to hire one to help you find risks you never knew you had.",
		"**Monitor and respond to threats with intrusion detection systems.**.  The reason for this is to detect and respond to any unauthorized access attempts or suspicious activities within your network promptly, minimizing the risk of data breaches or system compromises.",
		"**Secure your network with firewalls and VPNs.**.  The reason for this is to establish barriers that filter incoming and outgoing network traffic, preventing unauthorized access and protecting sensitive data from potential cyber threats, including hackers and malware.",
		"**Use Strong and Unique Passwords: Create complex passwords with a mix of uppercase and lowercase letters, numbers, and symbols. Use a unique password for each of your accounts. Consider using a reputable password manager to generate and store complex passwords.**.  The reason for this is to strengthen the security of your accounts by making them more resistant to brute-force attacks and credential stuffing, reducing the likelihood of unauthorized access to your sensitive information.",
		"**Enable Multi-Factor Authentication (MFA): Enable MFA wherever possible to add an extra layer of security. MFA requires a second form of verification, such as a code from a mobile app, in addition to your password.**.  The reason for this is to significantly enhance the security of your accounts by requiring multiple forms of verification, making it much harder for attackers to gain unauthorized access even if they obtain your password.",
		"**Keep Software and Systems Updated: Regularly update your operating system, software, antivirus, and other applications to patch known vulnerabilities. Enable automatic updates when available.**.  The reason for this is to mitigate the risk of exploitation by cybercriminals who often target known vulnerabilities in outdated software and systems, thereby reducing the likelihood of successful attacks and data breaches.",
		"**Be Cautious with Emails: Avoid clicking on links or downloading attachments from unknown or suspicious wary of phishing attempts; verify the legitimacy of emails before responding or providing sensitive information.**.  The reason for this is The reason for this is to protect against phishing attacks, malware infections, and other email-based threats that exploit human error and trust, reducing the likelihood of falling victim to cyber scams and compromises.",
		"**Use Reliable Security Software: Install reputable antivirus and anti-malware software. Keep the security software up to date and perform regular scans of your system.**.  The reason for this is to detect, prevent, and remove malicious software infections, including viruses, Trojans, and spyware, safeguarding your system and sensitive data from cyber threats.",
		"**Secure Your Wi-Fi Network: Use strong and unique passwords for your Wi-Fi network. Enable WPA3 encryption if available. Regularly update your router's firmware.**.  The reason for this is to prevent unauthorized access to your wireless network and sensitive data, maintaining the confidentiality and integrity of your communications and reducing the risk of unauthorized intrusions and data breaches.",
		"**Backup Your Data: Regularly back up important data to an external hard drive or a secure cloud the event of a ransomware attack, having backups can help you restore your data without paying a ransom.**.  The reason for this is to ensure data availability and integrity, enabling timely recovery and minimizing the impact of data loss or corruption caused by ransomware attacks, hardware failures, or other unforeseen events.",
		"**Be Mindful of Social Media: Limit the personal information you share on social media. Adjust privacy settings to control who can see your information.**.  The reason for this is to reduce the risk of identity theft, stalking, and other privacy violations by minimizing the exposure of sensitive personal information to potential attackers and unauthorized individuals.",
		"**Educate Yourself: Stay informed about the latest cyber threats and attack techniques. Participate in cybersecurity awareness training if available.**.  The reason for this is to empower yourself with knowledge and skills to recognize, prevent, and respond to cyber threats effectively, enhancing your overall cybersecurity posture and resilience against evolving risks.",
		"**Implement Network Security Measures: Use a firewall to monitor and control incoming and outgoing network traffic. Consider using a virtual private network (VPN) for added security, especially when connecting to public Wi-Fi networks.**.  The reason for this is to protect the confidentiality, integrity, and availability of your network communications and data by implementing robust security controls and encryption mechanisms, reducing the risk of eavesdropping, interception, and unauthorized access.",
		"**Regularly Monitor Financial Accounts: Keep a close eye on your bank and credit card statements for any unauthorized transactions. Consider setting up alerts for unusual activity.**.  The reason for this is to detect and respond to fraudulent or unauthorized financial transactions promptly, minimizing the financial impact and potential loss resulting from identity theft, credit card fraud, or other financial scams.",
		"**Use a VPN**.  The reason for this is to encrypt your internet connection, ensuring that your online activities are private and protected from prying eyes, such as hackers or data thieves, especially when using public Wi-Fi networks.",
		"**Secure home network**.  The reason for this is to prevent unauthorized access to your home network, reducing the risk of intrusions, data breaches, or malicious activities by securing your router with strong passwords, enabling firewalls, and regularly updating firmware.",
		"**Guard your devices**.  The reason for this is to protect your devices, such as computers, smartphones, and tablets, from malware, viruses, and other cyber threats by using antivirus software, keeping your operating systems and apps up to date, and being cautious about clicking on suspicious links or downloading unknown files.",
		"**Enforce strict access privileges**.  The reason for this is to limit access to sensitive information and resources, minimizing the potential damage from insider threats or unauthorized users by implementing strong authentication methods, such as multi-factor authentication, and carefully managing user permissions and roles.",
		"**Avoid online scams**.  The reason for this is to prevent falling victim to various online scams, such as phishing attacks, identity theft, or fraudulent schemes, by being vigilant and skeptical about unsolicited emails, messages, or offers, and by verifying the legitimacy of websites and businesses before providing personal or financial information.",
	]
	let randomTip = tips[Math.floor(Math.random() * tips.length)];
    
	try {
        await channel.send(`Cybersecurity Tip of the Day: ${randomTip}`);
        console.log("Tip sent successfully!");
    } catch (error) {
        console.error("Error sending tip:", error);
    }
}


async function executeGetNews(interaction) {
	const channel = client.channels.cache.get(channelNews);

    const url = 'https://cyber-security-news.p.rapidapi.com/news';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };

    try {
        // Fetch data from the API
        const response = await fetch(url, options);
            const result = await response.json();

            // Removes duplicates.  Need to make it account for whitespace, capitalization, etc.
            const uniqueNews = [];
            for (const newsItem of result) {
                const duplicate = uniqueNews.some(item => 
                    item.url === newsItem.url && 
                    item.source === newsItem.source
                );
                if (!duplicate) {
                    uniqueNews.push(newsItem);
                }
            }

            // Send the titles, urls, and sources of news to server in individual messages
            for (const newsItem of uniqueNews) {
                const content = `Title: ${newsItem.title}\nURL: ${newsItem.url}\nSource: ${newsItem.source}`;
                await channel.send(content);
            }
    } catch (error) {
        console.error(error);
        await interaction.reply(`Failed to fetch news. Error: ${error.message}`);
    }
}




// Tips resources:
    // https://www.google.com/search?q=cybersecurity+tips+for+professionals&client=ubuntu-sn&hs=j5j&sca_esv=d310bf87f451f94c&channel=fs&sxsrf=ACQVn08CkVm8z1BVxllqyM-JWvsvS4bDMA%3A1711672907343&ei=Sw4GZo_SFLi3ptQPwLWI6Ak&oq=cybersecurity+tips+for+pro&gs_lp=Egxnd3Mtd2l6LXNlcnAiGmN5YmVyc2VjdXJpdHkgdGlwcyBmb3IgcHJvKgIIADIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FMgUQIRifBTIFECEYnwVI6xtQ_wFY1BdwBngBkAEAmAGIAaABtAiqAQQxMS4yuAEDyAEA-AEBmAIToAKFCcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIFEAAYgATCAgoQABiABBiKBRhDwgIIEAAYFhgeGA_CAgYQABgWGB7CAggQABgWGB4YCsICCxAAGIAEGIoFGIYDwgIHECEYChigAZgDAIgGAZAGCpIHBDE3LjKgB9BX&sclient=gws-wiz-serp
	// https://www.titanfile.com/blog/cyber-security-tips-best-practices/
	// https://www.reddit.com/r/cybersecurity_help/comments/1b2uz6w/need_cybersecurity_tips_for_beginners/
	// https://www.reddit.com/r/cybersecurity/comments/14yh3ad/weekly_cyber_awareness_tips/
	// https://www.quora.com/How-do-I-stay-safe-from-the-most-common-cyber-attacks-in-2024


client.login(token);