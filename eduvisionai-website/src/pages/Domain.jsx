import { useState } from "react";
import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";
import { COMPONENTS } from "../data/siteData";

export default function Domain() {
  const [activeComp, setActiveComp] = useState(0);
  const [activeTab, setActiveTab] = useState("gap");
  const component = COMPONENTS[activeComp];
  const tabs = [
    { id: "gap", label: "Research Gap" },
    { id: "problem", label: "Research Problem" },
    { id: "objective", label: "Objectives" },
    { id: "methodology", label: "Methodology" },
    { id: "literature", label: "Literature Survey" },
  ];

  // Get all unique technologies from all components
  const allTechnologies = [
    { name: "React", description: "Frontend UI development", emoji: "⚛️" },
    { name: "Tailwind CSS", description: "Modern utility-first CSS", emoji: "🎨" },
    { name: "TypeScript", description: "Static typing for JavaScript", emoji: "🧠" },
    { name: "Python", description: "AI/ML backend services", emoji: "🐍" },
    { name: "TensorFlow", description: "Model training & evaluation", emoji: "🧮" },
    { name: "HuggingFace Transformers", description: "LLM fine-tuning & inference", emoji: "🤗" },
    { name: "MongoDB", description: "NoSQL database for analytics", emoji: "🍃" },
    { name: "FastAPI", description: "Lightweight Python backend", emoji: "⚡" },
    { name: "Vite", description: "Blazing fast dev server for React", emoji: "🚀" },
    { name: "Azure", description: "Cloud hosting and deployment (CI/CD)", emoji: "☁️" },
    { name: "GitHub Actions", description: "Automation workflows for building, testing, deploying", emoji: "🔁" },
    { name: "OCR (Tesseract)", description: "Text extraction from scanned content & images", emoji: "🔍" }
  ];

  return (
    <Section style={{ paddingBottom: 100 }}>
      <SectionTitle eyebrow="Domain" title="Research Domain" subtitle="Explore the literature survey, research gaps, problems, objectives, and methodologies across all four components." />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 36 }}>
        {COMPONENTS.map((comp, i) => (
          <button
            key={comp.id}
            onClick={() => {
              setActiveComp(i);
              setActiveTab("gap");
            }}
            style={{
              padding: "10px 20px",
              borderRadius: 12,
              border: `2px solid ${activeComp === i ? comp.color : "#e0e8f0"}`,
              background: activeComp === i ? comp.color : "#fff",
              color: activeComp === i ? "#fff" : "#3a5a82",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            <span>{comp.icon}</span> {comp.title}
          </button>
        ))}
      </div>



      <div style={{ background: "#fff", borderRadius: 24, boxShadow: "0 8px 40px rgba(30,58,110,0.09)", overflow: "hidden", border: `2px solid ${component.color}20` }}>
        <div style={{ background: `linear-gradient(135deg, ${component.color} 0%, ${component.color}cc 100%)`, padding: "32px 40px", color: "#fff" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>{component.icon}</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, margin: 0 }}>{component.title}</h2>
        </div>
        <div style={{ display: "flex", borderBottom: "2px solid #f0f4fa", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 22px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 13.5,
                color: activeTab === tab.id ? component.color : "#6b8aaa",
                borderBottom: activeTab === tab.id ? `3px solid ${component.color}` : "3px solid transparent",
                marginBottom: -2,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        
        <div style={{ padding: "36px 40px", fontFamily: "'DM Sans', sans-serif", color: "#4a6a8a", lineHeight: 1.8 }}>
          {activeTab === "gap" && <p>{component.gap}</p>}
          {activeTab === "problem" && <p>{component.problem}</p>}
          {activeTab === "objective" && <p>{component.objective}</p>}
          {activeTab === "methodology" && <p>{component.methodology}</p>}
          {activeTab === "literature" && <p>{component.literature}</p>}
        </div>

        
      </div>
      <div style={{ paddingTop: "40px" }}>
            {/* Common Technologies Section */}
      <div style={{ background: "#fff", borderRadius: 24, boxShadow: "0 8px 40px rgba(30,58,110,0.09)", overflow: "hidden", border: "2px solid #e8f0fa", marginBottom: 40 }}>
        <div style={{ background: "linear-gradient(135deg, #1e3a6e 0%, #1e6fba 100%)", padding: "32px 40px", color: "#fff" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🛠️</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, margin: 0 }}>Tools & Technologies</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, margin: "8px 0 0", opacity: 0.9 }}>All technologies used across the EduVisionAI platform</p>
        </div>
        <div style={{ padding: "36px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {allTechnologies.map((tech) => {
              const getTechLogo = (techName) => {
                const logoMap = {
                  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                  "HuggingFace Transformers": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
                  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
                  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
                  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
                  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                  "OCR (Tesseract)": "https://img.icons8.com/color/48/scan-document.png",
                  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
                  "NLP": "https://img.icons8.com/color/48/artificial-intelligence.png",
                  "TTS": "https://img.icons8.com/color/48/speech-bubble.png",
                  "Speech-to-Text": "https://img.icons8.com/color/48/microphone.png",
                  "BART": "https://img.icons8.com/color/48/artificial-intelligence.png",
                  "BERT": "https://img.icons8.com/color/48/artificial-intelligence.png",
                  "Semantic Similarity": "https://img.icons8.com/color/48/compare.png",
                  "Adaptive Learning": "https://img.icons8.com/color/48/brain.png"
                };
                return logoMap[techName] || "https://img.icons8.com/color/48/code.png";
              };

              return (
                <div key={tech.name} style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 4px 20px rgba(30,58,110,0.07)", border: "1.5px solid rgba(30,111,186,0.2)", textAlign: "center", transition: "transform 0.2s", cursor: "pointer" }} onMouseEnter={(e) => e.target.style.transform = "translateY(-4px)"} onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}>
                  <img
                    src={getTechLogo(tech.name)}
                    alt={`${tech.name} logo`}
                    style={{ width: 48, height: 48, objectFit: "contain", margin: "0 auto 16px", display: "block" }}
                  />
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1e6fba", fontSize: 16 }}>
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}