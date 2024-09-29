const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder()
    .setName('getnews')
    .setDescription('News.');

module.exports = {
    data: command,
    async execute(interaction) {
        const { member, channel } = interaction;
        const newsRole = 'newsrole';

        // Check if the member has the required role
        if (!member.roles.cache.some(role => role.name === newsRole)) {
            if (!member.roles.cache.some(role => role.name === newsRole)) {
                await channel.send({ content: "You don't have permission to use this command.", ephemeral: true });
                return;
            }
        }

        const url = 'https://cyber-security-news.p.rapidapi.com/news';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ccabb145f4mshff8eceb2e4ec8d6p18d098jsn25674d22d43a',
                'X-RapidAPI-Host': 'cyber-security-news.p.rapidapi.com'
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
            await channel.send(`Failed to fetch news. Error: ${error.message}`);
        }
    },
};



