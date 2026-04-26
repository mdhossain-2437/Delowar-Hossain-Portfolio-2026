import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Delowar Hossain — Web Developer & AI Enthusiast";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0d0d",
          color: "#e8e8e2",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Inter, ui-sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#b6baa3",
            letterSpacing: 6,
            fontSize: 18,
            textTransform: "uppercase",
          }}
        >
          <span>Delowar.dev</span>
          <span>Portfolio · 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <div
            style={{
              fontSize: 220,
              fontWeight: 800,
              letterSpacing: -8,
              lineHeight: 0.85,
              display: "flex",
            }}
          >
            <span style={{ color: "#e8e8e2" }}>DEL</span>
            <span style={{ color: "#c3f400" }}>O</span>
            <span style={{ color: "#e8e8e2" }}>WAR</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#b6baa3",
              maxWidth: 900,
              lineHeight: 1.4,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span>Crafting high-performance digital experiences where</span>
            <span style={{ color: "#fff" }}>code</span>
            <span>meets</span>
            <span style={{ color: "#c3f400" }}>intelligence.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#b6baa3",
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <span>MD Delowar Hossain · Joypurhat, BD</span>
          <span style={{ color: "#c3f400" }}>delowarhossain.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
