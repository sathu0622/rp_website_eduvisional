export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/EduvisionAi.png"
        alt="EduVisionAI Logo"
        style={{
          width: 80,
          height: 80,
          objectFit: "contain",
        }}
      />
      <div>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 20,
            letterSpacing: "0.5px",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#1e3a6e" }}>EDUVISION</span>
          <span style={{ color: "#1e9fb4" }}>AI</span>
        </div>
        <div
          style={{
            fontSize: 9,
            color: "#5a7fa8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1.2,
            marginTop: 2,
          }}
        >
          History E-Learning · Sri Lanka
        </div>
      </div>
    </div>
  );
}
