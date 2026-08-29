import { ImageResponse } from "next/og";

export const alt =
  "ALPHA TRAINING LLC — Marketing consulting and digital training";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f4f0e8",
        color: "#172720",
        display: "flex",
        height: "100%",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid #172720",
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.14em",
            }}
          >
            ALPHA TRAINING LLC
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "serif",
                fontSize: 72,
                lineHeight: 1.02,
              }}
            >
              Marketing,
              <br />
              made useful.
            </div>
            <div
              style={{
                color: "#59635c",
                fontSize: 24,
              }}
            >
              Consulting and digital training · Sheridan, Wyoming
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#172720",
            color: "#f4f0e8",
            display: "flex",
            fontFamily: "serif",
            fontSize: 126,
            justifyContent: "center",
            width: "280px",
          }}
        >
          AT
        </div>
      </div>
    </div>,
    size,
  );
}
