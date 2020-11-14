/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({
		status: 'online',
		activity: {
			type: 'WATCHING',
			name: 'all star wars movies',
		},
	});
});
// login to Discord with your app's token
client.login(token);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'miller') {
		setTimeout(() => {
			message.channel.send(`OK ${message.author.username} is the OG MILLER`);
		}, 1500);
	}

	if (command === 'sugma') {
		setTimeout(() => {
			message.channel.send(`balls haha :notfunny:`);
		}, 1500);
	}
});

client.on('message', message => {
	console.log(`${message.channel.name}: ${message.author.username} has sent: ${message.content}`);
	const args = message.content.toLowerCase().split(/ +/);

	for(let i = 0; i < args.length; i++) {
		if (args[i] === 'lmao') {
			setTimeout(() => {
				message.channel.send(`${message.author.username} you are really laughing your ass off`);
			}, 1500);
		}

		if (args[i] === 'stfu') {
			setTimeout(() => {
				message.channel.send(`${message.author.username} knowback 5000 https://tenor.com/view/ace-attorney-no-u-shake-head-smh-no-gif-17801150`);
			}, 1500);
		}

		if (args[i] === 'horny') {
			setTimeout(() => {
				message.channel.send(`${message.author.username} thats against the laws of GOD`);
			}, 1500);
		}
	}
});