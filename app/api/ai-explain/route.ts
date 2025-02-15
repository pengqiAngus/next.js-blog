export const runtime = "edge";

import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  apiKey: "sk-f87da340ec17463fb23e0cdd39115579",
});

export async function POST(req) {
  try {
    const { term } = await req.json();

    if (!term) {
      return new Response(
        JSON.stringify({
          message: "Please provide the terms you want to explain",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const prompt = `Please explain in detail the technical term: "${term}".
Requirements:
1. Give accurate, professional definitions
2. Explain its importance and application scenarios
3. If there are relevant examples, please give specific examples
4. Use plain language
5. Please describe your area of expertise, if any Present this information in a structured manner.
6. Explain length don't more than 200 words
7. use points and point make one line the description and second line`;
    console.log(req);
    
    const response = await openai.chat.completions.create({
      model: "qwen-plus",
      messages: [
        {
          role: "system",
          content:
            "You are a professional terminology explainer, adept at explaining complex concepts in simple terms. Focus on accuracy and understandability in your answers. ",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });
    console.log(response);
    // 创建一个 Transform Stream 来处理 OpenAI 的响应
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // 处理流式响应
    (async () => {
      try {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            // 将内容写入流
            await writer.write(encoder.encode(content));
          }
        }
      } catch (error) {
        console.error("Streaming error:", error);
      } finally {
        await writer.close();
      }
    })();

    return new Response(stream.readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        message: error.message || "error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
