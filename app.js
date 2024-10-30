const readline=require("readline")
const {generateMeta}=require("./controller/openAIController")
const rl=readline.createInterface({
input:process.stdin,
output:process.stdout
})
rl.question('YouTube Video Title: \n',generateMeta)