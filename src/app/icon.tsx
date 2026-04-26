import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 36,
          fontWeight: 900,
          color: "#0d0d0d",
          background:
            "radial-gradient(circle at 30% 20%, #d6ff35 0%, #c3f400 60%, #9bc400 100%)",
          borderRadius: 12,
          letterSpacing: -1,
        }}
      >
        d.
      </div>
    ),
    { ...size }
  );
}
