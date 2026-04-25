import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";
import { COMPONENTS } from "../data/siteData";

export default function Home() {
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0f5ff 0%, #e8f4fd 40%, #f5f0ff 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: 68,
        }}
      >
        {[["-120px", "-80px", 400, "rgba(30,111,186,0.06)"], ["auto", "-60px", 300, "rgba(30,158,180,0.07)"], ["60%", "auto", 200, "rgba(124,58,237,0.05)"]].map(([l, t, s, c], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: l !== "auto" ? l : undefined,
              right: l === "auto" ? "0" : undefined,
              top: t !== "auto" ? t : undefined,
              bottom: t === "auto" ? "10%" : undefined,
              width: s,
              height: s,
              borderRadius: "50%",
              background: c,
              pointerEvents: "none",
            }}
          />
        ))}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <img
            src="/EduvisionAi.png"
            alt="EduVisionAI Logo"
            style={{
              width: 250,
              height: 250,
              margin: "0 auto 32px",
              display: "block",
              objectFit: "contain",
            }}
          />
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1e9fb4", marginBottom: 18 }}>
            AI-Powered E-Learning Platform
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, color: "#1e2d4a", margin: "0 0 12px", lineHeight: 1.1 }}>
            EDUVISION<span style={{ color: "#1e6fba" }}>AI</span>
          </h1>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(14px, 2.5vw, 20px)", color: "#4a6f9a", margin: "0 0 28px", fontStyle: "italic", letterSpacing: "0.02em" }}>
            AI-Powered History E-Learning System for Visually Impaired O-Level Students in Sri Lanka
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#5a7a9a", maxWidth: 640, margin: "0 auto 44px", lineHeight: 1.8 }}>
            EduVisionAI bridges the accessibility gap in history education through multisensory AI storytelling, smart summarization, automated Braille exam correction, and voice-interactive tutoring.
          </p>
          {/* <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 48 }}>
            {["🎧 Multisensory Storytelling", "📄 Smart Summarization", "✏️ Braille Exam Correction", "🎙️ Voice QA Tutor"].map((feature) => (
              <span key={feature} style={{ background: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(30,111,186,0.18)", borderRadius: 999, padding: "8px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: "#1e3a6e" }}>
                {feature}
              </span>
            ))}
          </div> */}
        </div>
      </div>
      <Section style={{ paddingTop: 20, paddingBottom: 80 }}>
        <SectionTitle eyebrow="System Architecture" title="Four Integrated Components" subtitle="Each component addresses a unique accessibility challenge faced by visually impaired history students." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {COMPONENTS.map((component) => (
            <div key={component.id} style={{ background: "#fff", borderRadius: 20, padding: 28, boxShadow: "0 4px 24px rgba(30,58,110,0.07)", border: `2px solid ${component.color}18` }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{component.icon}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: component.color, marginBottom: 8 }}>
                Component {component.id.slice(1)}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 800, color: "#1e2d4a", margin: "0 0 10px" }}>{component.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#6b8aaa", lineHeight: 1.7, margin: 0 }}>{component.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}