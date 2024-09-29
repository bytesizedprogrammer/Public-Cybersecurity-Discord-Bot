const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('noncybersecurityquestionsnonmcq')
		.setDescription('Get a non-multiple choice non-cybersecurity computer question and try to answer it!!'),
        async execute(interaction) {
            let initialState = {
                qaSet: [ // question and answer set
                    { // #1
                        question: "What is the term applied collectively to the Northbridge and Southbridge?",
                        correctAnswer: "Chipset"            
                    },
                    {
                        question: "Which of the following acronyms represents the extensible technology that supersedes and improves upon the role that the BIOS plays in traditional systems?",
                        correctAnswer: "UEFI – Unified Extensible Firmware Interface"
                    },
                    {
                        question: "What kind of memory modules include registers between the system’s memory controller and the module’s memory chips, registers that communicate in series with the memory controller and in parallel with the memory chips, easing the electrical strain on the memory controller?",
                        correctAnswer: "Buffered – This means the memory is not connected directly to the chipset, aiding in the processing of large amounts of memory."
                    },
                    {
                        question: "Which level of cache was originally defined as being built into the processor die?",
                        correctAnswer: "Level 1 – The smallest and fastest type of cache memory built into the CPU designed to run at the same speed."
                    },
                    {
                        question: "Which CPU technology places the pins on the motherboard instead of the chip?",
                        correctAnswer: "LGA – Land Grid Array"
                    },
                    {
                        question: "What is the process run by the BIOS at bootup?",
                        correctAnswer: "POST – Power-On Self-Test"
                    },
                    {
                        question: "What type of memory is implemented on 184-pin DIMMs?",
                        correctAnswer: "DDR SDRAM – Double Data Rate Synchronous Dynamic RAM"
                    },
                ]
            }
            
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
    },
        }