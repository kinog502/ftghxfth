module.exports = async (client) => {
  var permissions = 8
  console.log(`[API] Logged in as ${client.user.username}| https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`);
  await client.user.setActivity("Music", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
