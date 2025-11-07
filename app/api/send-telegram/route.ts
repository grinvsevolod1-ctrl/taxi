import { type NextRequest, NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8361910143:AAEf8XKqc1hm68nVXZ1nAHwyz3Oc7tnuCJY"
const TELEGRAM_CHAT_ID = "940316027"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, message } = body

    const text = `
🚖 *Новая заявка на работу в такси*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
${message ? `💬 *Сообщение:* ${message}` : ""}

⏰ Время: ${new Date().toLocaleString("ru-RU")}
    `.trim()

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send telegram message")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending telegram message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
