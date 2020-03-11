
const Discord = require('discord.js')
const client = new Discord.Client()
var userRequestingGravy = ''
var gravyGang = []
var gravyScore = []
client.on('message', msg => {
  var position = gravyGang.indexOf(msg.author.tag)
  if (position > -1) {
    gravyScore[position] ++
  }
  if (msg.content === '^gravy') {
    msg.channel.send('Well hello there ' + msg.author.username + ', Sounds like you want to be a member of the gravy gang! Type "yes" if you want to get saucy')
    userRequestingGravy = msg.author.username
  } else if (msg.content ==='yes'||msg.content ==='Yes'){
    if(gravyGang.includes(msg.author.tag)){
      msg.channel.send("Don't be silly, you're ALREADY a part of the gravy gang")
    } else {
      msg.react('❤️')
      msg.channel.send('Congratulations, ' + msg.author.username + '! You are officially a member of the GRAVY GANG')
      gravyGang.push(msg.author.tag)
      gravyScore.push(0)
    }
  } else if (msg.content === '^gravyPoints' || msg.content === '^gravypoints' || msg.content === '^GravyPoints' || msg.content === '^Gravypoints' ) {
    if (position > -1) {
      msg.reply('You have ' + gravyScore[position] + ' Gravy Points!')
    } else {
      msg.reply('You are not a member of the gravy gang and therefore have no gravy points')
    }
  } else if (msg.content === '^gravyLeave' || msg.content === '^gravyleave' || msg.content === '^GravyLeave' || msg.content === '^Gravyleave' ) {
    if (position > -1) {
      msg.reply('From this day forward, you are exiled.')
      gravyGang.splice(position, 1)
      gravyScore.splice(position, 1)
    } else {
      msg.reply('You are not a member of the gravy gang and therefore cannot leave it!')
    }
  }
})
client.login(process.env.BOT_TOKEN)

