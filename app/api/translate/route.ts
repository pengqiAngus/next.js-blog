// app/api/translate/route.js
import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI({
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  apiKey: "sk-f87da340ec17463fb23e0cdd39115579",
});
export async function POST(req) {
    try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json(
        { message: "Text is required" },
        { status: 400 }
      );
    }

    // 使用OpenAI API进行翻译
    const data = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a translator. Translate the following text to Chinese. Only return the translated text without any explanations:",
        },
        {
          role: "user",
          content: text,
        },
      ],
      model: "qwen-plus",
    });


    return NextResponse.json({
      translatedText: data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { message: "Translation failed" },
      { status: 500 }
    );
  }
}
