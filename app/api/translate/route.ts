// app/api/translate/route.js
import { NextResponse } from "next/server";

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
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
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
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Translation failed");
    }

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
