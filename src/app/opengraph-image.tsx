import { ImageResponse } from "next/og";

export const alt = "Thump — Control your Mac with taps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060608",
          color: "#f6f6f8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 320,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.10)",
            filter: "blur(120px)",
          }}
        />
        {/* ripple emblem */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            position: "relative",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 9999,
              border: "2px solid rgba(255,255,255,0.25)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 24,
              borderRadius: 9999,
              border: "2px solid rgba(255,255,255,0.45)",
            }}
          />
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              background: "#ffffff",
              boxShadow: "0 0 40px rgba(255,255,255,0.9)",
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>
          Tap your Mac. It listens.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "rgba(246,246,248,0.6)",
          }}
        >
          Thump — control your Mac with taps. No extra hardware.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            display: "flex",
            fontSize: 24,
            color: "rgba(246,246,248,0.4)",
          }}
        >
          Free · macOS 14+ · Apple Silicon
        </div>
      </div>
    ),
    { ...size },
  );
}
