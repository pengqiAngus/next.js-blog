// app/api/translate/route.js
import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  apiKey: "sk-f87da340ec17463fb23e0cdd39115579",
});
export async function POST(req) {
    try {
    const { content } = await req.json();
    if (!content) {
      return NextResponse.json(
        { message: "content is required" },
        { status: 400 }
      );
    }

    // 使用OpenAI API进行翻译
    const data = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
             `Please identify all proprietary terms (like product names, technologies, frameworks, libraries) in the following HTML content. Return a JSON array of the identified terms. Only return the JSON array, no other text:\n\n${content}`
        },

      ],
      model: "qwen-plus",
    });


    return NextResponse.json({
      data: data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { message: "Translation failed" },
      { status: 500 }
    );
  }
}
