// const readline=require("readline")
// const {generateMeta,generateImage}=require("./controller/openAIController")
// const rl=readline.createInterface({
// input:process.stdin,
// output:process.stdout
// })
// // rl.question('YouTube Video Title: \n',generateMeta)
// rl.question('Describe a YouTube thumbnail: \n',generateImage)

const express=require("express")
const {generateMeta,generateImage}=require("./controller/openAIController")

const app=express()

app.listen(4000,()=>console.log('app is running on port 4000'))
//middleware
app.use(express.json())
app.use(express.static('public'))
//routes
app.post("/openai/meta",generateMeta)
app.post("/openai/image",generateImage)
