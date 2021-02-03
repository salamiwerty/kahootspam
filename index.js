const Kahoot = require("kahoot.js-updated");
const readline = require("readline");
const readlines = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(`𝐊𝐚𝐡𝐨𝐨𝐭 𝐁𝐨𝐭 𝐒𝐩𝐚𝐦 | 𝐂𝐨𝐝𝐞 𝐦𝐚𝐝𝐞 𝐛𝐲: 𝐖𝐞𝐫𝐭𝐲`)
console.("")
console.log("This is the Werty Spam Kahoot bot!")
console.log(";)")
readlines.question("GameID: ", (answer) => {
  var splits = answer.split(",");
  const pin = splits[0];
  const bots = [...Array(500).keys()].map((i) => {
    const client = new Kahoot();
    client.join(pin, `Hacker ${i}`);
    client.on("questionStart", (question) => {
      question.answer(Math.floor(Math.random() * 4));
    });
    return client;
  });
});
