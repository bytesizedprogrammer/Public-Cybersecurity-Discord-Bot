const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mcquestion')
		.setDescription('get a multiple choice cybersecurity question and try to answer it!'),
	async execute(interaction) {
		// Questions Here:
        let initialState = {
        qaSet: [ // question and answer set
        {
        question: "Cyber Security provides security against what?",
        answer1: "Against Malware",
        answer2: "Against cyber-terrorists",
        answer3: "Defends a device from threat.",
        answer4: "All mentioned options",
        correctAnswer: "All mentioned options"
        },
        {
        question: "Who is popularly known as the father of cyber security?",
        answer1: "Robert Kerckhoffs",
        answer2: "August Kerckhoffs",
        answer3: "Bob Thomas",
        answer4: "Charles Thomas",
        correctAnswer: "August Kerckhoffs"
        },
        {
        question: "Which of the below is a kind of cyber security?",
        answer1: "Cloud Security",
        answer2: "Application Security",
        answer3: "Cloud Security",
        answer4: "All options mentioned above",
        correctAnswer: "All options mentioned above"
        },
        {
        question: "Which of the below does not constitute a cybercrime?",
        answer1: "refusal of service",
        answer2: "Man in the middle",
        answer3: "Phishing",
        answer4: "AES",
        correctAnswer: "AES"
        },
        {
        question: "Which of the below benefits of cyber security is not true?",
        answer1: "System getting slower",
        answer2: "Computer lagging and crashes",
        answer3: "Provide privacy to users",
        answer4: "Secures system against viruses",
        correctAnswer: "System getting slower"
        },
        {
        question: "Who coined the term “Cyberspace”?",
        answer1: "William Gibson",
        answer2: "Andrew Tannenbaum",
        answer3: "Scott Fahlman",
        answer4: "Richard Stallman",
        correctAnswer: "William Gibson"
        },
        {
        question: "Which of the below is a hacking technique in which cybercriminals create fictitious web pages or domains to deceive or obtain more traffic?",
        answer1: "Pharming",
        answer2: "Mimicking",
        answer3: "Spamming",
        answer4: "Website-Duplication",
        correctAnswer: "Pharming"
        },
        {
        question: "Which of the below is a popular victim of cyber attackers looking to gain the IP address of a target or victim user?",
        answer1: "Emails",
        answer2: "Websites",
        answer3: "IP Tracer",
        answer4: "Web Pages",
        correctAnswer: "Websites"
        },
        {
        question: "Which of the below does not qualify as a form of peer-to-peer cybercrime?",
        answer1: "Trojans are implanted into a targeted device.",
        answer2: "On the deep web, payment information is leaked.",
        answer3: "mm",
        answer4: "Phishing",
        correctAnswer: "On the deep web, payment information is leaked."
        },
        {
        question: "An act to injure, corrupt, or threaten a system or network is characterised as which of the below?",
        answer1: "Digital Crime",
        answer2: "Threats",
        answer3: "System Hijacking",
        answer4: "Cyber Attack",
        correctAnswer: "Cyber Attack"
        },
        {
        question: "Any company or agency’s IT protection is managed and maintained by?",
        answer1: "Software Security Specialist",
        answer2: "CEO of the organisation",
        answer3: "Security Auditor",
        answer4: "IT Security Engineer",
        correctAnswer: "IT Security Engineer"
        },
        {
        question: "Which of the below is an internet fraud in which a consumer is digitally persuaded to reveal personal data by cybercriminals?",
        answer1: "Man in The Middle attack",
        answer2: "Phishing attack",
        answer3: "Website attack",
        answer4: "Denial of Service attack",
        correctAnswer: "Man in The Middle attack"
        },
        {
        question: "Which of the below security encryption standards is the weakest?",
        answer1: "Wi-Fi Protected Access 3",
        answer2: "Wi-Fi Protected Access 2",
        answer3: "Wi-Fi Protected Access",
        answer4: "Wired Equivalent Privacy",
        correctAnswer: "Wired Equivalent Privacy"
        },
        {
        question: "Which of the below measures can help reduce the risk of data leakage?",
        answer1: "Steganography",
        answer2: "Chorography",
        answer3: "Cryptography",
        answer4: "Authentication",
        correctAnswer: "Steganography"
        },
        {
        question: "This is the concept for guiding information security policy within a corporation, firm, or organisation. What exactly is “this” in this context?",
        answer1: "Confidentiality",
        answer2: "Non-repudiation",
        answer3: "CIA Triad",
        answer4: "Authenticity",
        correctAnswer: "CIA Triad"
        },
        {
        question: "___________ means the security of data from tampering by unidentified users.",
        answer1: "Confidentiality",
        answer2: "Integrity",
        answer3: "Authentication",
        answer4: "Non-repudiation",
        correctAnswer: "Integrity"
        },
        {
        question: "Which of the below implemented is not a good means of safeguarding privacy?",
        answer1: "Biometric verification",
        answer2: "ID and password-based verification",
        answer3: "2-factor authentication",
        answer4: "Switching off the phone",
        correctAnswer: "Switching off the phone"
        },
        {
        question: "When ____ and ____ are in charge of data, the integrity of the data is imperilled?",
        answer1: "Access control, file deletion",
        answer2: "Network, file permission",
        answer3: "Access control, file permission",
        answer4: "Network, system",
        correctAnswer: "Access control, file permission"
        },
        {
        question: "The authenticity and security of data travelling over a network are ensured by?",
        answer1: "Firewall",
        answer2: "Antivirus",
        answer3: "Pentesting Tools",
        answer4: "Network-security protocols",
        correctAnswer: "Network-security protocols"
        },
        {
        question: "_________ creates an isolated passage across a public network that enables computing devices to communicate and receive data discreetly as though they were directly linked to the private network.",
        answer1: "Visual Private Network",
        answer2: "Virtual Protocol Network",
        answer3: "Virtual Protocol Networking",
        answer4: "Virtual Private Network",
        correctAnswer: "Virtual Private Network"
        },
        {
        question: "___________ is one of the safest Linux operating systems, offering invisibility and an incognito mode to protect user data.",
        answer1: "Fedora",
        answer2: "Tails",
        answer3: "Ubuntu",
        answer4: "OpenSUSE",
        correctAnswer: "Tails"
        },
        {
        question: "What is a single entrance for multiple connectivities called?",
        answer1: "Web services",
        answer2: "Phishing",
        answer3: "Directory Service",
        answer4: "Worms",
        correctAnswer: "Directory Service"
        },
        {
        question: "Circuit-level gateway firewalls have which of the below disadvantages?",
        answer1: "They’re expensive",
        answer2: "They’re complex in architecture",
        answer3: "They do not filter individual packets",
        answer4: "They’re complex to setup",
        correctAnswer: "They do not filter individual packets"
        },
        {
        question: "The initial phase of ethical hacking is?",
        answer1: "DNS poisoning",
        answer2: "Footprinting",
        answer3: "ARP-poisoning",
        answer4: "Enumeration",
        correctAnswer: "Footprinting"
        },
        {
        question: "Which of the below can be classified as a type of computer threat?",
        answer1: "Denial of Service Attack",
        answer2: "Phishing",
        answer3: "Soliciting",
        answer4: "Both A and C",
        correctAnswer: "Denial of Service Attack"
        },
        {
        question: "In system hacking, which of the below is the most crucial activity?",
        answer1: "Information gathering",
        answer2: "Covering tracks",
        answer3: "Cracking passwords",
        answer4: "None of the above",
        correctAnswer: "Cracking passwords"
        },
        {
        question: "When the number of users surpasses the network’s capacity, which of the below network factors suffers the most?",
        answer1: "Reliability",
        answer2: "Performance",
        answer3: "Security",
        answer4: "Longevity",
        correctAnswer: "Longevity"
        },
        {
        question: "Which of the below cyber security principles states that the security system should be as compact and straightforward as possible?",
        answer1: "Open-design",
        answer2: "The economy of the Mechanism",
        answer3: "Least privilege",
        answer4: "Fail-safe Defaults",
        correctAnswer: "The economy of the Mechanism"
        },
        {
        question: "Which of the below malware types permits the hackers to access administrative controls and do nearly everything he wants with the infected systems?",
        answer1: "Remote Access Trojans",
        answer2: "Worms",
        answer3: "Rootkits",
        answer4: "Botnets",
        correctAnswer: "Remote Access Trojans"
        },
        {
        question: "The first hacker’s conference was held in which of the below locations?",
        answer1: "OSCON",
        answer2: "DEVON",
        answer3: "DEFCON",
        answer4: "SECTION",
        correctAnswer: "DEFCON"
        },
        {
        question: "When any IT device, service, or system requires security checks, the term “security testing” is employed.?",
        answer1: "Threat",
        answer2: "Vulnerability",
        answer3: "Objective of evaluation",
        answer4: "Attack",
        correctAnswer: "Objective of evaluation"
        },
        {
        question: "Which of the below is used to analyse network flow and monitor traffic?",
        answer1: "Managed detection and response",
        answer2: "Cloud access security broker",
        answer3: "Network traffic analysis",
        answer4: "N/A little bro",
        correctAnswer: "Network traffic analysis"
        },
        {
        question: "Which of the below is a method of gaining access to a computer program or an entire computer system while circumventing all security measures?",
        answer1: "Backdoor",
        answer2: "Masquerading",
        answer3: "Phishing",
        answer4: "Trojan Horse",
        correctAnswer: "Backdoor"
        },
        {
        question: "The term “protection from ______of source code” refers to limiting access to the source code to just authorised individuals.",
        answer1: "disclosure",
        answer2: "alteration",
        answer3: "destruction",
        answer4: "log of changes",
        correctAnswer: "destruction"
        },
        {
        question: "_______________ are programmes or procedures that enable hackers to maintain control of a computer system.?",
        answer1: "Exploits",
        answer2: "Antivirus",
        answer3: "Firewall by-passers",
        answer4: "Worms",
        correctAnswer: "Exploits"
        },
        { 
        question: "Identify the term which denotes that only authorized users are capable of accessing the information ",
        answer1: "Confidentiality",
        answer2: "Availability",
        answer3: "Integrity",
        answer4: "Non-repudiation",
        correctAnswer: "Availability"
        },
        {
        question: "State whether True or False: Data encryption is primarily used to ensure confidentiality.",
        answer1: "True",
        answer2: "False",
        answer3: "Cannot be interpreted",
        answer4: "IDK",
        correctAnswer: "True"
        },
        {
        question: "Identify the Debian-based OS which has 2 virtual machines and focuses on preserving users’ data.",
        answer1: "Ubuntu",
        answer2: "Fedora",
        answer3: "Whonix",
        answer4: "Kubuntu",
        correctAnswer: "Whonix"
        },
        {
        question: "Identify the oldest phone hacking technique used by hackers to make free calls.",
        answer1: "Spamming",
        answer2: "Phreaking",
        answer3: "Cracking",
        answer4: "Phishing",
        correctAnswer: "Phreaking"
        },
        {
        question: "Which of the following platforms is used for the safety and protection of information in the cloud?",
        answer1: "AWS",
        answer2: "Cloud Workload Protection Platforms",
        answer3: "Cloud Security Protocols",
        answer4: "One Drive",
        correctAnswer: "Cloud Workload Protection Platforms"
        },
        {
        question: "Identify the type of attack which uses a fraudulent server with a relay address.",
        answer1: "MITM",
        answer2: "NTLM",
        answer3: "SMB",
        answer4: "NetBIOS",
        correctAnswer: "MITM"
        },
        {
        question: "Identify the port used to connect to Active Directory in Windows 2000.",
        answer1: "139",
        answer2: "445",
        answer3: "80",
        answer4: "389",
        correctAnswer: "389"
        },
        {
        question: "Choose among the following techniques, which are used to hide information inside a picture.",
        answer1: "Image rendering",
        answer2: "Steganography",
        answer3: "Rootkits",
        answer4: "Bitmapping",
        correctAnswer: "Steganography"
        },
        {
        question: "Identify among the following which is used to avoid browser-based hacking.",
        answer1: "Adware remover in browser",
        answer2: "Incognito mode in the browser",
        answer3: "Anti-malware in browser",
        answer4: "Remote browser access",
        correctAnswer: "Remote browser access"
        },
        {
        question: "EDR stands for _____?",
        answer1: "Endless detection and response",
        answer2: "Endpoint detection and response",
        answer3: "Endless detection and recovery",
        answer4: "Endpoint detection and recovery",
        correctAnswer: "Endpoint detection and response"
        },
        {
        question: "Which of the following is used for monitoring traffic and analyzing network flow?",
        answer1: "Managed detection and response",
        answer2: "Cloud access security broker",
        answer3: "Network traffic analysis",
        answer4: "Network security firewall",
        correctAnswer: "Network traffic analysis"
        },
        {
        question: "In which category does compromising confidential information fall?",
        answer1: "Threat",
        answer2: "Bug",
        answer3: "Attack",
        answer4: "Vulnerability",
        correctAnswer: "Threat"
        },
        {
        question: "In which category does the lack access control policy fall?",
        answer1: "Threat",
        answer2: "Bug",
        answer3: "Attack",
        answer4: "Vulnerability",
        correctAnswer: "Vulnerability"
        },
        {
        question: "Identify the class of computer threats.",
        answer1: "Phishing",
        answer2: "DOS attack",
        answer3: "Soliciting",
        answer4: "Both DOS attack and soliciting",
        correctAnswer: "DOS attack"
        },
        {
        question: "Which software is mainly used to help users detect viruses and avoid them?",
        answer1: "Antivirus",
        answer2: "Adware",
        answer3: "Malware",
        answer4: "None of the above",
        correctAnswer: "Antivirus"
        },
        {
        question: "Identify the term which denotes the violation of principle if the computer is no more accessible.",
        answer1: "Access Control",
        answer2: "Availability",
        answer3: "Confidentiality",
        answer4: "All of the above",
        correctAnswer: "Availability"
        },
        {
        question: "Which of the following tool is used in Wi-fi hacking?",
        answer1: "Aircrack-ng",
        answer2: "Wireshark",
        answer3: "Norton",
        answer4: "None",
        correctAnswer: "Aircrack-ng"
        },
        {
        question: "Total types of scanning in cyber security is?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        correctAnswer: "3"
        },
        {
        question: "Identify the incorrect type of scanning?",
        answer1: "SYN Stealth",
        answer2: "Null Scan",
        answer3: "Xmas tree scan",
        answer4: "Cloud scan",
        correctAnswer: "Cloud scan"
        },
        {
        question: "Identify the first computer virus among the following.",
        answer1: "Blaster",
        answer2: "Creeper",
        answer3: "Sasser",
        answer4: "Both b and c",
        correctAnswer: "Creeper"
        },
        {
        question: "Which of the following is considered an element of cyber security?",
        answer1: "Network Security",
        answer2: "Operational security",
        answer3: "Application security",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "Which protocol is mostly used in Wi-fi security?",
        answer1: "WPS",
        answer2: "WPA",
        answer3: "WPA2",
        answer4: "Both WAP and WPA2.",
        correctAnswer: "WPA2"
        },
        {
        question: "Full form of TCP/IP?",
        answer1: "Transmission Control Protocol/Internet Protocol",
        answer2: "Transmission Contribution Protocol/Internet Protocol",
        answer3: "Transmission Control Protocol/Internet Protocol",
        answer4: "Transmission Contribution Protocol/Internet Protocol",
        correctAnswer: "Transmission Control Protocol/Internet Protocol"
        },
        {
        question: "Why is response and transmit time used?",
        answer1: "To measure reliability",
        answer2: "To measure security",
        answer3: "To measure longevity",
        answer4: "To measure performance",
        correctAnswer: "To measure longevity"
        },
        {
        question: "Identify which of the following can be considered instances of Open design.",
        answer1: "DVD Player",
        answer2: "CSS",
        answer3: "Both DVD Player and CSS",
        answer4: "N/A",
        correctAnswer: "Both DVD Player and CSS"
        },
        {
        question: "What is transformed using cipher algorithms?",
        answer1: "Scalar text",
        answer2: "Complex text",
        answer3: "Plain text",
        answer4: "None",
        correctAnswer: "Plain text"
        },
        {
        question: "CHAP stands for?",
        answer1: "Challenge Hardware Authentication Protocols",
        answer2: "Circuit Hardware Authentication Protocols",
        answer3: "Challenge Handshake Authentication Protocols",
        answer4: "Circuit Handshake Authentication Protocols",
        correctAnswer: "Challenge Handshake Authentication Protocols"
        },
        {
        question: "Identify the malware which does not replicate or clone through an infection?",
        answer1: "Trojans",
        answer2: "Worms",
        answer3: "Rootkits",
        answer4: "Virus",
        correctAnswer: "Trojans"
        },
        {
        question: "Choose the features which violate Cybersecurity.",
        answer1: "Exploit",
        answer2: "Attack",
        answer3: "Compliance",
        answer4: "None",
        correctAnswer: "Attack"
        },
        {
        question: "Identify the legal form of hacking",
        answer1: "Cracking",
        answer2: "Non-ethical hackcing",
        answer3: "Ethical hacking",
        answer4: "Hacktivism",
        correctAnswer: "Ethical hacking"
        },
        {
        question: "Malware stands for?",
        answer1: "Multipurpose software",
        answer2: "Malfunctioned software",
        answer3: "Malicious software",
        answer4: "Malfunctioning of security",
        correctAnswer: "Malicious software"
        },
        {
        question: "Identify the least strong security encryption.",
        answer1: "WPA2",
        answer2: "WEP",
        answer3: "WPA3",
        answer4: "WPA",
        correctAnswer: "WEP"
        },
        {
        question: "Identify the security protocol which is not strong.",
        answer1: "SMTP",
        answer2: "SSL",
        answer3: "SFTP",
        answer4: "HTTPS",
        correctAnswer: "SMTP"
        },
        {
        question: "Identify the mail transferring methodology which isn’t secured.",
        answer1: "SSMTP",
        answer2: "S/MIME",
        answer3: "POP3",
        answer4: "Mail using PGP",
        correctAnswer: "POP3"
        },
        {
        question: "Which of the following is used for encrypting data at the network level?",
        answer1: "HTTPS",
        answer2: "SMTP",
        answer3: "S/MIME",
        answer4: "IPSec",
        correctAnswer: "IPSec"
        },
        {
        question: "PCT Stands for?",
        answer1: "Private Communication Technique",
        answer2: "Private Connection Technology",
        answer3: "Private Communication Technology",
        answer4: "Personal Communication Technology",
        correctAnswer: "Private Communication Technology"
        },
        {
        question: "Identify the private search engine.",
        answer1: "Bing",
        answer2: "DuckDuckGo",
        answer3: "Google",
        answer4: "Yahoo",
        correctAnswer: "DuckDuckGo"
        },
        {
        question: "The most common way to maintain data availability?",
        answer1: "Data Clustering",
        answer2: "Data Altering",
        answer3: "Data Backup",
        answer4: "Data Recovery",
        correctAnswer: "Data Backup"
        },
        {
        question: "Identify the term among the following which is the first phase of ethical hacking.",
        answer1: "Footprinting",
        answer2: "ARP Poisoning",
        answer3: "DNS Poisoning",
        answer4: "Enumeration",
        correctAnswer: "Footprinting"
        },
        {
        question: "Which of the following suite is used for NTP enumeration?",
        answer1: "DNS",
        answer2: "SNMP",
        answer3: "NTP",
        answer4: "HTTP",
        correctAnswer: "NTP"
        },
        {
        question: "Why is the proxy server used by a hacker?",
        answer1: "For obtaining remote access connection",
        answer2: "Hiding malicious activity on the network",
        answer3: "Create a ghost server on the network",
        answer4: "Create a stronger connection with the target",
        correctAnswer: "Hiding malicious activity on the network"
        },
        {
        question: "Identify the type of symmetric key algorithm which uses a streaming cipher to encrypt information.",
        answer1: "SHA",
        answer2: "MD5",
        answer3: "RC4",
        answer4: "Blowfish",
        correctAnswer: "RC4"
        },
        {
        question: "Identify the maximum character which Linux OS supports in its file names.",
        answer1: "32",
        answer2: "64",
        answer3: "128",
        answer4: "256",
        correctAnswer: "256"
        },
        {
        question: "Among the following, identify the one which does not need any host program and is independent.",
        answer1: "Worm",
        answer2: "Virus",
        answer3: "Trojan Horse",
        answer4: "Trap Door",
        correctAnswer: "Worm"
        },
        {
        question: "Why is Code red?",
        answer1: "Antivirus",
        answer2: "Virus",
        answer3: "Word Processing Software",
        answer4: "Photo editing software",
        correctAnswer: "Virus"
        },
        {
        question: "Which of the following is considered as the unsolicited commercial email?",
        answer1: "Virus",
        answer2: "Malware",
        answer3: "Spam",
        answer4: "All of the above",
        correctAnswer: "Spam"
        },
        {
        question: "Which one of the following can be considered as the class of computer threats?",
        answer1: "Denial of Service Attack",
        answer2: "Phishing",
        answer3: "Soliciting",
        answer4: "Both Phishing and Soliciting",
        correctAnswer: "Denial of Service Attack"
        },
        {
        question: "Choose the default port number for Apache and other web servers.",
        answer1: "20",
        answer2: "27",
        answer3: "80",
        answer4: "87",
        correctAnswer: "80"
        },
        {
        question: "To what does a DNS translate a domain name",
        answer1: "Hex",
        answer2: "IP",
        answer3: "Binary",
        answer4: "URL",
        correctAnswer: "IP"
        },
        {
        question: "Identify the element which is not considered in the triad, according to the CIA.",
        answer1: "Authenticity",
        answer2: "Availability",
        answer3: "Integrity",
        answer4: "Confidentiality",
        correctAnswer: "Confidentiality"
        },
        {
        question: "What is the CIA triad also known as?",
        answer1: "AIC (Availability, Integrity, Confidentiality)",
        answer2: "NIC (Non-repudiation, Integrity, Confidentiality)",
        answer3: "AIN (Availability, Integrity, Non-repudiation)",
        answer4: "ANC (Availability, Non-repudiation, Confidentiality)",
        correctAnswer: "AIC (Availability, Integrity, Confidentiality)"
        },
        {
        question: "Identify the term which denotes the protection of data from modification by unknown users.",
        answer1: "Confidentiality",
        answer2: "Authentication",
        answer3: "Integrity",
        answer4: "Non-repudiation",
        correctAnswer: "Integrity"
        },
        {
        question: "What is Cyber Security?",
        answer1: "Cyber Security provides security against malware",
        answer2: "Cyber Security provides security against cyber-terrorists",
        answer3: "Cyber Security protects a system from cyber attacks",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "What does cyber security protect?",
        answer1: "Cyber security protects criminals",
        answer2: "Cyber security protects internet-connected systems",
        answer3: "Cyber security protects hackers",
        answer4: "None of the mentioned",
        correctAnswer: "Cyber security protects internet-connected systems"
        },
        {
        question: "Who is the father of computer security?",
        answer1: "August Kerckhoffs",
        answer2: "Bob Thomas",
        answer3: "Robert",
        answer4: "Charles",
        correctAnswer: "August Kerckhoffs"
        },
        {
        question: "Which of the following is defined as an attempt to steal, spy, damage or destroy computer systems, networks, or their associated information?",
        answer1: "Cyber attack",
        answer2: "Computer security",
        answer3: "Cryptography",
        answer4: "Digital Hacking",
        correctAnswer: "Cyber attack"
        },
        {
        question: "Which of the following is a type of cyber security?",
        answer1: "Cloud Security",
        answer2: "Network Security",
        answer3: "Application Security",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "What are the features of cyber security?",
        answer1: "Compliance",
        answer2: "Defense against internal threats",
        answer3: "Threat Prevention",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "Which of the following is an objective of network security?",
        answer1: "Confidentiality",
        answer2: "Integrity",
        answer3: "Availability",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "Which of the following is not a cybercrime?",
        answer1: "Denial of Service",
        answer2: "Man in the Middle",
        answer3: "Malware",
        answer4: "AES",
        correctAnswer: "AES"
        },
        {
        question: "Which of the following is a component of cyber security?",
        answer1: "Internet Of Things",
        answer2: "AI",
        answer3: "Database",
        answer4: "Attacks",
        correctAnswer: "Internet Of Things"
        },
        {
        question: "Which of the following is a type of cyber attack?",
        answer1: "Phishing",
        answer2: "SQL Injections",
        answer3: "Password Attack",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "Which of the following is not an advantage of cyber security?",
        answer1: "Makes the system slower",
        answer2: "Minimizes computer freezing and crashes",
        answer3: "Gives privacy to users",
        answer4: "Protects system against viruses",
        correctAnswer: "Makes the system slower"
        },
        {
        question: "Cyberspace was coined by",
        answer1: "Richard Stallman",
        answer2: "William Gibson",
        answer3: "Andrew Tannenbaum",
        answer4: "Scott Fahlman",
        correctAnswer: "William Gibson"
        },
        {
        question: "In which year has hacking become a practical crime and a matter of concern in the field of cyber technology?",
        answer1: "1991",
        answer2: "1983",
        answer3: "1970",
        answer4: "1964",
        correctAnswer: "1970"
        },
        {
        question: "Governments hired some highly skilled hackers for providing cyber security for the country or state. These types of hackers are termed as _______",
        answer1: "Nation / State sponsored hackers",
        answer2: "CIA triad",
        answer3: "Special Hackers",
        answer4: "Government Hackers",
        correctAnswer: "Nation / State sponsored hackers"
        },
        {
        question: "Which of the following act violates cyber security?",
        answer1: "Exploit",
        answer2: "Attack",
        answer3: "Threat",
        answer4: "Vulnerability",
        correctAnswer: "Attack"
        },
        {
        question: "Which of the following actions compromise cyber security?",
        answer1: "Vulnerability",
        answer2: "Attack",
        answer3: "Threat",
        answer4: "Exploit",
        correctAnswer: "Threat"
        },
        {
        question: "Which of the following is the hacking approach where cyber-criminals design fake websites or pages for tricking or gaining additional traffic?",
        answer1: "Pharming",
        answer2: "Website-Duplication",
        answer3: "Mimicking",
        answer4: "Spamming",
        correctAnswer: "Pharming"
        },
        {
        question: "Which of the following is not a type of peer-to-peer cyber-crime?",
        answer1: "MiTM",
        answer2: "Injecting Trojans to a target victim",
        answer3: "Credit card details leak in the deep web",
        answer4: "Phishing",
        correctAnswer: "Credit card details leak in the deep web"
        },
        {
        question: "A cyber-criminal or penetration tester uses the additional data that stores certain special instructions in the memory for activities to break the system in which of the following attack?",
        answer1: "Clickjacking",
        answer2: "Buffer-overflow",
        answer3: "Phishing",
        answer4: "MITM",
        correctAnswer: "Buffer-overflow"
        },
        {
        question: "Which of the following do Cyber attackers commonly target for fetching IP address of a target or victim user?",
        answer1: "IP tracker",
        answer2: "Emails",
        answer3: "Websites",
        answer4: "Web Pages",
        correctAnswer: "Websites"
        },
        {
        question: "Which of the following is defined as an attempt to harm, damage or cause threat to a system or network?",
        answer1: "Digital crime",
        answer2: "Threats",
        answer3: "System Hijacking",
        answer4: "Cyber Attack",
        correctAnswer: "Cyber Attack"
        },
        {
        question: "They are nefarious hackers, and their main motive is to gain financial profit by doing cyber crimes. Who are “they” referred to here?",
        answer1: "White Hat Hackers",
        answer2: "Black Hat Hackers",
        answer3: "Hactivists",
        answer4: "Gray Hat Hackers",
        correctAnswer: "Black Hat Hackers"
        },
        {
        question: "IT security in any firm or organization is maintained and handled by ____________________",
        answer1: "Software Security Specialist",
        answer2: "CEO of the organization",
        answer3: "Security Auditor",
        answer4: "IT Security Engineer",
        correctAnswer: "IT Security Engineer"
        },
        {
        question: "Where did the term “hacker” originate?",
        answer1: "MIT",
        answer2: "New York University",
        answer3: "Harvard University",
        answer4: "Bell's Lab",
        correctAnswer: "MIT"
        },
        {
        question: "What is the existence of weakness in a system or network is known as?",
        answer1: "Attack",
        answer2: "Exploit",
        answer3: "Vulnerability",
        answer4: "Threat",
        correctAnswer: "Vulnerability"
        },
        {
        question: "Which of the following is an internet scam done by cyber-criminals where the user is convinced digitally to provide confidential information.",
        answer1: "MiTM attack",
        answer2: "Phishing attack",
        answer3: "Website attack",
        answer4: "Denial of Service attack",
        correctAnswer: "Phishing attack"
        },
        {
        question: "Which of the following is not a step followed by cyber-criminals in data breaching?",
        answer1: "Exfiltration",
        answer2: "Research and info-gathering",
        answer3: "Attack the system",
        answer4: "Fixing the bugs",
        correctAnswer: "Fixing the bugs"
        },
        {
        question: "Which of the following online service’s privacy cannot be protected using Tor?",
        answer1: "Browsing data",
        answer2: "Instant messaging",
        answer3: "Login using ID",
        answer4: "Relay chats",
        correctAnswer: "Login using ID"
        },
        {
        question: "Which of the following term refers to a group of hackers who are both white and black hat?",
        answer1: "Yellow Hat hackers",
        answer2: "Grey Hat hackers",
        answer3: "Red Hat Hackers",
        answer4: "White-Black Hat Hackers",
        correctAnswer: "Grey Hat hackers"
        },
        {
        question: "Which of the following is not an email-related hacking tool?",
        answer1: "Mail Password",
        answer2: "Email Finder Pro",
        answer3: "Mail PassView",
        answer4: "Sendinc",
        correctAnswer: "Sendinc"
        },
        {
        question: "Which of the following DDoS in mobile systems wait for the owner to trigger the cyber attack?",
        answer1: "botnets",
        answer2: "programs",
        answer3: "virus",
        answer4: "worms",
        correctAnswer: "botnets"
        },
        {
        question: "Which of the following is the least strong security encryption standard?",
        answer1: "WPA3",
        answer2: "WPA2",
        answer3: "WPA",
        answer4: "WEP",
        correctAnswer: "WEP"
        },
        {
        question: "Which of the following is a Stuxnet?",
        answer1: "Trojan",
        answer2: "Antivirus",
        answer3: "Worm",
        answer4: "Virus",
        correctAnswer: "Worm"
        },
        {
        question: "Which of the following ethical hacking technique is used for determining which operating system (OS) is running on a remote computer?",
        answer1: "Operating System fingerprinting",
        answer2: "Operating System penetration testing",
        answer3: "Digital-printing",
        answer4: "Machine printing",
        correctAnswer: "Operating System fingerprinting"
        },
        {
        question: "Which of the following can diminish the chance of data leakage?",
        answer1: "Steganography",
        answer2: "Chorography",
        answer3: "Cryptography",
        answer4: "Authentication",
        correctAnswer: "Steganography"
        },
        { // https://www.javatpoint.com/cyber-security-mcq
        question: "In which of the following, a person is constantly followed/chased by another person or group of several peoples?",
        answer1: "Phishing",
        answer2: "Bulling",
        answer3: "Stalking",
        answer4: "Identify Theft",
        correctAnswer: "Stalking"
        },
        {
        question: "Which one of the following can be considered as the class of computer threats?",
        answer1: "Dos Attack",
        answer2: "Phishing",
        answer3: "Soliciting",
        answer4: "Both DoS Attack & Soliciting",
        correctAnswer: "DoS Attack"
        },
        {
        question: "3) Which of the following is considered as the unsolicited commercial email?",
        answer1: "Virus",
        answer2: "Malware",
        answer3: "Spam",
        answer4: "All of the Above",
        correctAnswer: "Spam"
        },
        {
        question: "4) Which of the following usually observe each activity on the internet of the victim, gather all information in the background, and send it to someone else?",
        answer1: "Malware",
        answer2: "Spyware",
        answer3: "Adware",
        answer4: "All of the above",
        correctAnswer: "Spyware"
        },
        {
        question: "5) _______ is a type of software designed to help the user's computer detect viruses and avoid them.",
        answer1: "Malware",
        answer2: "Adware",
        answer3: "Antivirus",
        answer4: "Both Adware and Antivirus",
        correctAnswer: "Antivirus"
        },
        {
        question: "6) Which one of the following is a type of antivirus program?",
        answer1: "Quick heal",
        answer2: "McAfee",
        answer3: "Kaspersky",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "7) It can be a software program or a hardware device that filters all data packets coming through the internet, a network, etc. it is known as the_______:",
        answer1: "Antivirus",
        answer2: "Firewall",
        answer3: "Cookies",
        answer4: "Malware",
        correctAnswer: "Firewall"
        },
        {
        question: "8) Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
        answer1: "Piracy",
        answer2: "Plagiarism",
        answer3: "Intellectual property rights",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "9) Read the following statement carefully and find out whether it is correct about the hacking or not?  It can be possible that in some cases, hacking a computer or network can be legal.",
        answer1: "No, in any situation, hacking cannot be legal",
        answer2: "It may be possible that in some cases, it can be referred to as a legal task",
        answer3: "No, in any situation, hacking cannot be legal",
        answer4: "It may be possible that in some cases, it can be referred to as a legal task",
        correctAnswer: "It may be possible that in some cases, it can be referred to as a legal task"
        },
        {
        question: "10) Which of the following refers to exploring the appropriate, ethical behaviors related to the online environment and digital media platform? ",
        answer1: "Cyber low",
        answer2: "Cyberethics",
        answer3: "Cybersecurity",
        answer4: "Cybersafety",
        correctAnswer: "Cyberethics"
        },
        {
        question: "11) Which of the following refers to the violation of the principle if a computer is no more accessible?",
        answer1: "Access control",
        answer2: "Confidentiality",
        answer3: "Availability",
        answer4: "All of the above",
        correctAnswer: "Availability"
        },
        {
        question: "12) Which one of the following refers to the technique used for verifying the integrity of the message? ",
        answer1: "Digital signature",
        answer2: "Decryption algorithm",
        answer3: "Protocol",
        answer4: "Message Digest",
        correctAnswer: "Message Digest"
        },
        {
        question: "13) Which one of the following usually used in the process of Wi-Fi-hacking?",
        answer1: "Aircrack-ng",
        answer2: "Wireshark",
        answer3: "Norton",
        answer4: "All of the above",
        correctAnswer: "Aircrack-ng"
        },
        {
        question: "14) Which of the following port and IP address scanner famous among the users?",
        answer1: "Cain and Abel",
        answer2: "Angry IP Scanner",
        answer3: "Snort",
        answer4: "Ettercap",
        correctAnswer: "Angry IP Scanner"
        },
        {
        question: "15) In ethical hacking and cyber security, there are _______ types of scanning:",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        correctAnswer: "3"
        },
        {
        question: "16) Which of the following is not a type of scanning?",
        answer1: "Xmas Tree Scan",
        answer2: "Cloud Scan",
        answer3: "Null Scan",
        answer4: "SYN Stealth",
        correctAnswer: "Cloud Scan"
        },
        {
        question: "17) In system hacking, which of the following is the most crucial activity?",
        answer1: "Information gathering",
        answer2: "Covering tracks",
        answer3: "Cracking passwords",
        answer4: "None of the above",
        correctAnswer: "Cracking passwords"
        },
        {
        question: "18) Which of the following are the types of scanning?",
        answer1: "Network, vulnerability, and port scanning",
        answer2: "Port, network, and services",
        answer3: "Client, Server, and network",
        answer4: "None of the above",
        correctAnswer: "Network, vulnerability, and port scanning"
        },
        {
        question: "19) Which one of the following is actually considered as the first computer virus?",
        answer1: "Sasser",
        answer2: "Blaster",
        answer3: "Creeper",
        answer4: "Both Sasser and Creeper",
        correctAnswer: "Creeper"
        },
        {
        question: "20) To protect the computer system against the hacker and different kind of viruses, one must always keep _________ on in the computer system.",
        answer1: "Antivirus",
        answer2: "Firewall",
        answer3: "VLC Player",
        answer4: "Script",
        correctAnswer: "Firewall"
        },
        {
        question: "21) Code Red is a type of ________",
        answer1: "An Antivirus Program",
        answer2: "A photo editing software",
        answer3: "A computer virus",
        answer4: "A video editing software",
        correctAnswer: "A computer virus"
        },
        {
        question: "22) Which of the following can be considered as the elements of cyber security?",
        answer1: "Application Security",
        answer2: "Operational Security",
        answer3: "Network Security",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "23) Which of the following are famous and common cyber-attacks used by hackers to infiltrate the user's system?",
        answer1: "DDos and Derive-by Downloads",
        answer2: "Malware & Malvertising",
        answer3: "Phishing and Password attacks",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "24) Which one of the following is also referred to as malicious software?",
        answer1: "Maliciousware",
        answer2: "Badware",
        answer3: "Ilegalware",
        answer4: "Malware",
        correctAnswer: "Malware"
        },
        {
        question: "25) Hackers usually used the computer virus for ______ purpose.",
        answer1: "To log, monitor each and every user's stroke",
        answer2: "To gain access the sensitive information like user's Id and Passwords",
        answer3: "To corrupt the user's data stored in the computer system",
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "26) In Wi-Fi Security, which of the following protocol is more used?",
        answer1: "WPA",
        answer2: "WPA2",
        answer3: "WPS",
        answer4: "Both WPS and WPA",
        correctAnswer: "Both WPS and WPA"
        },
        {
        question: "28) The response time and transit time is used to measure the ____________ of a network.",
        answer1: "Security",
        answer2: "Longevity",
        answer3: "Reliability",
        answer4: "Performance",
        correctAnswer: "Performance"
        },
        {
        question: "29) Which of the following factor of the network gets hugely impacted when the number of users exceeds the network's limit?",
        answer1: "Reliability",
        answer2: "Performance",
        answer3: "Security",
        answer4: "Longevity",
        correctAnswer: "Longevity"
        },
        {
        question: "30) In the computer networks, the encryption techniques are primarily used for improving the ________",
        answer1: "Security",
        answer2: "Performance",
        answer3: "Reliability",
        answer4: "Longevity",
        correctAnswer: "Security"
        },
        {
        question: "31) Which of the following statements is correct about the firewall?",
        answer1: "It is a device installed at the boundary of a company to prevent unauthorized physical access.",
        answer2: "It is a device installed at the boundary of an incorporate to protect it against the unauthorized access.",
        answer3: "It is a kind of wall built to prevent files form damaging the corporate.",
        answer4: "None of the above",
        correctAnswer: "It is a device installed at the boundary of an incorporate to protect it against the unauthorized access."
        },
        {
        question: "32) When was the first computer virus created?",
        answer1: "1970",
        answer2: "1971",
        answer3: "1972",
        answer4: "1969",
        correctAnswer: "1971"
        },
        {
        question: "33) Which of the following is considered as the world's first antivirus program?",
        answer1: "Creeper",
        answer2: "Reaper",
        answer3: "Tinkered",
        answer4: "Ray Tomlinson",
        correctAnswer: "Reaper"
        },
        {
        question: "34) Which one of the following principles of cyber security refers that the security mechanism must be as small and simple as possible?",
        answer1: "Open-Design",
        answer2: "Economy of the Mechanism",
        answer3: "Least privilege",
        answer4: "Fail-safe Defaults",
        correctAnswer: "Economy of the Mechanism"
        },
        {
        question: "35) Which of the following principle of cyber security restricts how privileges are initiated whenever any object or subject is created?",
        answer1: "Least privilege",
        answer2: "Open-Design",
        answer3: "Fail-safe Defaults",
        answer4: "None of the above",
        correctAnswer: "Fail-safe Defaults"
        },
        {
        question: "36) Suppose an employee demands the root access to a UNIX system, where you are the administrator; that right or access should not be given to the employee unless that employee has work that requires certain rights, privileges. It can be considered as a perfect example of which principle of cyber security?",
        answer1: "Least privileges",
        answer2: "Open Design",
        answer3: "Separation of Privileges",
        answer4: "Both Least Privileges and Separation of Privileges",
        correctAnswer: "Least privileges"
        },
        {
        question: "37) Which of the following can also consider as the instances of Open Design?",
        answer1: "CSS",
        answer2: "DVD Player",
        answer3: "CSS",
        answer4: "Both CSS and DVD Player",
        correctAnswer: "Both CSS and DVD Player"
        },
        {
        question: "38) Which one of the following principles states that sometimes it is become more desirable to rescored the details of intrusion that to adopt more efficient measure to avoid it?",
        answer1: "Least common mechanism",
        answer2: "Compromise recording",
        answer3: "Psychological acceptability",
        answer4: "Work factor",
        correctAnswer: "Compromise recording"
        },
        {
        question: "39) The web application like banking websites should ask its users to log-in again after some specific period of time, let say 30 min. It can be considered as an example of which cybersecurity principle?",
        answer1: "Compromise recording",
        answer2: "Psychological acceptability",
        answer3: "Complete mediation",
        answer4: "None of the above",
        correctAnswer: "Complete mediation"
        },
        {
        question: "40) Which one of the following statements is correct about Email security in the network security methods?",
        answer1: "One has to deploy hardware, software, and security procedures to lock those apps down.",
        answer2: "One should know about what the normal behavior of a network look likes so that he/she can spot any changes, breaches in the behavior of the network.",
        answer3: "Phishing is one of the most commonly used methods that are used by hackers to gain access to the network",
        answer4: "All of the above",
        correctAnswer: "Phishing is one of the most commonly used methods that are used by hackers to gain access to the network"
        },
        {
        question: "41) Which of the following statements is true about the VPN in Network security?",
        answer1: "It is a type of device that helps to ensure that communication between a device and a network is secure.",
        answer2: "It is usually based on the IPsec( IP Security) or SSL (Secure Sockets Layer)",
        answer3: `It typically creates a secure, encrypted virtual "tunnel" over the open internet`,
        answer4: "All of the above",
        correctAnswer: "All of the above"
        },
        {
        question: "42) Which of the following type of text is transformed with the help of a cipher algorithm?",
        answer1: "Transformed text",
        answer2: "Complex text",
        answer3: "Scalar text",
        answer4: "Plain text",
        correctAnswer: "Plain text"
        },
        {
        question: `43) The term "CHAP" stands for __________`,
        answer1: "Circuit Hardware Authentication Protocols",
        answer2: "Challenge Hardware Authentication Protocols",
        answer3: "Challenge Handshake Authentication Protocols",
        answer4: "Circuit Handshake Authentication Protocols",
        correctAnswer: "Challenge Handshake Authentication Protocols"
        },
        {
        question: "44) Which type of the following malware does not replicate or clone them self's through infection?",
        answer1: "Rootkits",
        answer2: "Trojans",
        answer3: "Worms",
        answer4: "Viruses",
        correctAnswer: "Trojans"
        },
        {
        question: "45) Which of the following malware's type allows the attacker to access the administrative controls and enables his/or her to do almost anything he wants to do with the infected computers. ",
        answer1: "RATs",
        answer2: "Worms",
        answer3: "Rootkits",
        answer4: "Botnets",
        correctAnswer: "RATs"
        },
        {
        question: "46) Which of the following statements is true about the Trojans?",
        answer1: "Trojans perform tasks for which they are designed or programmed",
        answer2: "Trojans replicates them self's or clone them self's through an infections",
        answer3: "Trojans do nothing harmful to the user's computer systems",
        answer4: "None of the above",
        correctAnswer: "Trojans perform tasks for which they are designed or programmed"
        },
        {
        question: "47) Which of the following is just opposite to the Open Design principle?",
        answer1: "Security through obscurity",
        answer2: "Least common mechanism",
        answer3: "Least privileges",
        answer4: "Work factor",
        correctAnswer: "Security through obscurity"
        },
        {
        question: "48) Which of the following is a type of independent malicious program that never required any host program?",
        answer1: "Trojan Horse",
        answer2: "Worm",
        answer3: "Trap Door",
        answer4: "Virus",
        correctAnswer: "Worm"
        },
        {
        question: "49) Which of the following usually considered as the default port number of apache and several other web servers?",
        answer1: "20",
        answer2: "40",
        answer3: "80",
        answer4: "87",
        correctAnswer: "80"
        },
        {
        question: "50) DNS translates a Domain name into _________",
        answer1: "Hex",
        answer2: "Binary",
        answer3: "IP",
        answer4: "URL",
        correctAnswer: "URL"
        },
        {
        question: "51) Which one of the following systems cannot be considered as an example of the operating systems?",
        answer1: "Windows 8",
        answer2: "Red Hat Linux",
        answer3: "BSD Linux",
        answer4: "Microsoft Office",
        correctAnswer: "Microsoft Office"
        },
        {
        question: "52) In the CIA Triad, which one of the following is not involved?",
        answer1: "Availability",
        answer2: "Confidentiality",
        answer3: "Authenticity",
        answer4: "Integrity",
        correctAnswer: "Authenticity"
        },
        {
        question: "53) In an any organization, company or firm the policies of information security come under__________",
        answer1: "CIA Triad",
        answer2: "Confidentiality",
        answer3: "Authenticity",
        answer4: "None of the above",
        correctAnswer: "CIA Triad"
        },
        {
        question: "54) Why are the factors like Confidentiality, Integrity, Availability, and Authenticity considered as the fundamentals?",
        answer1: "They help in understanding the hacking process",
        answer2: "These are the main elements for any security breach",
        answer3: "They help to understand the security and its components in a better manner",
        answer4: "All of the above",
        correctAnswer: "They help to understand the security and its components in a better manner"
        },
        {
        question: "55) In order to ensure the security of the data/ information, we need to ____________ the data:",
        answer1: "Encrypt",
        answer2: "Decrypt",
        answer3: "Delete",
        answer4: "None of the above",
        correctAnswer: "Encrypt"
        },
        {
        question: "56) Which one of the following is considered as the most secure Linux operating system that also provides anonymity and the incognito option for securing the user's information?",
        answer1: "Ubuntu",
        answer2: "Tails",
        answer3: "Fedora",
        answer4: "All of the above",
        correctAnswer: "Tails"
        },
        {
        question: "57) Which type following UNIX account provides all types of privileges and rights which one can perform administrative functions?",
        answer1: "Client",
        answer2: "Guest",
        answer3: "Root",
        answer4: "Administrative",
        correctAnswer: "Administrative"
        },
        {
        question: "60) Name of the Hacker who breaks the SIPRNET system?",
        answer1: "John Draper",
        answer2: "Kevin Mitnick",
        answer3: "John von Neumann",
        answer4: "Kevin Poulsen",
        correctAnswer: "Kevin Poulsen"
        },
        ]
    };

        const randomQuestion = initialState.qaSet[Math.floor(Math.random() * initialState.qaSet.length)];
        const question = randomQuestion.question;
        const options = [randomQuestion.answer1, randomQuestion.answer2, randomQuestion.answer3, randomQuestion.answer4].sort(() => Math.random() - 0.5);
        const correctAnswer = randomQuestion.correctAnswer;
        
        const option1 = new ButtonBuilder()
            .setCustomId(options[0])
            .setLabel(options[0])
            .setStyle(ButtonStyle.Secondary);

        const option2 = new ButtonBuilder()
            .setCustomId(options[1])
            .setLabel(options[1])
            .setStyle(ButtonStyle.Secondary);

        const option3 = new ButtonBuilder()
            .setCustomId(options[2])
            .setLabel(options[2])
            .setStyle(ButtonStyle.Secondary);

        const option4 = new ButtonBuilder()
            .setCustomId(options[3])
            .setLabel(options[3])
            .setStyle(ButtonStyle.Secondary);


        let components = [option1, option2];
        if (options.length > 2) components.push(option3);
        if (options.length > 3) components.push(option4);

        
        const row = new ActionRowBuilder().addComponents(components);
       
        await interaction.reply({
            content: question,
            components: [row]
        });

        
        try {
    const componentInteraction = await interaction.channel.awaitMessageComponent({ time: 1000000000 });
    
    
    if (componentInteraction.customId === correctAnswer) {
    await componentInteraction.update({
        content: `${question}
        Your answer of ${correctAnswer} is correct!`,
        ephemeral: true,
        components: []
    })} else {
        await componentInteraction.update({
        content: `${question}
        Wrong!  The answer was ${correctAnswer}`,
        ephemeral: true,
        components: []
        })
    }

        }
    catch (e) {
        console.error(e);
        await interaction.editReply({ content: 'This failed I guess.', components: [] });
    }
    },}

// Credits to these for the questions and answers I got:
        // https://unacademy.com/content/gate/mcqs/cyber-security/
        // https://www.sanfoundry.com/1000-cyber-security-questions-answers/
        // https://www.interviewbit.com/cyber-security-mcq/
        // https://www.javatpoint.com/cyber-security-mcq