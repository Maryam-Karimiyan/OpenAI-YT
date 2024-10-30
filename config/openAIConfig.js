// const { Configuration, OpenAIApi } = require("openai");
const  OpenAIApi  = require("openai");
// import {Configuration,OpenAIApi} from "openai"
require("dotenv").config();
// const configuration=new Configuration({
// apiKey:process.env.AI_KEY
// })

const openai = new OpenAIApi({
  apiKey: process.env.AI_KEY,
});
module.exports = openai;
