const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('question')
		.setDescription('get a non-multiple choice cybersecurity question and try to answer it!'),
	async execute(interaction) {
		// Questions Here:
        let initialState = {
            qaSet: [ // question and answer set
            { // #1
            question: "What is cybersecurity, and why is it important?",
            correctAnswer: "Cybersecurity protects computer systems, networks, and data from theft, damage, or unauthorized access. It's important to safeguard sensitive information, maintain privacy, prevent financial losses, and protect critical infrastructure from cyber threats."
            },
            { // #2.1
            question: "Define the term Virus.",
            correctAnswer: "Virus: A program that replicates itself and spreads to other files or systems, often causing harm."
            },
            { // #2.2
            question: "Define the term Malware.",
            correctAnswer: "Malware: A broader term encompassing any malicious software that disrupts or gains unauthorized access to computer systems."
            },
            { // #2.3
            question: "Define the term Ransomware.",
            correctAnswer: "Ransomware: A malicious software encrypting files or computer systems and requesting a ransom for their decryption."
            },
            { // #3.
            question: "Explain the difference between a Threat, Vulnerability, and Risk in cybersecurity.",
            correctAnswer: `Threat: Any potential danger or harmful event that can exploit vulnerabilities and negatively impact security.
            Vulnerability: Weaknesses or gaps in security measures that threats can exploit.
            Risk: The probability of a threat capitalizing on a vulnerability and the potential consequences or damage it may inflict.`
            },
            { // #4.
            question: "What is Phishing?",
            correctAnswer: "Phishing: A cyberattack in which malicious actors employ deceptive emails or messages to deceive individuals into disclosing sensitive information."
            },
            { // #5.
            question: "Provide an example of Phishing.",
            correctAnswer: "Here's a sample example: An email claiming to be from a bank, requesting the recipient to provide their login credentials by clicking a link that leads to a fake website."
            },
            { // #6.
            question: "How do firewalls protect network security?",
            correctAnswer: "Firewalls serve as protective barriers, overseeing and screening both inbound and outbound network traffic in accordance with established security regulations. They block unauthorized access and help prevent malicious data from entering or leaving a network."
            },
            { // #7.
            question: "What is a VPN and why is it used?",
            correctAnswer: "A Virtual Private Network encrypts and secures internet connections, ensuring privacy and anonymity.  It protects data from eavesdropping, accesses restricted content, and enhances public Wi-Fi security."
            },
            { // #8.
            question: "Explain the concept of a secure Password.",
            correctAnswer: "A secure password is complex, lengthy, and difficult to guess. It comprises a combination of uppercase and lowercase letters, numbers, and special characters, with the requirement that this combination should be distinct for every individual account."
            },
            { // #9.
            question: "What are the common techniques for securing a computer network?",
            correctAnswer: "Techniques include using strong passwords, regular updates and patch management, implementing firewalls, using intrusion detection systems, and conducting security audits."
            },
            { // #10.
            question: "What is two-factor authentication, and why is it important?",
            correctAnswer: "Two-factor authentication enhances security by necessitating users to furnish two distinct forms of verification, typically a password and a temporary code, thereby bolstering protection.  It's important because even if a password is compromised, unauthorized access is prevented without the second factor."
            },
            { // #11.
            question: "Define the terms Encryption and Decryption.",
            correctAnswer: "Encryption: Converting plaintext data into a coded format to protect it from unauthorized access.  Decryption: Converting encrypted data back into its original, readable form."
            },
            { // #12.
            question: "What is SSL encryption?",
            correctAnswer: "SSL (Secure Sockets Layer) encryption is a protocol that ensures secure data transmission between a user's web browser and a website server, protecting data during transit."
            },
            { // #13.
            question: "What is the difference between IDS and IPS?",
            correctAnswer: `IDS (Intrusion Detection System): Monitors network traffic and generates alerts when suspicious activity is detected.
                            IPS (Intrusion Prevention System): Not only detects but also actively blocks or prevents suspicious network activity.`
            },
            { // #14.
            question: "Explain what a security audit Is.",
            correctAnswer: "A security audit systematically evaluates an organization's information systems and security policies to assess their effectiveness, identify vulnerabilities, and recommend improvements."
            },
            { // #15.
            question: "What steps would you take if you discovered a security breach?",
            correctAnswer: "Isolate affected systems, contain the breach, notify relevant parties, investigate the incident, remediate vulnerabilities, and implement measures to prevent future breaches."
            },
            { // #16.
            question: "What is social engineering? .",
            correctAnswer: "Social engineering manipulates individuals to disclose confidential information or perform actions for malicious purposes."
            },
            { // #17.
            question: "Give an example of Social Engineering.",
            correctAnswer: "Example: Pretending to be a trusted colleague and asking for login credentials over the phone."
            },
            { // #18.
            question: "What are cookies in a web browser?",
            correctAnswer: "Cookies are stored by websites on a user's device. They are used to track user preferences, session information, and provide a personalized browsing experience."
            },
            { // #19.
            question: "What is a DDoS attack and how does it work?",
            correctAnswer: "A Distributed Denial of Service (DDoS) attack inundates a target server or network with excessive traffic originating from numerous sources, making it inaccessible to genuine users."
            },
            { // #20.
            question: "Explain what a security policy is.",
            correctAnswer: "A security policy comprises a collection of formally documented regulations, recommendations, and protocols that delineate an organization's methods to safeguard its information, assets, and technological resources."
            },
            { // #21.
            question: "What is the difference between symmetric and asymmetric encryption?",
            correctAnswer: "Symmetric Encryption uses a similar key for encryption and decryption.  Asymmetric Encryption employs a pair of keys, one public and one private. Data that is encrypted with one key can only be deciphered using the complementary key."
            },
            { // #22.
            question: "How can you prevent a Man-In-The-Middle attack?",
            correctAnswer: "Use secure communication protocols, verify digital certificates, and avoid public Wi-Fi for sensitive transactions. Implementing strong encryption also helps."
            },
            { // #23.
            question: "What is a honeypot in cybersecurity?",
            correctAnswer: "A honeypot is a decoy system or network designed to attract attackers. It allows security professionals to study their tactics, techniques, and motivations."
            },
            { // #24.
            question: "Explain the concept of a digital signature.",
            correctAnswer: "A digital signature employs cryptographic methods to confirm the genuineness and unaltered state of a digital document or message, assuring both the sender's authenticity and the content's integrity."
            },
            { // #25.
            question: "What is a brute force attack?",
            correctAnswer: "It involves attackers employing a trial-and-error approach to find a password or encryption key by systematically testing every conceivable combination until they discover the correct one."
            },
            { // #26.
            question: "What are the common cyber threats today?",
            correctAnswer: "Common threats include malware, ransomware, phishing, DDoS attacks, insider threats, and zero-day vulnerabilities."
            },
            { // #27.
            question: "What is the role of patch management in maintaining security?",
            correctAnswer: "Patch management regularly applies updates and patches to software and systems to fix security vulnerabilities. It's crucial for preventing the exploitation of known weaknesses by attackers."
            },
            { // #28.
            question: "Explain the concept of Public Key Infrastructure (PKI).",
            correctAnswer: "PKI is a system of cryptographic techniques that enables secure communication over an insecure network. A public key and a private key pair are employed for various cryptographic operations such as encryption, decryption, the creation of digital signatures, and the validation of public keys through the use of certificate authorities (CAs) to ensure their authenticity."
            },
            { // #29.
            question: "What are the key elements of a strong security policy?",
            correctAnswer: "A strong security policy includes elements like access control, encryption, regular updates, user training, incident response plans, and compliance with relevant regulations."
            },
            { // #30.
            question: "How does a rootkit work and how would you detect it?",
            correctAnswer: "A rootkit is malicious software that gives attackers unauthorized access to a computer or network. Detection involves using specialized anti-rootkit tools and monitoring for suspicious system behavior."
            },
            { // #31.
            question: "Explain cross-site scripting and SQL injection.",
            correctAnswer: "XSS involves injecting malicious scripts into web applications, which can compromise user data. SQL Injection exploits vulnerabilities in SQL queries to manipulate a database. Both are forms of web application vulnerabilities."
            },
            { // #32.
            question: "What is a zero-day vulnerability?",
            correctAnswer: "It refers to a security vulnerability present in software or hardware that is undisclosed to the vendor and lacks an existing solution. This loophole can be leveraged by malicious actors before a remedy is created."
            },
            { // #33.
            question: "Discuss the ISO 27001/27002 standards.",
            correctAnswer: "It is a framework for information security management systems (ISMS), while ISO 27002 provides guidelines for implementing security controls and practices within an organization."
            },
            { // #34.
            question: "How do threat detection systems work?",
            correctAnswer: "Threat detection systems monitor network traffic and system logs to identify suspicious activities or potential security threats using predefined rules and machine learning algorithms."
            },
            { // #35.
            question: "Explain the principles of ethical hacking.",
            correctAnswer: "Ethical hacking involves testing systems and networks for vulnerabilities to strengthen security. Principles include obtaining proper authorization, maintaining confidentiality, and responsible disclosure of findings."
            },
            { // #36.
            question: "What are the different types of network security?",
            correctAnswer: "  Network security includes perimeter security, firewall protection, intrusion detection systems, VPNs, and network segmentation to safeguard data and resources."
            },
            { // #37.
            question: "Discuss the concept of risk assessment in cybersecurity.",
            correctAnswer: "Risk assessment in cybersecurity involves identifying, assessing, and prioritizing potential threats and vulnerabilities to make informed decisions on security measures."
            },
            { // #38.
            question: "What is incident response, and how is it managed?",
            correctAnswer: "Incident response encompasses a methodical strategy for handling and diminishing security incidents, encompassing key phases such as preparation, detection, containment, eradication, recovery, and knowledge acquisition."
            },
            { // #39.
            question: "Explain the principle of least privilege.",
            correctAnswer: "The Least Privilege principle limits the access of users and processes to the bare minimum required for their specific tasks, thereby minimizing the potential for unauthorized actions."
            },
            { // #40.
            question: "How does Secure Socket Layer (SSL) work?",
            correctAnswer: "SSL protocol ensures secure data transmission between web browsers and servers using encryption, authentication, and data integrity checks."
            },
            { // #41.
            question: "What is network sniffing?",
            correctAnswer: "Network sniffing is the practice of intercepting and analyzing network traffic to gather information, potentially for malicious purposes. It can be used for monitoring or attacks."
            },
            { // #42.
            question: "Discuss the importance of disaster recovery planning in cybersecurity.",
            correctAnswer: "Disaster recovery planning encompasses the proactive preparation and responsive actions required to safeguard against data loss or system failures, ultimately ensuring the uninterrupted operation of a business."
            },
            { // #43.
            question: "What is a Security Information and Event Management (SIEM) System?",
            correctAnswer: "SIEM systems gather, correlate, and scrutinize security-relevant data from diverse origins to identify and react to security events."
            },
            { // #44.
            question: "How do you manage cryptographic keys?",
            correctAnswer: "Cryptographic keys should be securely generated, stored, rotated, and protected to maintain the confidentiality and integrity of encrypted data."
            },
            { // #45.
            question: "What are the common methods for secure data disposal?",
            correctAnswer: "Common methods include data shredding, overwriting, degaussing, and physical destruction to ensure that sensitive information cannot be recovered from storage media."
            },
            { // #46.
            question: "Explain the concept of endpoint security.",
            correctAnswer: "Endpoint security focuses on securing individual devices (endpoints) like computers and mobile devices by using antivirus, anti-malware, and intrusion detection systems."
            },
            { // #47.
            question: "Discuss the role of artificial intelligence in cybersecurity.",
            correctAnswer: "AI is used for threat detection, pattern recognition, and anomaly detection to improve cybersecurity defenses and automate incident response."
            },
            { // #48.
            question: "What are the challenges in cloud security?",
            correctAnswer: "Challenges include data breaches, compliance, data loss prevention, and securing shared responsibility models in cloud environments."
            },
            { // #49.
            question: "How do penetration testing and vulnerability assessments differ?",
            correctAnswer: "Penetration testing replicates real-world attack scenarios to discover vulnerabilities, whereas vulnerability assessments concentrate on scanning systems to detect recognized weaknesses."
            },
            { // #50.
            question: "What is a Security Operations Center (SOC)?",
            correctAnswer: "SOC is a centralized team responsible for real-time monitoring, detecting, and responding to security incidents."
            },
            { // #51.
            question: "Discuss the importance of compliance in cybersecurity.",
            correctAnswer: "Compliance ensures that an organization follows relevant laws and regulations, helping protect data and avoid legal consequences."
            },
            { // #52.
            question: "What Is multi-factor authentication and how does it enhance security?",
            correctAnswer: "MFA bolsters security by necessitating users to furnish multiple authentication factors, typically a combination of something they possess (e.g., a mobile token) and something they are aware of (e.g., a password)."
            },
            { // #53.
            question: "Discuss the challenges and strategies of securing IoT devices.",
            correctAnswer: "Challenges: Device diversity, limited resources, and vulnerabilities.      Strategies: Regular updates, strong authentication, network segmentation, and IoT security frameworks."
            },
            { // #54.
            question: "Explain Advanced Persistent Threats (APT).",
            correctAnswer: "APTs are long-term, targeted cyberattacks by skilled adversaries. They use stealth, persistence, and sophisticated techniques to breach systems."
            },
            { // #55.
            question: "Discuss the role of blockchain in cybersecurity.",
            correctAnswer: "Blockchain can enhance security through decentralized consensus, data integrity, and immutable records. It's used in secure transactions and identity management."
            },
            { // #56.
            question: "How do you approach securing a large, distributed network?",
            correctAnswer: "Employ segmentation, strong access controls, regular audits, and network monitoring to protect against threats across a vast network."
            },
            { // #57.
            question: "What is the importance of forensics in cybersecurity?",
            correctAnswer: "Forensics helps investigate incidents, gather evidence, and understand attack vectors, aiding in incident response and legal actions."
            },
            { // #58.
            question: "Discuss the intricacies of network protocol security.",
            correctAnswer: "Secure protocols are essential for data confidentiality and integrity. Use encryption and authentication, and keep protocols updated to mitigate risks."
            },
            { // #59.
            question: "How do you manage security in a DevOps environment?",
            correctAnswer: "Implement security into the development pipeline with automation, continuous monitoring, and collaboration between development and security teams."
            },
            { // #60.
            question: "Explain the concept of micro-segmentation in network security.",
            correctAnswer: "Micro-segmentation isolates network segments for finer control and security. It limits the lateral movement of threats within a network."
            },
            { // #61.
            question: "Discuss the challenges of securing big data environments.",
            correctAnswer: "Challenges include data volume and diversity. Strategies involve encryption, access controls, monitoring, and data classification."
            },
            { // #62.
            question: "What are your strategies for managing supply chain risks in cybersecurity?",
            correctAnswer: "Assess third-party vendors, enforce security standards, conduct audits, and maintain a supply chain risk management program."
            },
            { // #63.
            question: "Explain the concept of container security.",
            correctAnswer: "Secure containerized applications with image scanning, access controls, and runtime protection to prevent vulnerabilities."
            },
            { // #64.
            question: "How do you ensure compliance with international data protection laws (like GDPR)?",
            correctAnswer: "Implement data protection policies, conduct privacy impact assessments, and ensure compliance with consent and data subject rights."
            },
            { // #65.
            question: "Discuss the future trends in cybersecurity.",
            correctAnswer: "Trends include AI/ML for threat detection, zero-trust architecture, cloud security, and increased focus on IoT and 5G security."
            },
            { // #66.
            question: "What are the ethical considerations in cybersecurity?",
            correctAnswer: "Ethical concerns involve privacy, responsible disclosure, and avoiding harm to individuals and organizations."
            },
            { // #67.
            question: "How do you measure the effectiveness of a cybersecurity program?",
            correctAnswer: "Use metrics like risk assessments, incident response times, and security posture evaluations to measure program effectiveness."
            },
            { // #68.
            question: "Discuss the challenges in securing wireless networks.",
            correctAnswer: "Challenges include rogue access points and eavesdropping. Solutions include strong encryption, network monitoring, and user education."
            },
            { // #69.
            question: "What is quantum cryptography and its implications for security?",
            correctAnswer: "Quantum cryptography uses quantum mechanics to secure communication. It has the potential to resist quantum attacks, ensuring long-term security."
            },
            { // #70.
            question: "Explain the concept of federated identity management.",
            correctAnswer: "Federated identity allows users to access multiple systems with a single set of credentials, enhancing convenience and security."
            },
            { // #71.
            question: "What are the latest developments in cybersecurity threats?",
            correctAnswer: "Threats evolve with new attack vectors, such as supply chain attacks, ransomware, and AI-driven attacks."
            },
            { // #72.
            question: "How do you manage security in a hybrid cloud environment?",
            correctAnswer: "Secure hybrid cloud environments with consistent security policies, identity management, and data protection across on-premises and cloud resources."
            },
            { // #73.
            question: "Discuss the impact of artificial intelligence on cybersecurity threats.",
            correctAnswer: "AI can automate threat detection, enhance incident response, and improve security analytics. However, it can also be exploited by attackers."
            },
            { // #74.
            question: "What is the role of machine learning in detecting cyber threats?",
            correctAnswer: "ML algorithms analyze large datasets to detect anomalies and patterns associated with cyber threats, enabling proactive security measures."
            },
            { // #75.
            question: "Explain the concept of threat intelligence and its application.",
            correctAnswer: "Threat intelligence is the collection and analysis of data to identify and respond to emerging threats, enabling proactive cybersecurity."
            },
            { // #76.
            question: "What strategies would you implement for securing mobile applications?",
            correctAnswer: ""
            },
            { // #77.
            question: "Discuss the challenges and solutions in endpoint detection and response (EDR).",
            correctAnswer: "  EDR solutions monitor and respond to endpoint threats in real-time, providing visibility and incident response capabilities."
            },
            { // #78.
            question: "What is the difference between Symmetric and Asymmetric encryption?",
            correctAnswer: "https://app.gemoo.com/share/image-annotation/634141371495260160?codeId=MpOzxdoo8JqXo&origin=imageurlgenerator&card=634141370576707584"
            },
            { // #79.
            question: "Explain CIA triad.",
            correctAnswer: `CIA stands for Confidentiality, Integrity, and Availability. CIA is a model that is designed to guide policies for Information Security. It is one of the most popular models used by organizations.

            Confidentiality
             - The information should be accessible and readable only to authorized personnel. It should not be accessible by unauthorized personnel. The information should be strongly encrypted just in case someone uses hacking to access the data so that even if the data is accessed, it is not readable or understandable.
            
            Integrity 
             - Making sure the data has not been modified by an unauthorized entity. Integrity ensures that data is not corrupted or modified by unauthorized personnel. If an authorized individual/system is trying to modify the data and the modification wasn’t successful, then the data should be reversed back and should not be corrupted.
            
            Availability
             - The data should be available to the user whenever the user requires it. Maintaining of Hardware, upgrading regularly, Data Backups and Recovery, Network Bottlenecks should be taken care of.`
            },
            { // #80.
            question: "How is Encryption different from Hashing?",
            correctAnswer: "Both Encryption and Hashing are used to convert readable data into an unreadable format. The difference is that the encrypted data can be converted back to original data by the process of decryption but the hashed data cannot be converted back to original data."
            },
            { // #81.
            question: "What is a Firewall and why is it used?",
            correctAnswer: "A Firewall is a network security system set on the boundaries of the system/network that monitors and controls network traffic. Firewalls are mainly used to protect the system/network from viruses, worms, malware, etc. Firewalls can also be to prevent remote access and content filtering."
            },
            { // #82.
            question: "What is the difference between VA(Vulnerability Assessment) and PT(Penetration Testing)?",
            correctAnswer: "Vulnerability Assessment is the process of finding flaws on the target. Here, the organization knows that their system/network has flaws or weaknesses and want to find these flaws and prioritize the flaws for fixing.  Penetration Testing is the process of finding vulnerabilities on the target. In this case, the organization would have set up all the security measures they could think of and would want to test if there is any other way that their system/network can be hacked."
            },
            { // #83.
            question: "What is a three-way handshake?",
            correctAnswer: `A three-way handshake is a method used in a TCP/IP network to create a connection between a host and a client. It’s called a three-way handshake because it is a three-step method in which the client and server exchanges packets. The three steps are as follows:

            The client sends a SYN(Synchronize) packet to the server check if the server is up or has open ports
            The server sends SYN-ACK packet to the client if it has open ports
            The client acknowledges this and sends an ACK(Acknowledgment) packet back to the server`
            },
            { // #84.
            question: "What are the response codes that can be received from a Web Application?",
            correctAnswer: `
            1xx – Informational responses
            2xx – Success
            3xx – Redirection
            4xx – Client-side error
            5xx – Server-side error`
            },
            { // #85.
            question: "What is traceroute? Why is it used?",
            correctAnswer: "Traceroute is a tool that shows the path of a packet. It lists all the points (mainly routers) that the packet passes through. This is used mostly when the packet is not reaching its destination. Traceroute is used to check where the connection stops or breaks to identify the point of failure."
            },
            { // #86.
            question: "What is the difference between HIDS and NIDS?",
            correctAnswer: "HIDS(Host IDS) and NIDS(Network IDS) are both Intrusion Detection System and work for the same purpose i.e., to detect the intrusions. The only difference is that the HIDS is set up on a particular host/device. It monitors the traffic of a particular device and suspicious system activities. On the other hand, NIDS is set up on a network. It monitors traffic of all device of the network."
            },
            { // #87.
            question: "What are the steps to set up a firewall?",
            correctAnswer: `Following are the steps to set up a firewall:

            Username/password: modify the default password for a firewall device
            Remote administration: Disable the feature of the remote administration
            Port forwarding: Configure appropriate port forwarding for certain applications to work properly, such as a web server or FTP server
            DHCP server: Installing a firewall on a network with an existing DHCP server will cause conflict unless the firewall’s DHCP is disabled
            Logging: To troubleshoot firewall issues or potential attacks, ensure that logging is enabled and understand how to view logs
            Policies: You should have solid security policies in place and make sure that the firewall is configured to enforce those policies.`
            },
            { // #88.
            question: "Explain SSL Encryption",
            correctAnswer: `SSL(Secure Sockets Layer) is the industry-standard security technology creating encrypted connections between Web Server and a Browser. This is used to maintain data privacy and to protect the information in online transactions. The steps for establishing an SSL connection is as follows:

            A browser tries to connect to the webserver secured with SSL
            The browser sends a copy of its SSL certificate to the browser
            The browser checks if the SSL certificate is trustworthy or not. If it is trustworthy, then the browser sends a message to the web server requesting to establish an encrypted connection
            The web server sends an acknowledgment to start an SSL encrypted connection
            SSL encrypted communication takes place between the browser and the web server`
            },
            { // #89
            question: "What steps will you take to secure a server?",
            correctAnswer: `Secure servers use the Secure Sockets Layer (SSL) protocol for data encryption and decryption to protect data from unauthorized interception.

            Here are four simple ways to secure server:
            
            Step 1: Make sure you have a secure password for your root and administrator users
            Step 2: The next thing you need to do is make new users on your system. These will be the users you use to manage the system
            Step 3: Remove remote access from the default root/administrator accounts
            Step 4: The next step is to configure your firewall rules for remote access`
            },
            { // #90
            question: "Explain Data Leakage",
            correctAnswer: `Data Leakage is an intentional or unintentional transmission of data from within the organization to an external unauthorized destination. It is the disclosure of confidential information to an unauthorized entity. Data Leakage can be divided into 3 categories based on how it happens:

            Accidental Breach: An entity unintentionally send data to an unauthorized person due to a fault or a blunder
            Intentional Breach: The authorized entity sends data to an unauthorized entity on purpose
            System Hack: Hacking techniques are used to cause data leakage
        
            Data Leakage can be prevented by using tools, software, and strategies known as DLP(Data Leakage Prevention) Tools.`
            },
            { // #91
            question: "What are some of the common Cyberattacks?",
            correctAnswer: `Following are some common cyber attacks that could adversely affect your system.

            Malware
            Phishing
            Password Attacks
            DDoS
            Man in the Middle
            Drive-By Downloads
            Malvertising
            Rogue Software`
            },
            { // #92
            question: "What is a Brute Force Attack? How can you prevent it?",
            correctAnswer: `Brute Force is a way of finding out the right credentials by repetitively trying all the permutations and combinations of possible credentials. In most cases, brute force attacks are automated where the tool/software automatically tries to login with a list of credentials. There are various ways to prevent Brute Force attacks. Some of them are:

            Password Length: You can set a minimum length for password. The lengthier the password, the harder it is to find.
            Password Complexity: Including different formats of characters in the password makes brute force attacks harder. Using alpha-numeric passwords along with special characters, and upper and lower case characters increase the password complexity making it difficult to be cracked.
            Limiting Login Attempts: Set a limit on login failures. For example, you can set the limit on login failures as 3. So, when there are 3 consecutive login failures, restrict the user from logging in for some time, or send an Email or OTP to use to log in the next time. Because brute force is an automated process, limiting login attempts will break the brute force process.`
            },
            { // #93
            question: "What is Port Scanning?",
            correctAnswer: `Port Scanning is the technique used to identify open ports and service available on a host. Hackers use port scanning to find information that can be helpful to exploit vulnerabilities. Administrators use Port Scanning to verify the security policies of the network. Some of the common Port Scanning Techniques are:

            Ping Scan
            TCP Half-Open
            TCP Connect
            UDP
            Stealth Scanning
        
            Enroll in a prestigious Cyber Security Internship program to kickstart your career.`
            },
            { // #94
            question: "What are the different layers of the OSI model?",
            correctAnswer: `An OSI model is a reference model for how applications communicate over a network. The purpose of an OSI reference is to guide vendors and developers so the digital communication products and software programs can interoperate.

            Following are the OSI layers:different OSI layers-cybersecurity interview questions-edureka
            
            Physical Layer: Responsible for transmission of digital data from sender to receiver through the communication media,
            Data Link Layer: Handles the movement of data to and from the physical link. It is also responsible for encoding and decoding of data bits.
            Network Layer: Responsible for packet forwarding and providing routing paths for network communication.
            Transport Layer: Responsible for end-to-end communication over the network. It splits the data from the above layer and passes it to the Network Layer and then ensures that all the data has successfully reached at the receiver’s end.
            Session Layer: Controls connection between the sender and the receiver. It is responsible for starting, ending, and managing the session and establishing, maintaining and synchronizing interaction between the sender and the receiver.
            Presentation Layer: It deals with presenting the data in a proper format and data structure instead of sending raw datagrams or packets.
            Application Layer: It provides an interface between the application and the network. It focuses on process-to-process communication and provides a communication interface`
            },
            { // #95
            question: "What is a VPN?",
            correctAnswer: "Almost all Cybersecurity Interview Questions will have this question included. VPN stands for Virtual Private Network. It is used to create a safe and encrypted connection. When you use a VPN, the data from the client is sent to a point in the VPN where it is encrypted and then sent through the internet to another point. At this point, the data is decrypted and sent to the server. When the server sends a response, the response is sent to a point in the VPN where it is encrypted and this encrypted data is sent to another point in the VPN where it is decrypted. And finally, the decrypted data is sent to the client. The whole point of using a VPN is to ensure encrypted data transfer."
            },
            { // #96
            question: "What do you understand by Risk, Vulnerability & Threat in a network?",
            correctAnswer: `Threat: Someone with the potential to harm a system or an organization
            Vulnerability: Weakness in a system that can be exploited by a potential hacker
            Risk: Potential for loss or damage when threat exploits a vulnerability`
            },
            { // #97
            question: "How can identity theft be prevented?",
            correctAnswer: `Here’s what you can do to prevent identity theft:

            Ensure strong and unique password
            Avoid sharing confidential information online, especially on social media
            Shop from known and trusted websites
            Use the latest version of the browsers
            Install advanced malware and spyware tools
            Use specialized security solutions against financial data
            Always update your system and the software
            Protect your SSN (Social Security Number)`
            },
            { // #98
            question: "What are black hat, white hat and grey hat hackers?",
            correctAnswer: `Black hat hackers are known for having vast knowledge about breaking into computer networks. They can write malware which can be used to gain access to these systems. This type of hackers misuse their skills to steal information or use the hacked system for malicious purpose. 

            White hat hackers use their powers for good deeds and so they are also called Ethical Hackers. Look out for our Ethical Hacking Course to learn more about the Ethical Hacking. These are mostly hired by companies as a security specialist that attempts to find and fix vulnerabilities and security holes in the systems. They use their skills to help make the security better. 
            
            Anonymity is just a simple thing in Ethical Hacking & CyberSecurity. If you are interested in this domain, check Edureka’s CompTIA Security+ Certification Training.
            
            Grey hat hackers are an amalgamation of a white hat and black hat hacker. They look for system vulnerabilities without the owner’s permission. If they find any vulnerabilities, they report it to the owner. Unlike Black hat hackers, they do not exploit the vulnerabilities found. `
            },
            { // #99
            question: "How often should you perform Patch management?",
            correctAnswer: `Patch management should be done as soon as it is released. For windows, once the patch is released it should be applied to all machines, not later than one month. Same goes for network devices, patch it as soon as it is released. Proper patch management should be followed.`
            },
            { // #100
            question: "How would you reset a password-protected BIOS configuration?",
            correctAnswer: "Since BIOS is a pre-boot system it has its own storage mechanism for settings and preferences. A simple way to reset is by popping out the CMOS battery so that the memory storing the settings lose its power supply and as a result, it will lose its setting."
            },
            { // #101
            question: "Explain MITM attack and how to prevent it?",
            correctAnswer: `A MITM(Man-in-the-Middle) attack is a type of attack where the hacker places himself in between the communication of two parties and steal the information. Suppose there are two parties A and B having a communication. Then the hacker joins this communication. He impersonates as party B to A and impersonates as party A in front of B. The data from both the parties are sent to the hacker and the hacker redirects the data to the destination party after stealing the data required. While the two parties think that they are communicating with each other, in reality, they are communicating with the hacker.

            You can prevent MITM attack by using the following practices:
            
                Use VPN
                Use strong WEP/WPA encryption
                Use Intrusion Detection Systems
                Force HTTPS
                Public Key Pair Based Authentication`
            },
            { // #102
            question: "Explain DDOS attack and how to prevent it?",
            correctAnswer: `This again is an important Cybersecurity Interview Question. A DDOS(Distributed Denial of Service) attack is a cyberattack that causes the servers to refuse to provide services to genuine clients. DDOS attack can be classified into two types:

            Flooding attacks: In this type, the hacker sends a huge amount of traffic to the server which the server can not handle. And hence, the server stops functioning. This type of attack is usually executed by using automated programs that continuously send packets to the server.
            Crash attacks: In this type, the hackers exploit a bug on the server resulting in the system to crash and hence the server is not able to provide service to the clients.
        
            You can prevent DDOS attacks by using the following practices:
        
            Use Anti-DDOS services
            Configure Firewalls and Routers
            Use Front-End Hardware
            Use Load Balancing
            Handle Spikes in Traffic`
            },
            { // #103
            question: "Explain XSS attack and how to prevent it?",
            correctAnswer: `XSS(Cross-Site Scripting) is a cyberattack that enables hackers to inject malicious client-side scripts into web pages. XSS can be used to hijack sessions and steal cookies, modify DOM, remote code execution, crash the server etc.

            You can prevent XSS attacks by using the following practices:
            
                Validate user inputs
                Sanitize user inputs
                Encode special characters
                Use Anti-XSS services/tools
                Use XSS  HTML Filter`
            },
            { // #104
            question: "What is an ARP and how does it work?",
            correctAnswer: `Address Resolution Protocol (ARP)is a protocol for mapping an Internet Protocol address (IP address) to a physical machine address that is recognized in the local network.

            When an incoming packet destined for a host machine on a particular local area network arrives at a gateway, the gateway asks the ARP program to find a physical host or MAC address that matches the IP address.
            
            The ARP program looks in the ARP cache and, if it finds the address, provides it so that the packet can be converted to the right packet length and format and sent to the machine.
            
            If no entry is found for the IP address, ARP broadcasts a request packet in a special format to all the machines on the LAN to see if one machine knows that it has that IP address associated with it.`
            },
            { // #105
            question: "What is port blocking within LAN?",
            correctAnswer: `Restricting the users from accessing a set of services within the local area network is called port blocking.

            Stopping the source to not to access the destination node via ports. As the application works on the ports, so ports are blocked to restricts the access filling up the security holes in the network infrastructure.`
            },
            { // #106
            question: "What protocols fall under TCP/IP internet layer?",
            correctAnswer: `https://app.gemoo.com/share/image-annotation/634687647819415552?codeId=PYlr6e5zzm7OB&origin=imageurlgenerator&card=634687647097995264`
            },
            { // #107
            question: "What is a Botnet?",
            correctAnswer: "A Botnet is a number of devices connected to the internet where each device has one or more bots running on it. The bots on the devices and malicious scripts used to hack a victim. Botnets can be used to steal data, send spams and execute a DDOS attack."
            },
            { // #108
            question: "What are salted hashes?",
            correctAnswer: `Salt is a random data. When a properly protected password system receives a new password, it creates a hash value of that password, a random salt value, and then the combined value is stored in its database. This helps to defend against dictionary attacks and known hash attacks.
            
            Example: If someone uses the same password on two different systems and they are being used using the same hashing algorithm, the hash value would be same, however, if even one of the system uses salt with the hashes, the value will be different.`
            },
            { // #109
            question: "Explain SSL and TLS",
            correctAnswer: `SSL is meant to verify the sender’s identity but it doesn’t search for anything more than that. SSL can help you track the person you are talking to but that can also be tricked at times.

            TLS is also an identification tool just like SSL, but it offers better security features. It provides additional protection to the data and hence SSL and TLS are often used together for better protection.`
            },
            { // #110
            question: "What is data protection in transit vs data protection at rest?",
            correctAnswer: "https://app.gemoo.com/share/image-annotation/634687473898405888?codeId=vzRmyOBOYjRJ2&origin=imageurlgenerator&card=634687472971464704"
            },
            { // #111
            question: "What is 2FA and how can it be implemented for public websites?",
            correctAnswer: `An extra layer of security that is known as “multi-factor authentication“.

            Requires not only a password and username but also something that only, and only, that user has on them, i.e. a piece of information only they should know or have immediately to hand – such as a physical token.
            
            Authenticator apps replace the need to obtain a verification code via text, voice call or email.`
            },
            { // #112
            question: "What is Cognitive Cybersecurity?",
            correctAnswer: `Cognitive Cybersecurity is an application of AI technologies patterned on human thought processes to detect threats and protect physical and digital systems.

            Self-learning security systems use data mining, pattern recognition, and natural language processing to simulate the human brain, albeit in a high-powered computer model.`
            },
            { // #113
            question: "What is the difference between VPN and VLAN?",
            correctAnswer: "https://app.gemoo.com/share/image-annotation/634687191261036544?codeId=MpOdg92yX75Zx&origin=imageurlgenerator&card=634687189872721920"
            },
            { // #114
            question: "Explain Phishing and how to prevent it?",
            correctAnswer: `Phishing is a Cyberattack in which a hacker disguises as a trustworthy person or business and attempt to steal sensitive financial or personal information through fraudulent email or instant message.

            You can prevent Phishing attacks by using the following practices:
            
                Don’t enter sensitive information in the webpages that you don’t trust
                Verify the site’s security
                Use Firewalls
                Use AntiVirus Software that has Internet Security
                Use Anti-Phishing Toolbar`
            },
            { // #115
            question: "Explain SQL Injection and how to prevent it?",
            correctAnswer: `SQL Injection (SQLi) is a code injection attack where an attacker manipulates the data being sent to the server to execute malicious SQL statements to control a web application’s database server, thereby accessing, modifying and deleting unauthorized data. This attack is mainly used to take over database servers.

            You can prevent SQL Injection attacks by using the following practices:
            
                Use prepared statements
                Use Stored Procedures
                Validate user input`
            },
            { // #116
            question: `Part B – Scenario Based Cybersecurity Interview Questions
            1. Here’s a situation- You receive the following email from the help desk:
            
            Dear XYZ Email user,
            
            To create space for more users we’re deleting all inactive email accounts. Here’s what you have to send to save your account from getting deleted:

            Name (first and last):
            Email Login:
            Password:
            Date of birth:
            Alternate email

            If we don’t receive the above information from you by the end of the week, your email account will be terminated.

            If you’re a user what do you do? Justify your answer.
            `,
            correctAnswer: `This email is a classic example of “phishing” – trying to trick you into “biting”. The justification is the generalized way of addressing the receiver which is used in mass spam emails.

            Above that, a corporate company will never ask for personal details on mail.
            
            They want your information. Don’t respond to email, instant messages (IM), texts, phone calls, etc., asking you for your password or other private information.
            
            You should never disclose your password to anyone, even if they say they work for UCSC, ITS, or other campus organizations.`
            },
            { // #117
            question: `A friend of yours sends an e-card to your mail. You have to click on the attachment to get the card.

            How many risks are here?  Explain them.`,
            correctAnswer: `There are four risks here:

            Some attachments contain viruses or other malicious programs, so just in general, it’s risky to open unknown or unsolicited attachments.
            Also, in some cases just clicking on a malicious link can infect a computer, so unless you are sure a link is safe, don’t click on it.
            Email addresses can be faked, so just because the email says it is from someone you know, you can’t be certain of this without checking with the person.
            Finally, some websites and links look legitimate, but they’re really hoaxes designed to steal your information.`
            },
            { // #118
            question: `One of the staff members in XYZ subscribes to many free magazines. Now, to activate her subscriptions one of the magazines asked for her month of birth, second asked for her year of birth, the other one asked for her maiden name.

            What do you infer from this situation? Justify.`,
            correctAnswer: `All three newsletters probably have the same parent company or are distributed through the same service. The parent company or service can combine individual pieces of seemingly-harmless information and use or sell it for identity theft

            It is even possible that there is a fourth newsletter that asks for a day of birth as one of the activation questions
            
            Often questions about personal information are optional. In addition to being suspicious about situations like the one described here, never provide personal information when it is not legitimately necessary, or to people or companies, you don’t personally know.`
            },
            { // #119
            question: `In our computing labs, print billing is often tied to the user’s login. Sometimes people call to complain about bills for printing they never did only to find out that the bills are, indeed, correct.

            What do you infer from this situation? Justify.`,
            correctAnswer: `Sometimes they realize they loaned their account to a friend who couldn’t remember his/her password, and the friend did the printing. Thus the charges. It’s also possible that somebody came in behind them and used their account

            This is an issue with shared or public computers in general. If you don’t log out of the computer properly when you leave, someone else can come in behind you and retrieve what you were doing, use your accounts, etc. Always log out of all accounts, quit programs, and close browser windows before you walk away.`
            },
            { // #120
            question: `There is this case that happened in my computer lab. A friend of mine used their yahoo account at a computer lab on campus. She ensured that her account was not left open before she left the lab. Someone came after her and used the same browser to re-access her account. and they started sending emails from it.

            What do you think might be going on here?`,
            correctAnswer: `The first person probably didn’t log out of her account, so the new person could just go to history and access her account.

            Another possibility is that she did log out, but didn’t clear her web cache. (This is done through the browser menu to clear pages that the browser has saved for future use.)`
            },
            { // #121
            question: "Two different offices on campus are working to straighten out an error in an employee’s bank account due to a direct deposit mistake.",
            correctAnswer: `Office #1 emails the correct account and deposit information to office #2, which promptly fixes the problem.

            The employee confirms with the bank that everything has, indeed, been straightened out.
            
            What is wrong here?
            
            Account and deposit information is sensitive data that could be used for identity theft. Sending this or any kind of sensitive information by email is very risky because email is typically not private or secure. Anyone who knows how can access it anywhere along its route.
            
            As an alternative, the two offices could have called each other or worked with ITS to send the information a more secure way.`
            },
            { // #122
            question: `The mouse on your computer screen starts to move around on its own and click on things on your desktop. What do you do?
            
a) Call your co-workers over so they can see

b) Disconnect your computer from the network

c) Unplug your mouse

d) Tell your supervisor

e) Turn your computer off

f) Run anti-virus

g) All of the above

Select all the options that apply.`,
            correctAnswer: `Right answer is B & D.

            This is definitely suspicious. Immediately report the problem to your supervisor and the ITS Support Center: itrequest.ucsc.edu, 459-HELP (4357), help@ucsc.edu or Kerr Hall room 54, M-F 8AM-5PM
            
            Also, since it seems possible that someone is controlling the computer remotely, it is best if you can disconnect the computer from the network (and turn off wireless if you have it) until help arrives. If possible, don’t turn off the computer.`
            },
            { // #123
            question: `You receive an email from your bank telling you there is a problem with your account. The email provides instructions and a link so you can log into your account and fix the problem.

            What should you do?`,
            correctAnswer: `Delete the email. Better yet, use the web client (e.g. gmail, yahoo mail, etc.) and report it as spam or phishing, then delete it.

            Any unsolicited email or phone call asking you to enter your account information, disclose your password, financial account information, social security number, or other personal or private information is suspicious – even if it appears to be from a company you are familiar with. Always contact the sender using a method you know is legitimate to verify that the message is from them.`
            },
            { // #124
            question: `A while back, the IT folks got a number of complaints that one of our campus computers was sending out Viagra spam. They checked it out, and the reports were true: a hacker had installed a program on the computer that made it automatically send out tons of spam email without the computer owner’s knowledge.

            How do you think the hacker got into the computer to set this up?`,
            correctAnswer: `This was actually the result of a hacked password. Using passwords that can’t be easily guessed, and protecting your passwords by not sharing them or writing them down can help to prevent this. Passwords should be at least 8 characters in length and use a mixture of upper and lower case letters, numbers, and symbols.

            Even though in this case it was a hacked password, other things that could possibly lead to this are:
            
                Out of date patches/updates
                No anti-virus software or out of date anti-virus software`
            },
        ]
    };

        const randomQuestion = initialState.qaSet[Math.floor(Math.random() * initialState.qaSet.length)];
        const question = randomQuestion.question;
        const correctAnswer = randomQuestion.correctAnswer;
        
        const option1 = new ButtonBuilder()
            .setCustomId("Show Answer")
            .setLabel("Show Answer")
            .setStyle(ButtonStyle.Primary);


        let components = [option1];
       
        const row = new ActionRowBuilder().addComponents(components);
       
        await interaction.reply({
            content: question,
            components: [row]
        });

        
        try {
    const componentInteraction = await interaction.channel.awaitMessageComponent({ time: 1000000000 });
    
    
    if (componentInteraction.customId === "Show Answer") {
    await componentInteraction.update({
        content: `${question}
        The answer is ${correctAnswer}`,
        ephemeral: true,
        components: []
    })}
        }
    catch (e) {
        console.error(e);
        await interaction.editReply({ content: 'This failed I guess.', components: [] });
    }
    },}


// Credits to these for the questions and answers I got:
    // https://www.simplilearn.com/tutorials/cyber-security-tutorial/cyber-security-interview-questions
    // https://www.edureka.co/blog/interview-questions/cybersecurity-interview-questions/#nine