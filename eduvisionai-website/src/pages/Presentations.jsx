import Section from "../components/layout/Section";
import SectionTitle from "../components/layout/SectionTitle";

export default function Presentations() {
  const presentationGroups = [
    {
      title: "Proposal Presentation",
      color: "#1e6fba",
      presentations: [
        {
          title: "Proposal Presentation",
          date: "September 2025",
          status: "available",
          link: "/presentations/Proposal_Presentation_25-26J-438.pptx",
        },
      ],
    },
    {
      title: "Progress Presentations",
      color: "#0d9e6e",
      presentations: [
        {
          title: "Progress Presentation - I",
          date: "December 2025",
          status: "available",
          link: "/presentations/Progress Presentation 1_ 25-26J-438 (1).pptx",
        },
        {
          title: "Progress Presentation - II",
          date: "March 2026",
          status: "available",
          link: "/presentations/Copy of Green and Blue Classy Elegant Technology Group Project Presentation (2).pdf",
        },
      ],
    },
    {
      title: "Final Presentation",
      color: "#7c3aed",
      presentations: [
        {
          title: "Final Presentation & VIVA",
          date: "May 2026",
          status: "pending",
          link: "/presentations/final-presentation.pptx",
        },
      ],
    },
  ];

  return (
    <Section style={{ paddingBottom: 100 }}>
      <SectionTitle
        eyebrow="Presentations"
        title="Presentation Slides"
        subtitle="Slides from past presentations and upcoming submissions."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {presentationGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {/* Group Title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 800,
                color: group.color,
                marginBottom: 20,
              }}
            >
              {group.title}
            </h3>

            {/* Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {group.presentations.map((presentation, presIndex) => (
                <div
                  key={presIndex}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: 22,
                    boxShadow: "0 4px 20px rgba(30,58,110,0.07)",
                    border: `2px solid ${group.color}30`,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(30,58,110,0.12)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(30,58,110,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Title */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ fontSize: 28 }}>🎬</span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#1e2d4a",
                        lineHeight: 1.4,
                      }}
                    >
                      {presentation.title}
                    </span>
                  </div>

                  {/* Date */}
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "#6b8aaa",
                    }}
                  >
                    {presentation.date}
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      paddingTop: 12,
                      borderTop: `1px solid ${group.color}20`,
                    }}
                  >
                    {presentation.status === "available" ? (
                      <>
                        <a
                          href={presentation.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            textDecoration: "none",
                            color: group.color,
                            fontWeight: 700,
                            fontSize: 13,
                          }}
                        >
                          View
                        </a>

                        <span style={{ color: `${group.color}60` }}>→</span>

                        <a
                          href={presentation.link}
                          download
                          style={{
                            textDecoration: "none",
                            color: group.color,
                            fontWeight: 700,
                            fontSize: 13,
                          }}
                        >
                          Download
                        </a>

                        <span style={{ color: `${group.color}60` }}>↓</span>
                      </>
                    ) : (
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: 12,
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          background: "#e8f0fa",
                          color: "#8aabcc",
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}