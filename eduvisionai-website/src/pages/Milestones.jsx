import { useState } from "react";
import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";
import { MILESTONES } from "../data/siteData";

export default function Milestones() {
  const [open, setOpen] = useState(null);

  return (
    <Section style={{ paddingBottom: 100 }}>
      <SectionTitle eyebrow="Milestones" title="Project Milestones" subtitle="All assessments, deadlines, and marks allocated throughout the project timeline." />
      <div style={{ maxWidth: 1024, margin: "0 auto", position: "relative" }}>
        {/* Vertical line with gradient */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #1e6fba 0%, #d4880e 50%, #0d9e6e 100%)", opacity: 0.2, borderRadius: 1, transform: "translateX(-50%)" }}></div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {MILESTONES.map((milestone, i) => (
            <div key={milestone.title} style={{ position: "relative", cursor: "pointer" }} onClick={() => setOpen(open === i ? null : i)}>
              {/* Timeline Dot */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: 10,
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: "4px solid #fff",
                background: milestone.status === 'completed' ? '#1e6fba' : milestone.status === 'in-progress' ? '#d4880e' : '#e0e8f0',
                boxShadow: milestone.status === 'in-progress' ? '0 0 15px rgba(212, 136, 14, 0.6)' : 'none',
                zIndex: 10,
                transform: "translateX(-50%)"
              }}></div>

              <div style={{ display: "flex", flexDirection: i % 2 === 0 ? "row-reverse" : "row", alignItems: "flex-start" }}>
                <div style={{ width: "45%", padding: 20, background: "#fff", borderRadius: 18, boxShadow: "0 4px 20px rgba(30,58,110,0.07)", border: "1.5px solid #e8f0fa", transition: "transform 0.3s", transform: open === i ? "translateY(-4px)" : "none" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#1e6fba", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{milestone.date}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1e2d4a", marginBottom: 8 }}>{milestone.title}</h3>
                  
                  <div style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-end" : "flex-start", alignItems: "center", gap: 8 }}>
                    <span style={{
                      padding: "4px 12px",
                      borderRadius: 12,
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      background: milestone.status === 'completed' ? '#0d9e6e' : milestone.status === 'in-progress' ? '#d4880e' : '#8aabcc',
                      color: "#fff"
                    }}>{milestone.status}</span>
                  </div>
                </div>
                <div style={{ width: "10%" }}></div>
              </div>
              {open === i && (
                <div style={{
                  marginTop: 10,
                  padding: "16px 20px",
                  background: "#f8fafc",
                  borderRadius: 12,
                  border: "1px solid #e8f0fa",
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#5a7a9a",
                  fontSize: 14,
                  lineHeight: 1.6,
                  width: "45%",
                  alignSelf: i % 2 === 0 ? "flex-end" : "flex-start"
                }}>
                  {milestone.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}