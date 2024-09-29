const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('noncybersecurityquestionsmcq')
		.setDescription('Get a multiple choice non-cybersecurity computer question and try to answer it!'),
        async execute(interaction) {
            // Questions Here:
        let initialState = {
            qaSet: [ // question and answer set
            {
            question: "Which two types of memory packaging are used chiefly in portable computing devices?",
            answer1: "MicroDIMM & RADIMM",
            answer2: "RADIMM & MicroDIMM",
            answer3: "SODIMM & MicroDIMM",
            answer4: "RADIMM + SODIMM",
            correctAnswer: "SODIMM & MicroDIMM"
            },
            {
            question: "Which two types of DIMMs share a pin count? (240 Pins)",
            answer1: "DDR1 SDRAM & DDR2 SDRAM",
            answer2: "DDR1 SDRAM & DDR2 SDRAM",
            answer3: "DDR2 SDRAM & DDR3 SDRAM",
            //answer4: "N/A",
            correctAnswer: "DDR2 SDRAM & DDR3 SDRAM"
            },
            {
            question: "Which of the following terms refers to upgrading the firmware that the BIOS comprises?",
            answer1: "BIOS Reflecting",
            answer2: "BIOS Flashing",
            answer3: "BIOS Standard",
            answer4: "BIOS Core",
            correctAnswer: "BIOS Flashing"
            }
        ]}

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
        },
    };