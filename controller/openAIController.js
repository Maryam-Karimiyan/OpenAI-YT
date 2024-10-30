const openai=require("../config/openAIConfig")

const generateMeta=async(req,res)=>{
    const {title}=req.body
    const description=await openai.chat.completions.create({
    model:"gpt-3.5-turbo"
    ,
    messages:[
        {
            role:'user',
            content:`Come up with a description for youtube video ${title}`
        }
    ],
})

const tags=await openai.chat.completions.create({
    model:"gpt-3.5-turbo"
    ,
    messages:[
        {
            role:'user',
            content:`Come up with 10 keywords for youtube video ${title}`
        }
    ],
    max_tokens:20,
})
res.status(200).json({
    description:description.data.choices[0].message,
    tags:tags.data.choices[0].message,
})

}
const generateImage=async(req,res)=>{

    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: req.body.prompt,
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data[0].url;
      res.json({url:image_url})
      
}
module.exports={
    generateMeta,
    generateImage
}