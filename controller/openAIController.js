const openai=require("../config/openAIConfig")

const generateMeta=async(title)=>{
const description=await openai.chat.completions.create({
    model:"gpt-4o-mini"
    ,
    messages:[
        {
            role:'user',
            content:`Come up with a description for youtube video ${title}`
        }
    ],
})

const tags=await openai.chat.completions.create({
    model:"gpt-4o-mini"
    ,
    messages:[
        {
            role:'user',
            content:`Come up with 10 keywords for youtube video ${title}`
        }
    ],
})
console.log(tags.data.choices[0].message);

}

module.exports={
    generateMeta
}