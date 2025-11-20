import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Работа водителем в такси"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #fefce8)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "20px",
          background: "#fbbf24",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "20px",
          background: "#fbbf24",
          display: "flex",
        }}
      />

      {/* Logo / Brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
            marginRight: "20px",
            boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#1f2937" }}>Работа в такси</div>
          <div style={{ fontSize: "24px", color: "#d97706" }}>ООО "ИвентТайм"</div>
        </div>
      </div>

      {/* Main Heading */}
      <div
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "#111827",
          textAlign: "center",
          marginBottom: "20px",
          lineHeight: 1.1,
          maxWidth: "900px",
        }}
      >
        Выгодные условия для водителей
      </div>

      {/* Subheading / Cities */}
      <div
        style={{
          fontSize: "32px",
          color: "#4b5563",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        Минск • Могилев • Витебск
      </div>

      {/* Benefits Cards */}
      <div style={{ display: "flex", gap: "40px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            padding: "20px 40px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            border: "2px solid #fef3c7",
          }}
        >
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#d97706" }}>40%</div>
          <div style={{ fontSize: "20px", color: "#6b7280" }}>от кассы</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            padding: "20px 40px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            border: "2px solid #fef3c7",
          }}
        >
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#d97706" }}>Авто</div>
          <div style={{ fontSize: "20px", color: "#6b7280" }}>предоставляем</div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
